import Link from "next/link";

interface CaseStudyCardProps {
  label: string;
  title: string;
  description: string;
  stack: string;
  href: string;
  screenshot: string;
  alt: string;
}

export default function CaseStudyCard({
  label,
  title,
  description,
  stack,
  href,
  screenshot,
  alt,
}: CaseStudyCardProps) {
  return (
    <div className="py-12 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Text */}
      <div>
        <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-4">
          {label}
        </p>
        <h3 className="font-sans font-medium text-3xl text-[#F4F4F5] tracking-tight mb-3">
          {title}
        </h3>
        <p className="text-[#A1A1AA] text-base leading-relaxed mb-5">
          {description}
        </p>
        <p className="font-mono text-xs text-[#52525B] leading-loose mb-6">
          {stack}
        </p>
        <Link
          href={href}
          className="link-underline font-mono text-sm text-[#7CFFB2] hover:text-[#5DEBA0] transition-colors duration-200"
        >
          View case study →
        </Link>
      </div>

      {/* Screenshot */}
      <div className="w-full border border-[#1F1F23] rounded-[6px] bg-[#111113] aspect-video relative overflow-hidden">
        <img
          src={screenshot}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
