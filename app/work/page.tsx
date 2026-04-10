import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "../components/SectionLabel";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Engagements Striat has designed, built, and shipped for founders and operators.",
};

const projects = [
  {
    slug: "schoologa",
    label: "Product",
    year: "2026",
    title: "SchoolOga",
    description:
      "School management infrastructure for Nigerian private schools. Staff accountability, fee intelligence, and role-based dashboards.",
    status: "live" as const,
  },
  {
    slug: null,
    label: "WhatsApp Infrastructure",
    year: "2026",
    title: "In progress",
    description: "Engagement currently under active development.",
    status: "progress" as const,
  },
  {
    slug: null,
    label: "Custom System",
    year: "2026",
    title: "In progress",
    description: "Engagement currently under active development.",
    status: "progress" as const,
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 px-6 md:px-12 max-w-[1280px] mx-auto">
        <FadeIn>
          <SectionLabel className="mb-8 block">Work</SectionLabel>
          <h1
            className="font-sans font-medium text-[#F4F4F5] tracking-tight mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            Work
          </h1>
          <p className="text-xl text-[#A1A1AA] leading-relaxed max-w-xl">
            Engagements we have designed, built, and shipped.
          </p>
        </FadeIn>
      </section>

      {/* Project list */}
      <section className="pb-32 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#1F1F23]">
        <div className="divide-y divide-[#1F1F23]">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              {project.slug ? (
                <Link
                  href={`/work/${project.slug}`}
                  className="group block py-10 md:py-14"
                >
                  <ProjectCard project={project} />
                </Link>
              ) : (
                <div className="py-10 md:py-14 opacity-40 cursor-default">
                  <ProjectCard project={project} />
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
      {/* Image placeholder */}
      <div className="w-full md:w-80 shrink-0 aspect-video bg-[#111113] rounded-[6px] border border-[#1F1F23] overflow-hidden" />

      {/* Content */}
      <div className="flex-1 pt-1">
        <div className="flex flex-wrap gap-4 mb-4">
          <span className="font-mono text-xs text-[#52525B] uppercase tracking-widest">
            {project.label}
          </span>
          <span className="font-mono text-xs text-[#52525B]">{project.year}</span>
          {project.status === "progress" && (
            <span className="font-mono text-xs text-[#52525B] border border-[#1F1F23] rounded-[4px] px-2 py-0.5">
              In progress
            </span>
          )}
        </div>

        <h2 className="font-sans font-medium text-2xl md:text-3xl text-[#F4F4F5] tracking-tight mb-3 group-hover:text-[#7CFFB2] transition-colors duration-200">
          {project.title}
        </h2>

        <p className="text-[#A1A1AA] text-base leading-relaxed max-w-lg">
          {project.description}
        </p>
      </div>
    </div>
  );
}
