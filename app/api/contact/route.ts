import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, projectType, timeline, budget, message } =
      body;

    // Basic validation
    if (!name || !email || !projectType || !timeline || !budget || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log to console for now — wire to Resend or Formspree later
    console.log("Contact form submission:", {
      name,
      email,
      company,
      projectType,
      timeline,
      budget,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
