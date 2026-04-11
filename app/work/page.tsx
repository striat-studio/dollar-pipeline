import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "../components/SectionLabel";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Engagements Striat has designed, built, and shipped. Real systems, real users, real outcomes.",
  openGraph: {
    title: "Work — Striat",
    description:
      "Three case studies. Real systems, real users, real outcomes.",
  },
};

const caseStudies = [
  {
    label: "FLAGSHIP · 2025 · LIVE",
    title: "Daily Manna",
    description:
      "Backend infrastructure for a global Bible devotional platform serving millions of users daily across every continent.",
    stack: "Node.js · Express · MongoDB · Multi-language · 12+ locales",
    href: "/work/daily-manna",
    screenshot: "/screenshots/dailymanna-home.png",
    alt: "Daily Manna homepage with language dropdown",
  },
  {
    label: "CLIENT · 2025 · CONFIDENTIAL",
    title: "Healthcare Network",
    description:
      "Full-stack healthcare coordination platform with patient access, appointment management, and end-to-end financial integration.",
    stack: "TypeScript · Node.js · PostgreSQL · Sequelize · QuickBooks API",
    href: "/work/healthcare-network",
    screenshot: "/screenshots/healthcare-admin.jpg",
    alt: "Healthcare network admin revenue dashboard",
  },
  {
    label: "PRODUCT · 2026 · LIVE · A STRIAT PRODUCT",
    title: "SchoolOga",
    description:
      "School management infrastructure for private schools. Pattern-based staff accountability, fee intelligence, and real-time financial visibility for owners.",
    stack: "Next.js 14 · Express · MongoDB · BullMQ · Paystack · WhatsApp Business API",
    href: "/work/schoologa",
    screenshot: "/screenshots/schoologa-pattern.png",
    alt: "SchoolOga pattern detection page",
  },
];

const otherEngagements = [
  "Events platform with WhatsApp automation, multi-gateway payments, and Redis-backed job queues",
  "Real-time communication system with WebSocket video and messaging",
  "Healthcare practice management with role-based clinical workflows",
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-[1280px] mx-auto">
        <FadeIn>
          <SectionLabel className="mb-8 block">Selected work</SectionLabel>
          <h1
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}
          >
            Engagements we have designed, built, and shipped.
          </h1>
          <p className="text-xl text-[#A1A1AA] leading-relaxed max-w-2xl">
            Three case studies. Real systems, real users, real outcomes.
          </p>
        </FadeIn>
      </section>

      {/* Case study cards */}
      <section className="pb-24 px-6 md:px-12 max-w-[1280px] mx-auto">
        <div className="divide-y divide-[#1F1F23] border-t border-[#1F1F23]">
          {caseStudies.map((cs, i) => (
            <FadeIn key={cs.href} delay={i * 0.07}>
              <div className="py-12">
                {/* Screenshot */}
                <div className="w-full border border-[#1F1F23] rounded-[6px] bg-[#111113] aspect-video relative overflow-hidden mb-8">
                  <img
                    src={cs.screenshot}
                    alt={cs.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-4">
                  {cs.label}
                </p>
                <h2 className="font-sans font-medium text-3xl text-[#F4F4F5] tracking-tight mb-3">
                  {cs.title}
                </h2>
                <p className="text-[#A1A1AA] text-base leading-relaxed max-w-2xl mb-5">
                  {cs.description}
                </p>
                <p className="font-mono text-xs text-[#52525B] leading-loose mb-6">
                  {cs.stack}
                </p>
                <Link
                  href={cs.href}
                  className="link-underline font-mono text-sm text-[#7CFFB2] hover:text-[#5DEBA0] transition-colors duration-200"
                >
                  Read case study →
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Other engagements */}
      <section className="pb-32 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#1F1F23]">
        <div className="py-16">
          <FadeIn>
            <h3 className="font-sans font-medium text-2xl text-[#F4F4F5] tracking-tight mb-3">
              Other engagements
            </h3>
            <p className="text-[#A1A1AA] text-base mb-8">
              Selected projects from earlier collaborations.
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <ul className="space-y-3 mb-8">
              {otherEngagements.map((item) => (
                <li
                  key={item}
                  className="font-mono text-sm text-[#A1A1AA] leading-loose"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="font-mono text-xs text-[#52525B]">
              Additional confidential engagements not listed.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
