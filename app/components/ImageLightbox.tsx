"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ImageLightboxProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageLightbox({ src, alt, caption }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const openLightbox = useCallback(() => setOpen(true), []);
  const closeLightbox = useCallback(() => setOpen(false), []);

  /* Lock body scroll & trap focus */
  useEffect(() => {
    if (!open) return;

    document.body.classList.add("overflow-hidden");

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "Tab") {
        // trap focus inside overlay
        e.preventDefault();
        closeRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [open, closeLightbox]);

  return (
    <>
      {/* Thumbnail */}
      <button
        ref={triggerRef}
        type="button"
        onClick={openLightbox}
        aria-label={`View full size: ${alt}`}
        className="group block w-full text-left cursor-pointer"
      >
        <div className="w-full border border-[#1F1F23] rounded-[6px] bg-[#111113] aspect-video relative overflow-hidden transition-all duration-200 group-hover:border-[#2A2A30] group-hover:scale-[1.01]">
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {caption && (
          <p className="font-mono text-xs text-[#52525B] mt-3">{caption}</p>
        )}
        <p className="font-mono text-xs text-[#52525B] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Click to expand →
        </p>
      </button>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label={alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              ref={closeRef}
              type="button"
              onClick={closeLightbox}
              aria-label="Close lightbox"
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center border border-white/20 rounded text-white/80 hover:text-white hover:border-white/40 transition-colors duration-150 cursor-pointer z-10"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>

            {/* Image + caption */}
            <div
              className="flex flex-col items-center px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={src}
                alt={alt}
                className="max-w-[95vw] max-h-[90vh] object-contain rounded-[6px]"
              />
              {caption && (
                <p className="font-mono text-xs text-[#A1A1AA] mt-4 text-center max-w-2xl">
                  {caption}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
