import type { Metadata } from "next";
import SectionLabel from "../components/SectionLabel";
import FadeIn from "../components/FadeIn";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Striat. Tell us what you are building. We reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 px-6 md:px-12 max-w-[1280px] mx-auto">
        <FadeIn>
          <SectionLabel className="mb-8 block">Contact</SectionLabel>
          <h1
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Start a conversation
          </h1>
          <p className="text-xl text-[#A1A1AA] leading-relaxed max-w-xl">
            Tell us what you are building. We reply within 24 hours.
          </p>
        </FadeIn>
      </section>

      {/* Form + Sidebar */}
      <section className="pb-32 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#1F1F23]">
        <div className="grid md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_360px] gap-16 md:gap-24 pt-16 md:pt-20">
          {/* Form */}
          <FadeIn>
            <ContactForm />
          </FadeIn>

          {/* Sidebar */}
          <FadeIn delay={0.1}>
            <aside className="md:sticky md:top-28 self-start space-y-10">
              <div>
                <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-3">
                  Prefer email?
                </p>
                <a
                  href="mailto:hello@striat.dev"
                  className="link-underline font-sans text-base text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors duration-200"
                >
                  hello@striat.dev
                </a>
              </div>

              <div>
                <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-3">
                  Based in
                </p>
                <p className="font-sans text-base text-[#A1A1AA]">
                  Lagos, Nigeria
                </p>
              </div>

              <div>
                <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-3">
                  Working with teams in
                </p>
                <p className="font-sans text-base text-[#A1A1AA] leading-relaxed">
                  United States, United Kingdom,
                  <br />
                  Canada, Australia, Brazil
                </p>
              </div>

              <div className="pt-6 border-t border-[#1F1F23]">
                <p className="font-mono text-xs text-[#52525B] leading-relaxed">
                  We reply to every inquiry within 24 hours.
                </p>
              </div>
            </aside>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
