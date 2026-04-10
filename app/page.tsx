import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "./components/SectionLabel";
import FadeIn from "./components/FadeIn";

export const metadata: Metadata = {
  title: "Striat — Software Infrastructure Studio",
  description:
    "Striat is a technical studio. We design and ship production-ready systems for founders and operators who need software that survives growth.",
};

const capabilities = [
  {
    number: "01",
    title: "Production MVPs",
    description:
      "Full-stack products shipped in 1 to 2 weeks. Designed, built, tested, deployed.",
  },
  {
    number: "02",
    title: "WhatsApp Business Infrastructure",
    description:
      "Integration and automation systems for businesses operating at scale on WhatsApp.",
  },
  {
    number: "03",
    title: "Custom Systems",
    description:
      "Dashboards, internal tools, APIs, and integrations for teams that outgrew templates.",
  },
];

const stats = [
  { value: "1–2 weeks", label: "Typical MVP timeline" },
  { value: "Flat rate", label: "Pricing model" },
  { value: "End-to-end", label: "Delivery approach" },
  { value: "Global", label: "Client base" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <section className="pt-40 pb-28 md:pt-48 md:pb-36 px-6 md:px-12 max-w-[1280px] mx-auto">
        <FadeIn>
          <SectionLabel className="mb-8 block">01 / Studio</SectionLabel>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1
            className="font-sans font-medium text-[#F4F4F5] tracking-tight leading-[1.05] mb-8"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
            }}
          >
            Software infrastructure,
            <br />
            built to outlast.
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="max-w-2xl text-lg md:text-xl text-[#A1A1AA] leading-relaxed mb-12">
            Striat is a technical studio. We design and ship production-ready
            systems for founders and operators who need software that survives
            growth.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center h-11 px-6 rounded-[6px] bg-[#7CFFB2] text-[#0A0A0B] font-sans font-medium text-sm tracking-tight hover:bg-[#5DEBA0] transition-colors duration-200"
            >
              Start a project
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center h-11 px-6 rounded-[6px] border border-[#1F1F23] text-[#A1A1AA] font-sans text-sm tracking-tight hover:text-[#F4F4F5] hover:border-[#52525B] transition-colors duration-200"
            >
              See our work
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-mono text-xs text-[#52525B] tracking-widest uppercase">
            Lagos&nbsp;&nbsp;·&nbsp;&nbsp;Global&nbsp;&nbsp;·&nbsp;&nbsp;Est. 2026
          </p>
        </FadeIn>
      </section>

      {/* ── Capabilities ──────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#1F1F23]">
        <FadeIn>
          <SectionLabel className="mb-6 block">02 / Capabilities</SectionLabel>
          <h2
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            What we build
          </h2>
        </FadeIn>

        <div className="divide-y divide-[#1F1F23]">
          {capabilities.map((cap, i) => (
            <FadeIn key={cap.number} delay={i * 0.07}>
              <div className="group flex items-start md:items-center justify-between py-8 gap-6">
                <div className="flex items-start md:items-center gap-6 md:gap-10 flex-1">
                  <span className="font-mono text-xs text-[#52525B] tracking-widest shrink-0 pt-1 md:pt-0">
                    {cap.number}
                  </span>
                  <div>
                    <h3 className="font-sans font-medium text-xl text-[#F4F4F5] mb-2 md:mb-0 md:inline">
                      {cap.title}
                    </h3>
                    <span className="hidden md:inline text-[#1F1F23] mx-4">—</span>
                    <p className="text-[#A1A1AA] text-base md:inline">
                      {cap.description}
                    </p>
                  </div>
                </div>
                <svg
                  className="shrink-0 text-[#52525B] group-hover:text-[#7CFFB2] transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 14L14 4M14 4H6M14 4v8" />
                </svg>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Featured Work ─────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#1F1F23]">
        <FadeIn>
          <SectionLabel className="mb-6 block">03 / Work</SectionLabel>
          <h2
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Recent engagements
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="bg-[#111113] rounded-[6px] p-8 md:p-12">
            <div className="flex flex-wrap gap-x-6 gap-y-1 mb-6">
              <span className="font-mono text-xs text-[#52525B] tracking-wide uppercase">
                Product
              </span>
              <span className="font-mono text-xs text-[#52525B] tracking-wide">
                2026
              </span>
            </div>

            <h3 className="font-sans font-medium text-3xl md:text-4xl text-[#F4F4F5] tracking-tight mb-4">
              SchoolOga
            </h3>

            <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              School management infrastructure for Nigerian private schools.
              Staff accountability, fee intelligence, and role-based dashboards.
              Currently in live operation.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {["Next.js", "Express", "MongoDB", "Paystack"].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-[#52525B] border border-[#1F1F23] rounded-[4px] px-3 py-1.5"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href="/work/schoologa"
              className="link-underline font-mono text-sm text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors duration-200"
            >
              View project →
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10">
            <Link
              href="/work"
              className="link-underline font-mono text-sm text-[#52525B] hover:text-[#A1A1AA] transition-colors duration-200"
            >
              All work →
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ── Studio ────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#1F1F23]">
        <FadeIn>
          <SectionLabel className="mb-6 block">04 / Studio</SectionLabel>
          <h2
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            A different kind of studio
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <FadeIn delay={0.05}>
            <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed">
              Striat is a small, deliberate engineering team. We work with
              founders and operators who need systems that do not break under
              growth. Every engagement is scoped, priced flat, and delivered
              end-to-end. No retainers, no billable hours, no surprises.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-px border border-[#1F1F23] rounded-[6px] overflow-hidden">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#111113] p-6 border-[#1F1F23]"
                >
                  <p className="font-sans font-medium text-xl text-[#F4F4F5] mb-2">
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs text-[#52525B] leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
