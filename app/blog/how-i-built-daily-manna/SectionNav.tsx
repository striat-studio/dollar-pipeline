"use client";

import { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
}

export default function SectionNav({ sections }: { sections: Section[] }) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    let raf: number | null = null;

    const update = () => {
      raf = null;
      const offset = 120;
      let current = sections[0]?.id ?? "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= offset) {
          current = s.id;
        } else {
          break;
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [sections]);

  return (
    <div className="sticky top-24 pt-14">
      <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest mb-4">
        Sections
      </p>
      <ul>
        {sections.map((s) => {
          const isActive = activeId === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`block pl-4 py-1.5 font-sans text-sm border-l-2 transition-colors duration-200 ${
                  isActive
                    ? "text-[#F4F4F5] border-[#7CFFB2]"
                    : "text-[#A1A1AA] border-[#1F1F23] hover:text-[#F4F4F5] hover:border-[#3F3F46]"
                }`}
              >
                {s.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
