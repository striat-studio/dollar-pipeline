import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/* ── Rate limiter (in-memory, per-IP, 3 req/hour) ── */
const rateMap = new Map<string, number[]>();
const RATE_LIMIT = 3;
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateMap.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW);
  if (timestamps.length >= RATE_LIMIT) {
    rateMap.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  rateMap.set(ip, timestamps);
  return false;
}

/* ── Helpers ── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(str: string): string {
  return str.trim().replace(/<[^>]*>/g, "");
}

/* ── Handler ── */
export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = await req.json();

    // Honeypot: bots fill hidden fields
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const name = sanitize(body.name ?? "");
    const email = sanitize(body.email ?? "");
    const message = sanitize(body.message ?? "");
    const company = sanitize(body.company ?? "");
    const location = sanitize(body.location ?? "");
    const engagementType = sanitize(body.engagementType ?? "");
    const timeline = sanitize(body.timeline ?? "");
    const investment = sanitize(body.investment ?? "");

    // Required fields
    if (!name) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 },
      );
    }
    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 },
      );
    }
    if (!message) {
      return NextResponse.json(
        { success: false, error: "Message is required." },
        { status: 400 },
      );
    }

    // Email format
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const userAgent = req.headers.get("user-agent") ?? "unknown";
    const timestamp = new Date().toISOString();
    const companyDisplay = company || "Independent";

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM!,
      to: process.env.CONTACT_EMAIL_TO!,
      replyTo: email,
      subject: `New Striat inquiry: ${name} at ${companyDisplay}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; color: #1a1a1a;">
          <h2 style="font-size: 18px; font-weight: 600; margin-bottom: 24px;">
            New inquiry from ${name}
          </h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 12px 8px 0; color: #666; vertical-align: top; white-space: nowrap;">Name</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px 8px 0; color: #666; vertical-align: top; white-space: nowrap;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px 8px 0; color: #666; vertical-align: top; white-space: nowrap;">Company</td>
              <td style="padding: 8px 0;">${companyDisplay}</td>
            </tr>
            ${location ? `<tr><td style="padding: 8px 12px 8px 0; color: #666; vertical-align: top; white-space: nowrap;">Location</td><td style="padding: 8px 0;">${location}</td></tr>` : ""}
            ${engagementType ? `<tr><td style="padding: 8px 12px 8px 0; color: #666; vertical-align: top; white-space: nowrap;">Engagement</td><td style="padding: 8px 0;">${engagementType}</td></tr>` : ""}
            ${timeline ? `<tr><td style="padding: 8px 12px 8px 0; color: #666; vertical-align: top; white-space: nowrap;">Timeline</td><td style="padding: 8px 0;">${timeline}</td></tr>` : ""}
            ${investment ? `<tr><td style="padding: 8px 12px 8px 0; color: #666; vertical-align: top; white-space: nowrap;">Investment</td><td style="padding: 8px 0;">${investment}</td></tr>` : ""}
          </table>
          <div style="margin: 24px 0; padding: 16px; background: #f5f5f5; border-radius: 6px; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
          <p style="font-size: 12px; color: #999;">
            Submitted at ${timestamp}<br />
            IP: ${ip}<br />
            UA: ${userAgent}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Could not send message" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { success: false, error: "Could not send message" },
      { status: 500 },
    );
  }
}
