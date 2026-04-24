import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import ImageLightbox from "../../components/ImageLightbox";

export const metadata: Metadata = {
  title: "Healthcare Network",
  description:
    "Full-stack healthcare coordination platform with end-to-end financial integration.",
  openGraph: {
    title: "Healthcare Network | Striat",
    description:
      "Full-stack healthcare coordination platform with end-to-end financial integration.",
  },
};

const sidebar = [
  { label: "Role", value: "Full-stack engineering, frontend and backend" },
  { label: "Stack", value: "TypeScript, Node.js, Sequelize, PostgreSQL, QuickBooks API, React" },
  { label: "Domain", value: "Healthcare (regulated)" },
  { label: "Scope", value: "Patient portal + admin dashboard + clinical workflow + finance" },
  { label: "Status", value: "Live in production" },
  { label: "Client", value: "Confidential under engagement agreement" },
];

export default function HealthcareNetworkPage() {
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
            CLIENT · 2025 · CONFIDENTIAL
          </p>
          <h1
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Healthcare Network
          </h1>
          <p className="text-2xl text-[#A1A1AA] leading-relaxed max-w-2xl">
            Full-stack healthcare coordination platform with end-to-end
            financial integration
          </p>
        </FadeIn>
      </section>

      {/* Hero image */}
      <section className="px-6 md:px-12 max-w-[1280px] mx-auto mb-16">
        <FadeIn>
          <ImageLightbox
            src="/screenshots/healthcare-admin.jpg"
            alt="Healthcare network admin revenue dashboard"
            caption="Admin revenue dashboard with real-time financial tracking and QuickBooks reconciliation"
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
                  A private healthcare network in Nigeria needed a complete
                  coordination platform connecting patients, doctors,
                  sonography, lab technicians, and back-office finance. Previous
                  developers had only delivered ten to twenty percent of the
                  system before the project stalled.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div>
                <h2 className="font-sans font-medium text-xl text-[#F4F4F5] mb-4">
                  The challenge
                </h2>
                <p className="text-[#A1A1AA] text-base leading-relaxed">
                  Striat was brought in to take ownership of the entire build and
                  deliver a production system. The platform needed to handle the
                  full clinical workflow: patient appointment requests, doctor
                  scheduling, lab and imaging coordination, staff management,
                  role-based access across clinical and administrative tiers,
                  and integrate directly with the network&apos;s existing QuickBooks
                  accounting system for revenue tracking, invoice management, and
                  financial reporting.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="font-sans font-medium text-xl text-[#F4F4F5] mb-4">
                  The work
                </h2>
                <p className="text-[#A1A1AA] text-base leading-relaxed mb-6">
                  Striat single-handedly delivered both the frontend and backend
                  to completion, taking the project from twenty percent done to
                  live production.
                </p>
                <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-4">
                  Key systems delivered
                </p>
                <ul className="space-y-4">
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">Patient portal:</strong>{" "}
                    appointment booking, medical record access, test result
                    delivery, and patient login.
                  </li>
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">
                      Clinical workflow:
                    </strong>{" "}
                    doctor schedules, sonography coordination, lab tech
                    routing, multi-stage care pathways.
                  </li>
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">
                      Staff management:
                    </strong>{" "}
                    role-based access for doctors, nurses, lab techs,
                    sonographers, admin staff, and ownership tier.
                  </li>
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">
                      Financial integration:
                    </strong>{" "}
                    direct QuickBooks API integration for invoice creation,
                    payment tracking, revenue reporting, and reconciliation.
                  </li>
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">
                      Real-time admin dashboard:
                    </strong>{" "}
                    total revenue tracking, daily/weekly/monthly breakdowns,
                    paid versus pending invoices, critical alerts, and inventory
                    monitoring.
                  </li>
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">
                      Notification system:
                    </strong>{" "}
                    multi-channel alerts for appointments, payments, and
                    operational events.
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Inline screenshot: patient portal */}
            <FadeIn delay={0.12}>
              <ImageLightbox
                src="/screenshots/healthcare-portal.jpg"
                alt="Anonymized patient portal interface"
                caption="Anonymized patient portal: appointment booking, medical records, and test result delivery"
              />
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <h2 className="font-sans font-medium text-xl text-[#F4F4F5] mb-4">
                  The outcome
                </h2>
                <p className="text-[#A1A1AA] text-base leading-relaxed">
                  Live in production. Tracked revenue of multiple millions of
                  naira through the integrated invoicing system. QuickBooks
                  reconciliation active. Operating across the network&apos;s clinical
                  and administrative teams.
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
                  <p className="font-sans text-sm text-[#52525B] italic">
                    Not public · confidential
                  </p>
                </div>
              </div>
            </aside>
          </FadeIn>
        </div>

        {/* Next case study */}
        <FadeIn delay={0.1}>
          <div className="mt-20 pt-10 border-t border-[#1F1F23]">
            <Link href="/work/schoologa" className="group block">
              <span className="font-mono text-xs text-[#52525B] uppercase tracking-widest">
                Next case study
              </span>
              <p className="font-sans font-medium text-2xl text-[#F4F4F5] tracking-tight mt-2 group-hover:text-[#7CFFB2] transition-colors duration-200">
                SchoolOga →
              </p>
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
