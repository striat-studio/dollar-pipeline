import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import ImageLightbox from "../../components/ImageLightbox";

export const metadata: Metadata = {
  title: "SchoolOga",
  description:
    "Accountability infrastructure for private schools. Pattern-based staff accountability, fee intelligence, and real-time financial visibility.",
  openGraph: {
    title: "SchoolOga — Striat",
    description: "Accountability infrastructure for private schools.",
  },
};

const sidebar = [
  { label: "Role", value: "Product (Striat-built and owned)" },
  {
    label: "Stack",
    value:
      "Next.js 14, Express, MongoDB, BullMQ, Upstash Redis, Paystack, Cloudinary, WhatsApp Business API",
  },
  { label: "Scale", value: "Live with active school operations" },
  { label: "Reach", value: "Nigerian private school network" },
  { label: "Status", value: "Live · Onboarding new schools" },
];

export default function SchoolOgaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-[1280px] mx-auto">
        <FadeIn>
          <Link
            href="/work"
            className="link-underline font-mono text-xs text-[#52525B] hover:text-[#A1A1AA] transition-colors duration-200 mb-10 inline-block"
          >
            ← All work
          </Link>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-4">
            PRODUCT · 2026 · LIVE · A STRIAT PRODUCT
          </p>
          <h1
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            SchoolOga
          </h1>
          <p className="text-2xl text-[#A1A1AA] leading-relaxed max-w-2xl">
            Accountability infrastructure for private schools
          </p>
        </FadeIn>
      </section>

      {/* Hero image */}
      <section className="px-6 md:px-12 max-w-[1280px] mx-auto mb-16">
        <FadeIn>
          <ImageLightbox
            src="/screenshots/schoologa-pattern.png"
            alt="SchoolOga pattern detection page"
            caption="Pattern-based staff accountability — automated detection of lateness, GPS mismatches, and lesson note gaps"
          />
        </FadeIn>
      </section>

      {/* Main content */}
      <section className="pb-32 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#1F1F23]">
        <div className="grid md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px] gap-16 md:gap-20 pt-16">
          {/* Left: content */}
          <div className="space-y-14">
            <FadeIn>
              <div>
                <h2 className="font-sans font-medium text-xl text-[#F4F4F5] mb-4">
                  Context
                </h2>
                <p className="text-[#A1A1AA] text-base leading-relaxed">
                  Private schools across Nigeria run on paper, WhatsApp groups,
                  and manual tracking. Owners cannot see staff attendance in real
                  time. Fee collection is opaque and delayed. Accountability
                  fails at the layer that matters most — whether teachers
                  actually showed up, taught, and submitted lesson notes.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div>
                <h2 className="font-sans font-medium text-xl text-[#F4F4F5] mb-4">
                  The challenge
                </h2>
                <p className="text-[#A1A1AA] text-base leading-relaxed">
                  Build a system that gives school owners genuine visibility into
                  the day-to-day operations of their schools — not a dashboard
                  that shows surface metrics, but an infrastructure layer that
                  detects bad patterns, flags exceptions, and forces
                  accountability without requiring the owner to be physically
                  present.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="font-sans font-medium text-xl text-[#F4F4F5] mb-4">
                  The work
                </h2>
                <p className="text-[#A1A1AA] text-base leading-relaxed mb-6">
                  SchoolOga is a Striat product, designed and built end-to-end.
                  The platform combines three core modules into a single
                  operating layer for school owners.
                </p>
                <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-4">
                  Key systems delivered
                </p>
                <ul className="space-y-4">
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">
                      Pattern-based staff accountability
                    </strong>{" "}
                    — automated detection of consistent lateness, location
                    mismatches via GPS verification, lesson note gaps, and admin
                    override attempts. Severity tiers (warning, critical) with
                    resolution workflow.
                  </li>
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">
                      Fee intelligence
                    </strong>{" "}
                    — term collection tracking, cash flow projection at current
                    pace, outstanding balance management with class and sibling
                    grouping, automated parent reminders via WhatsApp and SMS
                    fallback.
                  </li>
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">
                      Real-time owner dashboard
                    </strong>{" "}
                    — daily collection totals, staff present count, term
                    progress, recent activity feed with auto-refresh.
                  </li>
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">
                      Multi-role access
                    </strong>{" "}
                    — owner, principal, head teacher, secretary, with
                    role-scoped permissions and audit logging on every sensitive
                    action.
                  </li>
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">
                      WhatsApp-first communication
                    </strong>{" "}
                    — primary channel for fee reminders and notifications, with
                    seamless SMS fallback when WhatsApp delivery is unavailable.
                  </li>
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">
                      Paystack payments
                    </strong>{" "}
                    — direct subscription billing for schools, parent fee
                    collection with reconciliation back to the platform.
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Inline screenshot: dashboard */}
            <FadeIn delay={0.12}>
              <ImageLightbox
                src="/screenshots/schoologa-dashboard.png"
                alt="SchoolOga owner dashboard"
                caption="Real-time owner dashboard with daily collection totals and staff tracking"
              />
            </FadeIn>

            {/* Inline screenshot: fees */}
            <FadeIn delay={0.13}>
              <ImageLightbox
                src="/screenshots/schoologa-fees.png"
                alt="SchoolOga fee intelligence module"
                caption="Fee intelligence module with collection tracking and cash flow projection"
              />
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <h2 className="font-sans font-medium text-xl text-[#F4F4F5] mb-4">
                  The outcome
                </h2>
                <p className="text-[#A1A1AA] text-base leading-relaxed">
                  Live in production with schools onboarded. Tracking
                  ₦6.4M+ in term fees, monitoring 67 outstanding accounts, and
                  active staff pattern detection across multiple roles.
                  Go-to-market through NAPPS Lagos referral network.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: sidebar */}
          <FadeIn delay={0.1}>
            <aside className="md:sticky md:top-24 self-start">
              <div className="divide-y divide-[#1F1F23] border border-[#1F1F23] rounded-[6px] overflow-hidden">
                {sidebar.map((item) => (
                  <div key={item.label} className="bg-[#111113] px-5 py-4">
                    <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-1.5">
                      {item.label}
                    </p>
                    <p className="font-sans text-sm text-[#A1A1AA]">
                      {item.value}
                    </p>
                  </div>
                ))}
                {/* Link */}
                <div className="bg-[#111113] px-5 py-4">
                  <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-1.5">
                    Link
                  </p>
                  <a
                    href="https://schoologa.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-sans text-sm text-[#7CFFB2] hover:text-[#5DEBA0] transition-colors duration-200"
                  >
                    schoologa.tech →
                  </a>
                </div>
              </div>
            </aside>
          </FadeIn>
        </div>

        {/* Next case study */}
        <FadeIn delay={0.1}>
          <div className="mt-20 pt-10 border-t border-[#1F1F23]">
            <Link href="/work/daily-manna" className="group block">
              <span className="font-mono text-xs text-[#52525B] uppercase tracking-widest">
                Next case study
              </span>
              <p className="font-sans font-medium text-2xl text-[#F4F4F5] tracking-tight mt-2 group-hover:text-[#7CFFB2] transition-colors duration-200">
                Daily Manna →
              </p>
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
