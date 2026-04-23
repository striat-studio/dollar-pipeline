"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/approach", label: "Approach" },
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
          className="text-[#F4F4F5] font-sans font-medium text-base tracking-tight lowercase"
        >
          striat
        </Link>

        {/* Nav links + CTA */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link hidden sm:block font-mono text-sm uppercase tracking-widest transition-colors duration-200 ${
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-[#F4F4F5]"
                  : "text-[#A1A1AA] hover:text-[#F4F4F5]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="font-mono text-sm text-[#7CFFB2] hover:text-[#5DEBA0] transition-colors duration-200 tracking-wide"
          >
            Start a project{" "}
            <span className="inline-block ml-1" aria-hidden="true">
              →
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
