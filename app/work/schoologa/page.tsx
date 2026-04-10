import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "../../components/SectionLabel";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "SchoolOga — Case Study",
  description:
    "School management infrastructure for Nigerian private schools. Staff accountability, fee intelligence, and role-based dashboards.",
};

const stack = [
  "Next.js 14",
  "Express",
  "MongoDB Atlas",
  "BullMQ",
  "Upstash Redis",
  "Paystack",
  "Cloudinary",
];

export default function SchoolOgaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 px-6 md:px-12 max-w-[1280px] mx-auto">
        <FadeIn>
          <Link
            href="/work"
            className="link-underline font-mono text-xs text-[#52525B] hover:text-[#A1A1AA] transition-colors duration-200 mb-10 inline-block"
          >
            ← Work
          </Link>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            SchoolOga
          </h1>
          <p className="text-xl md:text-2xl text-[#A1A1AA] leading-relaxed max-w-2xl mb-8">
            School management infrastructure for Nigerian private schools
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "Type", value: "Product" },
              { label: "Year", value: "2026" },
              { label: "Status", value: "Live" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#52525B] uppercase tracking-widest">
                  {item.label}
                </span>
                <span className="font-mono text-xs text-[#A1A1AA]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Screenshot placeholder */}
      <section className="px-6 md:px-12 max-w-[1280px] mx-auto mb-20 md:mb-28">
        <FadeIn>
          <div
            className="w-full border border-[#1F1F23] rounded-[6px] bg-[#111113]"
            style={{ aspectRatio: "16/9" }}
          />
        </FadeIn>
      </section>

      {/* Main content */}
      <section className="pb-32 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#1F1F23]">
        <div className="grid md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_300px] gap-16 md:gap-24 pt-16 md:pt-20">
          {/* Left: case study content */}
          <div className="space-y-16">
            <FadeIn>
              <CaseSection title="The challenge">
                Private schools in Nigeria run on paper, WhatsApp groups, and
                manual tracking. Staff attendance is unverifiable. Fee collection
                is delayed and opaque. Owners have no real-time visibility into
                their operations.
              </CaseSection>
            </FadeIn>

            <FadeIn delay={0.05}>
              <CaseSection title="The approach">
                We built a three-module system: staff accountability, fee
                intelligence, and role-based dashboards. WhatsApp-first
                communication with SMS fallback. Built for the realities of
                intermittent internet and mobile-first usage.
              </CaseSection>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <SectionLabel className="mb-5 block">The stack</SectionLabel>
                <ul className="space-y-2">
                  {stack.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-mono text-sm text-[#A1A1AA]"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#1F1F23] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <CaseSection title="The outcome">
                Currently in live operation. First school onboarded. Go-to-market
                through NAPPS Lagos referral network.
              </CaseSection>
            </FadeIn>
          </div>

          {/* Right: sidebar */}
          <FadeIn delay={0.1}>
            <aside className="md:sticky md:top-28 space-y-8 self-start">
              <div className="divide-y divide-[#1F1F23] border border-[#1F1F23] rounded-[6px] overflow-hidden">
                {[
                  { label: "Role", value: "Design, engineering, deployment" },
                  { label: "Timeline", value: "Ongoing" },
                  { label: "Status", value: "Live" },
                ].map((item) => (
                  <div key={item.label} className="bg-[#111113] px-5 py-4">
                    <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-1.5">
                      {item.label}
                    </p>
                    <p className="font-sans text-sm text-[#A1A1AA]">
                      {item.value}
                    </p>
                  </div>
                ))}
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

        {/* Next project */}
        <FadeIn delay={0.1}>
          <div className="mt-20 md:mt-28 pt-10 border-t border-[#1F1F23]">
            <span className="font-mono text-xs text-[#52525B] uppercase tracking-widest">
              Next project →
            </span>
            <p className="font-mono text-xs text-[#1F1F23] mt-1">
              Coming soon
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

function CaseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <SectionLabel className="mb-5 block">{title}</SectionLabel>
      <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed">
        {children}
      </p>
    </div>
  );
}
