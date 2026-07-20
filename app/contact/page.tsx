import type { Metadata } from "next";
import SectionLabel from "../components/SectionLabel";
import FadeIn from "../components/FadeIn";
import ContactForm from "../components/ContactForm";
import AvailabilityMonth from "../components/AvailabilityMonth";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Striat. Tell us what you are building. We respond within 24 hours.",
  openGraph: {
    title: "Contact | Striat",
    description: "Tell us what you are building. Response within 24 hours.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-[1280px] mx-auto">
        <FadeIn>
          <SectionLabel className="mb-8 block">
            Start a conversation
          </SectionLabel>
          <h1
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}
          >
            Tell us what you are building.
          </h1>
          <p className="text-xl text-[#A1A1AA] leading-relaxed max-w-xl">
            We respond within 24 hours, in your timezone.
          </p>
        </FadeIn>
      </section>

      {/* Form + Trust block */}
      <section className="pb-32 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#1F1F23]">
        <div className="grid md:grid-cols-[1fr_340px] lg:grid-cols-[1fr_400px] gap-16 md:gap-24 pt-16 md:pt-20">
          {/* Left: form */}
          <FadeIn>
            <ContactForm />
          </FadeIn>

          {/* Right: trust block */}
          <FadeIn delay={0.1}>
            <aside className="md:sticky md:top-24 self-start space-y-10">
              <div>
                <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-3">
                  Currently
                </p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7CFFB2] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7CFFB2]" />
                  </span>
                  <span className="font-sans text-sm text-[#A1A1AA]">
                    Accepting one new engagement for <AvailabilityMonth />
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-1.5">
                    Based in
                  </p>
                  <p className="font-sans text-sm text-[#A1A1AA]">
                    Lagos, Nigeria
                  </p>
                </div>

                <div>
                  <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-1.5">
                    Working with teams in
                  </p>
                  <p className="font-sans text-sm text-[#A1A1AA]">
                    Africa · North America · Europe · Australia · Latin America
                  </p>
                </div>

                <div>
                  <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-1.5">
                    Response time
                  </p>
                  <p className="font-sans text-sm text-[#A1A1AA]">
                    Within 24 hours
                  </p>
                </div>

                <div>
                  <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-1.5">
                    Engagement minimum
                  </p>
                  <p className="font-sans text-sm text-[#A1A1AA]">
                    From $10,000
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#1F1F23]">
                <p className="font-sans text-sm text-[#52525B] leading-relaxed">
                  Every inquiry receives a personal response from the
                  engineering team. We do not use automated qualification, intake
                  bots, or lead scoring. If you write to us, you will hear back
                  from a human within a day.
                </p>
              </div>
            </aside>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
