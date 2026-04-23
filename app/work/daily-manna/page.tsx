import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "../../components/SectionLabel";
import FadeIn from "../../components/FadeIn";
import ImageLightbox from "../../components/ImageLightbox";

export const metadata: Metadata = {
  title: "Daily Manna",
  description:
    "Backend infrastructure for a global Bible devotional platform serving millions of users daily across every continent.",
  openGraph: {
    title: "Daily Manna — Striat",
    description:
      "Backend infrastructure for a global Bible devotional platform.",
  },
};

const sidebar = [
  { label: "Role", value: "Backend architecture and full implementation" },
  { label: "Stack", value: "Node.js, Express, MongoDB, Mongoose, Nodemailer, scheduled jobs" },
  { label: "Scale", value: "Millions of daily active users" },
  { label: "Languages", value: "12+" },
  { label: "Status", value: "Live in production" },
  { label: "Reach", value: "Global" },
];

export default function DailyMannaPage() {
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
            FLAGSHIP · 2025 · LIVE
          </p>
          <h1
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Daily Manna
          </h1>
          <p className="text-2xl text-[#A1A1AA] leading-relaxed max-w-2xl">
            Backend infrastructure for a global Bible devotional platform
          </p>
        </FadeIn>
      </section>

      {/* Hero image */}
      <section className="px-6 md:px-12 max-w-[1280px] mx-auto mb-16">
        <FadeIn>
          <ImageLightbox
            src="/screenshots/dailymanna-home.png"
            alt="Daily Manna homepage with 12-language selector"
            caption="Daily Manna homepage showing the 12+ language selector and multi-tier devotional navigation"
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
                  Daily Manna is the global devotional platform of Deeper Life
                  Bible Church, one of the largest Pentecostal church networks in
                  the world. The previous version ran on WordPress and could not
                  handle the scale of millions of daily users across every
                  continent.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div>
                <h2 className="font-sans font-medium text-xl text-[#F4F4F5] mb-4">
                  The challenge
                </h2>
                <p className="text-[#A1A1AA] text-base leading-relaxed">
                  The platform needed to be rebuilt from the ground up — a
                  backend that could serve a global audience reading devotionals,
                  completing daily Bible plans, joining community groups, and
                  tracking progress across multiple devotional series for adults,
                  youth, and children. It had to support over twelve languages,
                  sustained traffic at backend capacity, and a content workflow
                  that allowed administrators across regions to upload and manage
                  devotionals at scale.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="font-sans font-medium text-xl text-[#F4F4F5] mb-4">
                  The work
                </h2>
                <p className="text-[#A1A1AA] text-base leading-relaxed mb-6">
                  Striat designed and built the entire backend from scratch —
                  single-handedly — replacing the legacy WordPress system with a
                  modern Node.js and MongoDB architecture serving both the web
                  platform and the mobile app from a single API.
                </p>
                <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-4">
                  Key systems delivered
                </p>
                <ul className="space-y-4">
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">
                      Multi-tier devotional engine
                    </strong>{" "}
                    — Daily Manna for adults, Higher Everyday for youth, Sincere
                    Milk for children, with separate content workflows and
                    reading paths.
                  </li>
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">
                      Bible reading plan system
                    </strong>{" "}
                    — structured multi-week plans with subscription tracking,
                    progress persistence, and resume-where-you-left-off logic
                    across devices.
                  </li>
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">
                      Community groups (MannaHaven)
                    </strong>{" "}
                    — users can form groups with friends, share progress, and
                    engage around devotional content.
                  </li>
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">
                      Internationalization
                    </strong>{" "}
                    — full support for twelve-plus languages including Arabic,
                    Bengali, Chinese, French, Hausa, Hindi, Igbo, Portuguese
                    (Brazil), Russian, Spanish, Urdu, and Yoruba.
                  </li>
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">Quiz engine</strong> —
                    content-driven quizzes tied to devotional progress with
                    leaderboard tracking.
                  </li>
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">
                      Three-tier admin dashboard
                    </strong>{" "}
                    — bulk Excel upload pipelines, individual devotional
                    creation, role-based admin management, and content moderation
                    tools.
                  </li>
                  <li className="text-[#A1A1AA] text-base leading-relaxed">
                    <strong className="text-[#F4F4F5]">
                      Email notification system
                    </strong>{" "}
                    — daily devotional delivery via scheduled jobs across
                    timezones.
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Inline screenshot: admin dashboard */}
            <FadeIn delay={0.12}>
              <ImageLightbox
                src="/screenshots/daily-manna-admin.png"
                alt="Daily Manna three-tier admin dashboard"
                caption="Three-tier admin dashboard for bulk content management across 12+ languages"
              />
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <h2 className="font-sans font-medium text-xl text-[#F4F4F5] mb-4">
                  The outcome
                </h2>
                <p className="text-[#A1A1AA] text-base leading-relaxed">
                  Live in production, serving millions of daily users across
                  every continent. Sustained traffic at backend capacity.
                  Multi-language deployment active. Powering the daily devotional
                  life of one of the largest faith networks in the world.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.18}>
              <p className="font-mono text-sm text-[#A1A1AA]">
                View the live product →{" "}
                <a
                  href="https://www.dailymanna.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[#7CFFB2] hover:text-[#5DEBA0] transition-colors duration-200"
                >
                  dailymanna.app
                </a>
              </p>
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
                    href="https://www.dailymanna.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-sans text-sm text-[#7CFFB2] hover:text-[#5DEBA0] transition-colors duration-200"
                  >
                    dailymanna.app →
                  </a>
                </div>
              </div>
            </aside>
          </FadeIn>
        </div>

        {/* Build-story callout */}
        <FadeIn delay={0.08}>
          <div className="mt-20">
            <Link
              href="/blog/how-i-built-daily-manna"
              className="group block border border-[#1F1F23] bg-[#111113] rounded-[6px] px-6 py-6 md:px-8 md:py-7 hover:border-[#2A2A2E] transition-colors duration-200"
            >
              <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2">
                Want the full build story?
              </p>
              <p className="font-sans font-medium text-lg md:text-xl text-[#F4F4F5] tracking-tight group-hover:text-[#7CFFB2] transition-colors duration-200">
                Read &quot;How I built the backend, solo, while millions
                waited&quot; →
              </p>
            </Link>
          </div>
        </FadeIn>

        {/* Next case study */}
        <FadeIn delay={0.1}>
          <div className="mt-12 pt-10 border-t border-[#1F1F23]">
            <Link href="/work/healthcare-network" className="group block">
              <span className="font-mono text-xs text-[#52525B] uppercase tracking-widest">
                Next case study
              </span>
              <p className="font-sans font-medium text-2xl text-[#F4F4F5] tracking-tight mt-2 group-hover:text-[#7CFFB2] transition-colors duration-200">
                Healthcare Network →
              </p>
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
