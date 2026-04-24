import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "../components/SectionLabel";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Essays on shipping production systems: what worked, what didn't, and what I'd do differently.",
  openGraph: {
    title: "Blog | Striat",
    description: "Essays on shipping production systems.",
  },
};

const posts = [
  {
    slug: "how-i-built-daily-manna",
    title:
      "How I built the backend for Daily Manna, solo, while millions waited",
    excerpt:
      "A case study on shipping global infrastructure from Lagos, in a stack I already knew, under real pressure.",
    dateLabel: "April 2026",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-[1280px] mx-auto">
        <FadeIn>
          <SectionLabel className="mb-8 block">Writing</SectionLabel>
          <h1
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}
          >
            Notes from the build.
          </h1>
          <p className="text-xl text-[#A1A1AA] leading-relaxed max-w-2xl">
            Essays on shipping production systems: what worked, what
            didn&apos;t, and what I&apos;d do differently.
          </p>
        </FadeIn>
      </section>

      {/* Post list */}
      <section className="pb-32 px-6 md:px-12 max-w-[1280px] mx-auto">
        <div className="divide-y divide-[#1F1F23] border-t border-[#1F1F23]">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.07}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block py-12"
              >
                <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-4">
                  Essay · {post.dateLabel}
                </p>
                <h2 className="font-sans font-medium text-3xl text-[#F4F4F5] tracking-tight mb-3 group-hover:text-[#7CFFB2] transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-[#A1A1AA] text-base leading-relaxed max-w-2xl mb-5">
                  {post.excerpt}
                </p>
                <span className="link-underline font-mono text-sm text-[#7CFFB2] group-hover:text-[#5DEBA0] transition-colors duration-200">
                  Read →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
