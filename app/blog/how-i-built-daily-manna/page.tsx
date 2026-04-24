import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import SectionNav from "./SectionNav";

export const metadata: Metadata = {
  title:
    "How I built the backend for Daily Manna, solo, while millions waited",
  description:
    "A case study on shipping global infrastructure from Lagos, in a stack I already knew, under real pressure.",
  openGraph: {
    title:
      "How I built the backend for Daily Manna, solo, while millions waited | Striat",
    description:
      "A case study on shipping global infrastructure from Lagos, in a stack I already knew, under real pressure.",
  },
};

const sections = [
  { id: "the-problem", label: "The problem" },
  { id: "the-approach", label: "The approach" },
  {
    id: "building-one-api-for-three-clients",
    label: "Building one API for three clients",
  },
  {
    id: "the-debugging-nights-nobody-sees",
    label: "The debugging nights nobody sees",
  },
  { id: "what-i-actually-built", label: "What I actually built" },
  { id: "the-part-that-surprised-me", label: "The part that surprised me" },
  { id: "what-i-would-do-differently", label: "What I would do differently" },
  { id: "what-this-is-now", label: "What this is now" },
];

const h2Class =
  "font-sans font-medium text-2xl text-[#F4F4F5] tracking-tight pt-8 scroll-mt-24";

export default function DailyMannaBuildStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-10 px-6 md:px-12 max-w-[1080px] mx-auto">
        <FadeIn>
          <Link
            href="/work/daily-manna"
            className="link-underline font-mono text-xs text-[#52525B] hover:text-[#A1A1AA] transition-colors duration-200 mb-10 inline-block"
          >
            ← Daily Manna case study
          </Link>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="max-w-[720px]">
            <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-4">
              ESSAY · APRIL 2026
            </p>
            <h1
              className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              How I built the backend for Daily Manna, solo, while millions
              waited
            </h1>
            <p className="text-xl text-[#D4D4D8] leading-relaxed font-medium">
              A case study on shipping global infrastructure from Lagos, in a
              stack I already knew, under real pressure.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Body + sticky section nav */}
      <article className="px-6 md:px-12 max-w-[1080px] mx-auto pb-24">
        <div className="md:grid md:grid-cols-[1fr_240px] lg:grid-cols-[1fr_280px] md:gap-12 lg:gap-16">
          {/* Content column */}
          <FadeIn delay={0.08}>
            <div className="max-w-[720px] border-t border-[#1F1F23] pt-14 text-[#C5C5C8] text-[17px] leading-[1.8] space-y-6">
              <p>
                Easter Sunday, 2026. I hit deploy at around 2 AM Lagos time,
                knowing that by sunrise Monday morning, millions of people
                across every continent would start opening the app. Not
                &quot;potential users.&quot; Actual users. Already there,
                already waiting. A devotional platform doesn&apos;t get a soft
                launch.
              </p>

              <p>
                When it went live, the product owner messaged us with the kind
                of excitement you usually see when something personal, not
                just commercial, lands. Users were praying for the engineers.
                The userbase surged through the day. Easter Monday, for a
                Deeper Life community built around renewal and resurrection,
                had its own meaning. For us behind the scenes, it felt like
                our version of the same thing. Months of work, now in hundreds
                of thousands of hands by morning, millions over the following
                weeks.
              </p>

              <p>
                This is how I built the backend that made that morning
                possible.
              </p>

              <h2 id="the-problem" className={h2Class}>
                The problem
              </h2>

              <p>
                Daily Manna is the global devotional platform for Deeper Life
                Church. Before I came in, it ran on WordPress. For a simple
                blog, WordPress is fine. For what Daily Manna actually needed
                to be, it was breaking.
              </p>

              <p>
                The platform needed to deliver scheduled devotional content,
                across more than 12 languages, to millions of daily users in
                190+ countries, through three separate clients (web, Android,
                iOS), with a global leaderboard, a quiz engine, reading plans,
                media that included audio and video, and a three-tier admin
                system so content editors could manage everything without a
                developer holding their hand.
              </p>

              <p>
                WordPress was never built for any of that. The old system was
                patched together over years of adding features, and at a
                certain point nobody wanted to touch it anymore. The
                leaderboard alone would slow the entire site down on busy
                mornings. Timezones were a mess. Scaling past a certain number
                of concurrent users just was not happening.
              </p>

              <p>
                I was brought in as the sole engineer to rebuild the backend
                from scratch. Not augment. Not patch. Replace. A single
                production backend that would serve all three clients cleanly
                and scale as the community grew.
              </p>

              <h2 id="the-approach" className={h2Class}>
                The approach
              </h2>

              <p>First decision: do not reach for anything new.</p>

              <p>
                Every instinct tells you, when you are building something
                &quot;big,&quot; that you should pick up a new framework, a
                new database, a new paradigm that matches the ambition. That
                instinct is usually wrong when you are shipping solo. Ambition
                should go into the problem, not the tooling.
              </p>

              <p>
                So I picked what I had already taken to production. Node.js
                and Express for the API layer. MongoDB Atlas with Mongoose for
                the data layer. BullMQ on Upstash Redis for queue and caching.
                Cloudinary for media delivery. Nodemailer for the
                transactional and campaign email. Render for production
                hosting.
              </p>

              <p>
                Nothing on that list would make a Twitter thread trend. That
                was the point. Every one of those pieces I had already shipped
                in prior projects. When you are the only engineer on a system
                that is going to serve millions on its first day, you cannot
                also be learning your stack on the fly. Boring tools, tight
                execution, consistent patterns.
              </p>

              <p>
                The second decision, which turned out to be the hardest one,
                was about the API itself.
              </p>

              <h2
                id="building-one-api-for-three-clients"
                className={h2Class}
              >
                Building one API for three clients
              </h2>

              <p>
                Web, Android, and iOS are different clients with different
                expectations. Web tends to be greedier with data (larger
                screens, more context shown at once). Mobile is leaner,
                expects pagination, and handles errors differently. iOS and
                Android each have their own quirks around how they parse
                responses, handle nulls, cache payloads, and deal with flaky
                network conditions that are very real for users in a lot of
                the 190+ countries Daily Manna reaches.
              </p>

              <p>
                The lazy solution would have been platform-specific endpoints.{" "}
                <code className="font-mono text-sm text-[#D4D4D8] bg-[#1F1F23] px-1.5 py-0.5 rounded">
                  /api/web/devotionals
                </code>
                ,{" "}
                <code className="font-mono text-sm text-[#D4D4D8] bg-[#1F1F23] px-1.5 py-0.5 rounded">
                  /api/android/devotionals
                </code>
                ,{" "}
                <code className="font-mono text-sm text-[#D4D4D8] bg-[#1F1F23] px-1.5 py-0.5 rounded">
                  /api/ios/devotionals
                </code>
                . That path leads to three separate codebases hiding under one
                repo, and within six months nobody remembers which endpoint is
                for which client and what that endpoint actually returns.
              </p>

              <p>
                I decided on a unified REST API with consistent response
                contracts across every client. Every endpoint returns the same
                shape, the same error format, the same pagination structure,
                regardless of who is calling it. If the web app needs more
                data in one response, it requests more fields or paginates
                larger pages. The contract does not bend per platform.
              </p>

              <p>
                This meant the error handling had to be airtight. A mobile
                developer parsing a response cannot be surprised by a field
                that is sometimes a string, sometimes null, sometimes missing
                entirely. I standardized every error into the same JSON
                envelope, with a machine-readable code, a human-readable
                message, and a consistent HTTP status mapping. When the iOS
                dev ran into auth issues (and they did, more than once), we
                could debug against one specification instead of three.
              </p>

              <p>
                The payoff came later. When mobile devs on Android or iOS
                onboarded, they could read one spec, test against one Postman
                collection, and ship. The product owner could commission a
                new client in another language (we talked about a Yoruba
                build at one point) and the API did not need a rewrite. One
                backend, multiple clients, all reading from the same contract.
                That is infrastructure thinking, not feature thinking.
              </p>

              <h2
                id="the-debugging-nights-nobody-sees"
                className={h2Class}
              >
                The debugging nights nobody sees
              </h2>

              <p>I want to be honest about the other side of this build.</p>

              <p>
                The Easter deploy was the high. The weeks before it had their
                share of overnight debugging sessions where I was the only
                person awake trying to figure out why a quiz was not aligning
                with the devotional for that day, or why iOS users
                specifically were getting booted from their sessions when
                Android users were fine.
              </p>

              <p>
                The quiz-devotional misalignment was a timezone bug that
                looked like a scheduling bug. Daily Manna delivers content by
                local day, but the server runs on UTC, and the quiz engine
                was pulling from a different date key than the devotional
                engine for users in the eastern time zones that crossed the
                UTC-day boundary. A user in Tokyo at 9 AM local time would
                get that day&apos;s devotional but yesterday&apos;s quiz.
                Took most of a night to trace, an hour to fix, a lot of
                coffee to not break anything else while fixing it.
              </p>

              <p>
                The iOS auth issue was subtler. The token refresh flow worked
                on Android, failed silently on iOS on weak networks. The root
                cause was how iOS handled certain HTTP codes in its
                URLSession caching, combined with the refresh token TTL being
                too aggressive for users in intermittent-connectivity
                regions. I loosened the TTL, added explicit cache
                invalidation headers, and rebuilt the refresh flow to be
                idempotent. After that, iOS sessions held.
              </p>

              <p>
                Most of the backend build was not glamorous. It was reading
                logs at 3 AM. It was writing tests for edge cases that only
                happened to 0.4% of users but, at Daily Manna&apos;s scale,
                0.4% is tens of thousands of people. It was deploying to
                staging at 1 AM, deploying to production at 4 AM on
                low-traffic windows, and praying the traffic patterns the
                next morning proved the fix.
              </p>

              <p>
                Shipping solo at that scale is not a romantic experience. It
                is a discipline. You show up every day, fix the next thing,
                deploy carefully, sleep when you can.
              </p>

              <h2 id="what-i-actually-built" className={h2Class}>
                What I actually built
              </h2>

              <p>The scope, for anyone counting:</p>

              <p>
                Quiz engine with scoring, attempts, and leaderboard feeds.
                Reading plans across more than 12 languages with scheduled
                daily content delivery tied to user timezones. Global
                leaderboard with high-concurrency read paths, cached hot,
                invalidated smart. Three-tier admin system with role-scoped
                permissions so content editors could do their work without
                touching code or hitting database constraints. Excel bulk
                upload pipeline for multilingual content management (the
                content team works in Excel, that is a non-negotiable for
                them, so the backend accepts Excel). Multi-type media
                handling across text, audio, video, and images via
                Cloudinary. Email notification infrastructure via Nodemailer
                with templated campaigns. Queue workers using BullMQ and
                Upstash Redis for background jobs, scheduled content, and
                reporting. Unified REST API serving web, Android, and iOS.
                Production deployment and scaling on Render with MongoDB
                Atlas.
              </p>

              <p>
                One backend. Three clients. Millions of daily users across
                190+ countries and 12+ languages. No second engineer.
              </p>

              <h2 id="the-part-that-surprised-me" className={h2Class}>
                The part that surprised me
              </h2>

              <p>
                The technical work was hard but predictable. The part I did
                not expect to matter as much was translation.
              </p>

              <p>
                Not language translation. Translation between engineers and
                non-technical stakeholders. Pastors, content editors, and
                operations people who needed features built but did not care
                about my architecture. They cared about what the feature did
                for their readers.
              </p>

              <p>
                Early in the build, I tried to explain a queue system to a
                content editor who was worried her scheduled devotional would
                not post on time. I talked about BullMQ, about delay queues,
                about retry logic. She nodded politely and I could tell she
                had zero confidence that her devotional would post.
              </p>

              <p>
                So I tried again. I told her to imagine a post office. She
                drops her devotional in the mailbox the night before. The
                post office has a schedule. At 5 AM, it opens every box
                scheduled for that day and delivers it. If one letter has a
                bad address, it gets put aside and retried later, not lost.
                Her devotional, in this system, is a letter with a delivery
                date. She trusts the post office. She does not need to know
                how the trucks work.
              </p>

              <p>
                She said, &quot;Oh, okay. So I can just schedule it and
                forget about it.&quot; Yes. Exactly. That was what I should
                have said the first time.
              </p>

              <p>
                Building for people who do not care about architecture is a
                skill I got better at during this build. Their underlying
                need is always &quot;will this do what I need, reliably,
                without me having to think about it?&quot; My job was to
                build that reliability in and explain it in language that
                felt true. Real-world metaphors did more for stakeholder
                trust than any technical deep-dive ever could.
              </p>

              <p>
                That skill matters beyond devotional platforms. It is what
                separates engineers who ship for internal teams from
                engineers who ship for real users. And it is what makes a
                solo builder useful to founders who do not themselves code.
              </p>

              <h2 id="what-i-would-do-differently" className={h2Class}>
                What I would do differently
              </h2>

              <p>A few things, honestly.</p>

              <p>
                I would have built the timezone logic into a dedicated
                service from day one, not retrofitted it after the
                quiz-alignment bug. Timezone bugs at global scale compound
                fast, and they are cheap to prevent and expensive to chase.
              </p>

              <p>
                I would have invested earlier in observability. The logs I
                had worked, but proper distributed tracing would have cut
                some of those 3 AM debugging sessions in half. At the time,
                I did not want to add another service to the stack. In
                hindsight, the ROI would have been enormous.
              </p>

              <p>
                And I would have pushed harder, earlier, to get the content
                team onto a structured upload flow rather than freeform
                Excel. The Excel pipeline worked, but the edge cases were
                endless. A slightly more constrained input format would have
                saved me weeks of defensive parsing.
              </p>

              <p>
                None of those would have changed the Easter deploy. But they
                would have made the weeks before it less punishing.
              </p>

              <h2 id="what-this-is-now" className={h2Class}>
                What this is now
              </h2>

              <p>
                Daily Manna runs on that backend today. Millions of daily
                users, every continent, 190+ countries, 12+ languages, one
                unified API. The content team ships on their own cadence
                without a developer in the loop. The leaderboard holds. The
                quiz aligns with the devotional on any user&apos;s local day,
                anywhere on the map. iOS sessions hold on weak networks.
                Mobile and web share the same contract, maintained in one
                place.
              </p>

              <p>
                It is infrastructure that scales without me. Which is exactly
                what good infrastructure should do.
              </p>

              <p>
                That was the project. Now I am applying what I learned on
                Daily Manna to other founders who need the same kind of
                work: real production systems, shipped fast, built to hold.
                That is what Striat is.
              </p>

              <hr className="border-[#1F1F23] my-10" />

              <p className="italic text-[#A1A1AA]">
                I run Striat, a small engineering studio shipping production
                MVPs and infrastructure for founders globally. 1 to 3 weeks,
                flat rate, end-to-end. Full work at{" "}
                <a
                  href="https://striat.dev"
                  className="link-underline text-[#7CFFB2] hover:text-[#5DEBA0] transition-colors duration-200 not-italic"
                >
                  striat.dev
                </a>
                . Reach me at{" "}
                <a
                  href="mailto:dave@striat.dev"
                  className="link-underline text-[#7CFFB2] hover:text-[#5DEBA0] transition-colors duration-200 not-italic"
                >
                  dave@striat.dev
                </a>
                .
              </p>
            </div>
          </FadeIn>

          {/* Sticky section nav with scrollspy (desktop only) */}
          <aside className="hidden md:block">
            <SectionNav sections={sections} />
          </aside>
        </div>

        {/* Back to case study */}
        <FadeIn delay={0.1}>
          <div className="mt-20 pt-10 border-t border-[#1F1F23] max-w-[720px]">
            <Link href="/work/daily-manna" className="group block">
              <span className="font-mono text-xs text-[#52525B] uppercase tracking-widest">
                Back to case study
              </span>
              <p className="font-sans font-medium text-2xl text-[#F4F4F5] tracking-tight mt-2 group-hover:text-[#7CFFB2] transition-colors duration-200">
                Daily Manna →
              </p>
            </Link>
          </div>
        </FadeIn>
      </article>
    </>
  );
}
