"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0B]/90 backdrop-blur-sm border-b border-[#1F1F23]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="text-[#F4F4F5] font-sans font-medium text-base tracking-tight hover:text-[#7CFFB2] transition-colors duration-200"
        >
          striat
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link font-mono text-sm tracking-wide transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[#F4F4F5]"
                  : "text-[#A1A1AA] hover:text-[#F4F4F5]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Email icon */}
          <a
            href="mailto:hello@striat.dev"
            aria-label="Email us"
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
              <rect x="1" y="3" width="14" height="10" rx="1.5" />
              <path d="M1 4.5l7 5 7-5" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
