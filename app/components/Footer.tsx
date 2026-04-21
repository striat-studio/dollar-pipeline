import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1F1F23] mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-16">
          {/* Left: wordmark + tagline */}
          <div>
            <p className="font-sans font-medium text-base text-[#F4F4F5] lowercase mb-3">
              striat
            </p>
            <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
              Software infrastructure, built to outlast.
            </p>
            <p className="font-mono text-xs text-[#52525B]">
              Lagos · Working globally
            </p>
          </div>

          {/* Middle: nav */}
          <nav className="flex flex-col gap-3">
            {[
              { href: "/work", label: "Work" },
              { href: "/approach", label: "Approach" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline font-mono text-sm text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors duration-200 w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: email + status */}
          <div>
            <a
              href="mailto:dave@striat.dev"
              className="link-underline font-mono text-sm text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors duration-200 inline-block mb-4"
            >
              dave@striat.dev
            </a>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7CFFB2] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7CFFB2]" />
              </span>
              <span className="font-mono text-xs text-[#A1A1AA]">
                Available — May 2026
              </span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-[#1F1F23]">
          <span className="font-mono text-xs text-[#52525B]">
            © 2026 Striat
          </span>
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#52525B] hover:text-[#A1A1AA] transition-colors duration-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="1" width="14" height="14" rx="2" />
                <path d="M5 7v4M5 5v.01M8 11V8.5a1.5 1.5 0 1 1 3 0V11" />
              </svg>
            </a>
            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-[#52525B] hover:text-[#A1A1AA] transition-colors duration-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 2l5.5 6M8.5 8L14 14M14 2L8.5 8M2 14l5.5-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
