import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "../components/SectionLabel";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How Striat works. Scoped, flat-rate, end-to-end delivery. No retainers, no hourly billing.",
  openGraph: {
    title: "Approach | Striat",
    description: "Scoped. Flat-rate. End-to-end.",
  },
};

const steps = [
  {
    number: "01",
    label: "DISCOVERY",
    heading: "Understand before we estimate",
    body: "Before any commitment, we run a structured discovery call to understand the system you need, the constraints you are working with, the timeline that matters, and the integrations involved. You leave the call with a clear written scope, a flat-rate quote, and a delivery timeline. No estimates that grow over time.",
  },
  {
    number: "02",
    label: "ARCHITECTURE",
    heading: "Design the system before writing code",
    body: "Once scope is signed, we design the technical architecture: data models, API contracts, infrastructure choices, third-party integrations, and security boundaries. You receive a written architecture document before implementation starts, so there are no surprises during the build.",
  },
  {
    number: "03",
    label: "BUILD",
    heading: "Ship in cycles, with visibility",
    body: "We build in tight cycles with mid-engagement check-ins. You see working software early and often. We do not disappear for two weeks and surface with a demo. We test every layer, document as we build, and prepare the system for production from day one.",
  },
  {
    number: "04",
    label: "HANDOVER",
    heading: "Deploy, document, transfer",
    body: "At delivery, we deploy to production, hand over the full source code, provide written documentation for the system architecture and operational concerns, and remain available for two weeks of post-launch support to handle any issues that surface in real use. Then you own the system completely.",
  },
];

const deliverables = [
  "Discovery call and written scope",
  "Technical architecture document",
  "Full implementation by senior engineers",
  "Production deployment and infrastructure setup",
  "Source code and Git repository handover",
  "Written documentation",
  "Two weeks of post-launch support",
  "Direct line to the engineering team throughout",
];

const engagementModels = [
  {
    title: "Production MVP",
    description:
      "A complete first version of your product, designed and shipped from scratch in one to three weeks. For founders validating a market, teams running internal experiments, or operators who need a tool shipped before a deadline.",
    timeline: "1–3 weeks",
    investment: "From $10K, flat rate, quoted per project",
  },
  {
    title: "Business Infrastructure",
    description:
      "Backend systems, integration layers, payment infrastructure, WhatsApp business automation, and the unglamorous plumbing that real businesses run on. For teams that have outgrown templates and need something built properly.",
    timeline: "2–4 weeks",
    investment: "From $12K, flat rate, quoted per project",
  },
  {
    title: "Custom Systems",
    description:
      "Internal tools, dashboards, admin platforms, and bespoke systems built to spec. For teams whose problems do not fit any off-the-shelf product.",
    timeline: "2–6 weeks",
    investment: "Quoted per engagement, starting at $15K",
  },
];

const weDont = [
  "Hourly billing or open-ended timesheets",
  "Retainers without scoped deliverables",
  "Meetings without agendas",
  "Discovery sprints that lead to more discovery sprints",
  "Work without a written contract",
  "Promises we cannot deliver",
];

export default function ApproachPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-[1280px] mx-auto">
        <FadeIn>
          <SectionLabel className="mb-8 block">How we work</SectionLabel>
          <h1
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}
          >
            Scoped. Flat-rate. End-to-end.
          </h1>
          <p className="text-xl text-[#A1A1AA] leading-relaxed max-w-3xl">
            We do not run discovery sprints, blanket retainers, or open-ended
            billable hours. Every Striat engagement is treated as a complete
            delivery.
          </p>
        </FadeIn>
      </section>

      {/* ── The Process ──────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#1F1F23]">
        <FadeIn>
          <h2
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            The process
          </h2>
        </FadeIn>

        <div className="divide-y divide-[#1F1F23] border-t border-b border-[#1F1F23]">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.07}>
              <div className="py-12 md:py-16">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-xs text-[#52525B] tracking-widest">
                    {step.number}
                  </span>
                  <span className="font-mono text-xs text-[#52525B] uppercase tracking-widest">
                    · {step.label}
                  </span>
                </div>
                <h3 className="font-sans font-medium text-xl text-[#F4F4F5] mb-4">
                  {step.heading}
                </h3>
                <p className="text-[#A1A1AA] text-base leading-relaxed max-w-3xl">
                  {step.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── What You Get ─────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#1F1F23]">
        <FadeIn>
          <h2
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-12"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Every engagement includes
          </h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3 py-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#7CFFB2] shrink-0" />
                <span className="font-mono text-sm text-[#A1A1AA]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Engagement Models ────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#1F1F23]">
        <FadeIn>
          <h2
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-12"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Engagement models
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {engagementModels.map((model, i) => (
            <FadeIn key={model.title} delay={i * 0.08}>
              <div className="border border-[#1F1F23] rounded-[6px] p-8 py-12 h-full flex flex-col">
                <h3 className="font-sans font-medium text-xl text-[#F4F4F5] mb-4">
                  {model.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8 flex-1">
                  {model.description}
                </p>
                <div className="space-y-3 pt-6 border-t border-[#1F1F23]">
                  <div className="flex justify-between">
                    <span className="font-mono text-xs text-[#52525B] uppercase tracking-widest">
                      Timeline
                    </span>
                    <span className="font-mono text-xs text-[#A1A1AA]">
                      {model.timeline}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mono text-xs text-[#52525B] uppercase tracking-widest">
                      Investment
                    </span>
                    <span className="font-mono text-xs text-[#A1A1AA]">
                      {model.investment}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── What We Don't Do ─────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#1F1F23]">
        <FadeIn>
          <h2
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Honesty, in plain language
          </h2>
          <p className="text-[#A1A1AA] text-base leading-relaxed max-w-2xl mb-12">
            What we do not do.
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <ul className="space-y-4">
            {weDont.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[#A1A1AA] text-base leading-relaxed"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#52525B] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#1F1F23]">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div>
              <h2
                className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-4"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                This sound like what you need?
              </h2>
              <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed max-w-lg">
                Start with a discovery call. You will have a written scope and
                flat-rate quote within 48 hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-[4px] bg-[#7CFFB2] text-[#0A0A0B] font-sans font-medium text-sm tracking-tight hover:scale-[1.02] transition-transform duration-200 shrink-0"
            >
              Start a project
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
