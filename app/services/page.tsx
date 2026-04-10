import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "../components/SectionLabel";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three ways to work with Striat: Production MVPs, WhatsApp Business Infrastructure, and Custom Systems.",
};

const services = [
  {
    number: "01",
    slug: "Production MVPs",
    heading: "Production MVPs",
    description:
      "You have an idea and need to see it in production fast. We design, build, test, and deploy a complete first version in one to two weeks. This is for founders validating a market, teams running an internal experiment, or operators who need a tool shipped before a deadline.",
    includes: [
      "Product discovery call",
      "Technical architecture",
      "Full-stack implementation",
      "Deployment to production",
      "Handover documentation",
      "2 weeks of bug fixes post-launch",
    ],
    timeline: "1–2 weeks",
    model: "Flat rate, quoted after discovery",
  },
  {
    number: "02",
    slug: "WhatsApp Business Infrastructure",
    heading: "WhatsApp Business Infrastructure",
    description:
      "WhatsApp is where your customers already are. We build the infrastructure to operate on it at scale — automated messaging, webhook integrations, CRM connections, and smart routing between WhatsApp and SMS fallbacks. For businesses that need WhatsApp to work like a real channel, not a side hustle.",
    includes: [
      "Meta Business verification support",
      "API integration",
      "Message routing logic",
      "Webhook handlers",
      "Admin dashboard",
      "Monitoring",
    ],
    timeline: "2–3 weeks",
    model: "Flat rate, quoted after discovery",
  },
  {
    number: "03",
    slug: "Custom Systems",
    heading: "Custom Systems",
    description:
      "When templates and no-code tools stop scaling, you need something built properly. We build dashboards, internal tools, APIs, integrations, and custom systems tailored to how your team actually works. Production-grade from day one.",
    includes: [
      "Requirements workshop",
      "System design",
      "Implementation",
      "Integration with existing tools",
      "Deployment",
      "Documentation",
    ],
    timeline: "2–6 weeks depending on scope",
    model: "Flat rate, quoted after discovery",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 px-6 md:px-12 max-w-[1280px] mx-auto">
        <FadeIn>
          <SectionLabel className="mb-8 block">Services</SectionLabel>
          <h1
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            Services
          </h1>
          <p className="text-xl text-[#A1A1AA] leading-relaxed max-w-xl">
            Three ways to work with Striat.
          </p>
        </FadeIn>
      </section>

      {/* Services */}
      <section className="pb-32 px-6 md:px-12 max-w-[1280px] mx-auto">
        <div className="divide-y divide-[#1F1F23] border-t border-[#1F1F23]">
          {services.map((service, i) => (
            <FadeIn key={service.number} delay={i * 0.06}>
              <div className="py-16 md:py-20">
                <div className="grid md:grid-cols-[1fr_280px] gap-12 md:gap-20">
                  {/* Main content */}
                  <div>
                    <SectionLabel className="mb-6 block">
                      {service.number} / {service.slug}
                    </SectionLabel>
                    <h2
                      className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-6"
                      style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
                    >
                      {service.heading}
                    </h2>
                    <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed max-w-2xl mb-10">
                      {service.description}
                    </p>

                    <div className="mb-10">
                      <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-5">
                        What is included
                      </p>
                      <ul className="space-y-3">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-[#A1A1AA] text-sm"
                          >
                            <span className="mt-2 w-1 h-1 rounded-full bg-[#52525B] shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="link-underline font-mono text-sm text-[#7CFFB2] hover:text-[#5DEBA0] transition-colors duration-200"
                    >
                      Request a quote →
                    </Link>
                  </div>

                  {/* Sidebar */}
                  <div className="self-start">
                    <div className="divide-y divide-[#1F1F23] border border-[#1F1F23] rounded-[6px] overflow-hidden">
                      <div className="bg-[#111113] px-5 py-5">
                        <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2">
                          Timeline
                        </p>
                        <p className="font-sans text-sm text-[#A1A1AA]">
                          {service.timeline}
                        </p>
                      </div>
                      <div className="bg-[#111113] px-5 py-5">
                        <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2">
                          Engagement model
                        </p>
                        <p className="font-sans text-sm text-[#A1A1AA]">
                          {service.model}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
