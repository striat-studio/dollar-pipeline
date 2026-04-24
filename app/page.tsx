import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "./components/SectionLabel";
import FadeIn from "./components/FadeIn";
import CaseStudyCard from "./components/CaseStudyCard";
import StatBlock from "./components/StatBlock";

export const metadata: Metadata = {
  title: "Striat | Software Infrastructure Studio",
  description:
    "Striat is a small, senior engineering studio. We build production systems for founders and operators who need software that holds up under real load.",
  openGraph: {
    title: "Striat | Software Infrastructure Studio",
    description:
      "Senior engineering studio. Production systems that survive growth.",
  },
};

export default function Home() {
  return (
    <>
      {/* ── 01 Hero ──────────────────────────────── */}
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-[1280px] mx-auto">
        <FadeIn>
          <SectionLabel className="mb-8 block">
            01 / Studio · Lagos · Global
          </SectionLabel>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1
            className="font-sans font-medium text-[#F4F4F5] tracking-tight leading-[0.95] mb-8"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Software infrastructure
            <br />
            that survives growth.
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="max-w-2xl text-xl text-[#A1A1AA] leading-relaxed mt-8">
            Striat is a small, senior engineering studio. We build production
            systems for founders and operators who need software that holds up
            under real load, not prototypes that break the day a customer
            arrives.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-wrap gap-4 mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-[4px] bg-[#7CFFB2] text-[#0A0A0B] font-sans font-medium text-sm tracking-tight hover:scale-[1.02] transition-transform duration-200"
            >
              Start a project
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center px-6 py-3 rounded-[4px] border border-[#1F1F23] text-[#A1A1AA] font-sans text-sm tracking-tight hover:border-[#F4F4F5] hover:text-[#F4F4F5] transition-colors duration-200"
            >
              See selected work
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-8 mt-16">
            <span className="font-mono text-xs text-[#52525B] uppercase tracking-widest">
              Millions of users served
            </span>
            <span className="font-mono text-xs text-[#52525B] uppercase tracking-widest">
              Regulated domains shipped
            </span>
            <span className="font-mono text-xs text-[#52525B] uppercase tracking-widest">
              Response within 24 hours
            </span>
          </div>
        </FadeIn>
      </section>

      {/* ── 02 Selected Work ─────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#1F1F23]">
        <FadeIn>
          <SectionLabel className="mb-6 block">02 / Selected work</SectionLabel>
          <h2
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Recent engagements
          </h2>
          <p className="text-[#A1A1AA] text-base leading-relaxed max-w-2xl mb-8">
            A few of the systems we have designed, built, and shipped.
          </p>
        </FadeIn>

        <div className="divide-y divide-[#1F1F23]">
          <FadeIn delay={0.05}>
            <CaseStudyCard
              label="FLAGSHIP · 2025 · LIVE"
              title="Daily Manna"
              description="Backend infrastructure for a global Bible devotional platform serving millions of users daily across every continent."
              stack="Node.js · Express · MongoDB · Multi-language · 12+ locales"
              href="/work/daily-manna"
              screenshot="/screenshots/dailymanna-home.png"
              alt="Daily Manna homepage with language dropdown"
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <CaseStudyCard
              label="CLIENT · 2025 · CONFIDENTIAL"
              title="Healthcare Network"
              description="Full-stack healthcare coordination platform with patient access, appointment management, and end-to-end financial integration."
              stack="TypeScript · Node.js · PostgreSQL · Sequelize · QuickBooks API"
              href="/work/healthcare-network"
              screenshot="/screenshots/healthcare-admin.jpg"
              alt="Healthcare network admin revenue dashboard"
            />
          </FadeIn>

          <FadeIn delay={0.15}>
            <CaseStudyCard
              label="PRODUCT · 2026 · LIVE · STRIAT"
              title="SchoolOga"
              description="School management infrastructure for private schools. Pattern-based staff accountability, fee intelligence, and real-time financial visibility for owners."
              stack="Next.js 14 · Express · MongoDB · BullMQ · Paystack · WhatsApp Business API"
              href="/work/schoologa"
              screenshot="/screenshots/schoologa-pattern.png"
              alt="SchoolOga pattern detection page"
            />
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-16 text-center">
            <Link
              href="/work"
              className="link-underline font-mono text-sm text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors duration-200"
            >
              All work →
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ── 03 Capabilities ──────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#1F1F23]">
        <FadeIn>
          <SectionLabel className="mb-6 block">03 / Capabilities</SectionLabel>
          <h2
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Senior engineering across the stack
          </h2>
          <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed max-w-3xl mb-16">
            We build the things most studios will not: real-time systems, scaled
            backends, regulated workflows, and integrations that actually hold.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <FadeIn delay={0.05}>
            <div>
              <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-6">
                Frontend
              </p>
              <p className="font-mono text-sm text-[#A1A1AA] leading-loose">
                Next.js · React · TypeScript · Tailwind · Framer Motion · Server
                Components · App Router
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-6">
                Backend & Data
              </p>
              <p className="font-mono text-sm text-[#A1A1AA] leading-loose">
                Node.js · Express · TypeScript · MongoDB · PostgreSQL ·
                Sequelize · Mongoose · Redis · BullMQ · Upstash
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-6">
                Infrastructure & Integrations
              </p>
              <p className="font-mono text-sm text-[#A1A1AA] leading-loose">
                Vercel · Render · Cloudinary · MinIO · Paystack · QuickBooks ·
                WhatsApp Business API · Termii · Meta Verification
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 04 How We Work ───────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#1F1F23]">
        <FadeIn>
          <SectionLabel className="mb-6 block">04 / Approach</SectionLabel>
          <h2
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-16"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            A different kind of studio
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <FadeIn delay={0.05}>
            <p className="text-lg text-[#A1A1AA] leading-relaxed">
              We do not bill hours. We do not run open retainers. We do not hold
              meetings without an agenda. Every Striat engagement is scoped,
              priced flat, and delivered end-to-end with documentation and
              handover. You know exactly what you are getting before you sign
              anything, and exactly what you own when we are done.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-px border border-[#1F1F23] rounded-[6px] overflow-hidden">
              <StatBlock value="1–3 weeks" label="Typical timeline" />
              <StatBlock value="Flat rate" label="Pricing model" />
              <StatBlock value="End-to-end" label="Delivery scope" />
              <StatBlock value="Senior" label="Engineering tier" />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-12">
            <Link
              href="/approach"
              className="link-underline font-mono text-sm text-[#7CFFB2] hover:text-[#5DEBA0] transition-colors duration-200"
            >
              Read our approach →
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ── 05 Currently ─────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#1F1F23]">
        <FadeIn>
          <div className="text-center max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7CFFB2] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7CFFB2]" />
              </span>
            </div>
            <p className="font-sans font-medium text-xl md:text-2xl text-[#F4F4F5] tracking-tight mb-4">
              Currently accepting one new engagement for May 2026.
            </p>
            <p className="text-[#A1A1AA] text-base mb-10">
              Response within 24 hours.
            </p>
            <Link
              href="/contact"
              className="link-underline font-mono text-sm text-[#7CFFB2] hover:text-[#5DEBA0] transition-colors duration-200"
            >
              Start a conversation →
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
