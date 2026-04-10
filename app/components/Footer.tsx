import Link from "next/link";

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1F1F23] mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Copyright */}
          <span className="font-mono text-xs text-[#52525B]">
            © 2026 Striat
          </span>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline font-mono text-xs text-[#52525B] hover:text-[#A1A1AA] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Email */}
          <a
            href="mailto:hello@striat.dev"
            className="link-underline font-mono text-xs text-[#52525B] hover:text-[#A1A1AA] transition-colors duration-200"
          >
            hello@striat.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
