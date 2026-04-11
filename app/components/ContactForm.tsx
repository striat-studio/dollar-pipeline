"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  company: string;
  location: string;
  message: string;
  engagementType: string;
  timeline: string;
  investment: string;
}

const initialData: FormData = {
  name: "",
  email: "",
  company: "",
  location: "",
  message: "",
  engagementType: "",
  timeline: "",
  investment: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full h-11 px-4 bg-[#111113] border border-[#1F1F23] rounded-[4px] text-[#F4F4F5] font-sans text-sm placeholder:text-[#52525B] focus:outline-none focus:border-[#52525B] transition-colors duration-200";

const selectClass =
  "w-full h-11 px-4 bg-[#111113] border border-[#1F1F23] rounded-[4px] text-[#F4F4F5] font-sans text-sm focus:outline-none focus:border-[#52525B] transition-colors duration-200 appearance-none cursor-pointer";

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<Status>("idle");

  function set(field: keyof FormData) {
    return (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => setData((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        setData(initialData);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-16 text-center md:text-left">
        <p className="font-mono text-xs text-[#7CFFB2] uppercase tracking-widest mb-4">
          Message received
        </p>
        <p className="text-[#A1A1AA] text-base leading-relaxed max-w-md">
          Thank you for reaching out. We will review your inquiry and reply
          within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name */}
      <div>
        <label className="block font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2">
          Name
        </label>
        <input
          type="text"
          required
          value={data.name}
          onChange={set("name")}
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2">
          Email
        </label>
        <input
          type="email"
          required
          value={data.email}
          onChange={set("email")}
          placeholder="you@company.com"
          className={inputClass}
        />
      </div>

      {/* Company */}
      <div>
        <label className="block font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2">
          Company{" "}
          <span className="text-[#52525B] normal-case tracking-normal font-sans">
            (optional)
          </span>
        </label>
        <input
          type="text"
          value={data.company}
          onChange={set("company")}
          placeholder="Company or project name"
          className={inputClass}
        />
      </div>

      {/* Location */}
      <div>
        <label className="block font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2">
          Where you are based
        </label>
        <input
          type="text"
          value={data.location}
          onChange={set("location")}
          placeholder="City, Country"
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div>
        <label className="block font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2">
          What you are building
        </label>
        <textarea
          required
          rows={4}
          value={data.message}
          onChange={set("message")}
          placeholder="Tell us about your project — what you are building, what problem it solves, and any constraints."
          className="w-full px-4 py-3 bg-[#111113] border border-[#1F1F23] rounded-[4px] text-[#F4F4F5] font-sans text-sm placeholder:text-[#52525B] focus:outline-none focus:border-[#52525B] transition-colors duration-200 resize-none leading-relaxed"
        />
      </div>

      {/* Engagement type */}
      <div>
        <label className="block font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2">
          Engagement type
        </label>
        <div className="relative">
          <select
            value={data.engagementType}
            onChange={set("engagementType")}
            className={selectClass}
          >
            <option value="" disabled>
              Select type
            </option>
            <option value="production-mvp">Production MVP</option>
            <option value="business-infrastructure">
              Business Infrastructure
            </option>
            <option value="custom-system">Custom System</option>
            <option value="not-sure">Not sure yet</option>
          </select>
          <ChevronDown />
        </div>
      </div>

      {/* Timeline */}
      <div>
        <label className="block font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2">
          Timeline
        </label>
        <div className="relative">
          <select
            value={data.timeline}
            onChange={set("timeline")}
            className={selectClass}
          >
            <option value="" disabled>
              Select timeline
            </option>
            <option value="this-month">This month</option>
            <option value="next-1-2-months">Next 1–2 months</option>
            <option value="exploring">Exploring options</option>
          </select>
          <ChevronDown />
        </div>
      </div>

      {/* Investment range */}
      <div>
        <label className="block font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2">
          Investment range
        </label>
        <div className="relative">
          <select
            value={data.investment}
            onChange={set("investment")}
            className={selectClass}
          >
            <option value="" disabled>
              Select range
            </option>
            <option value="10k-20k">$10K–$20K</option>
            <option value="20k-50k">$20K–$50K</option>
            <option value="50k+">$50K+</option>
            <option value="open">Open to discussion</option>
          </select>
          <ChevronDown />
        </div>
      </div>

      {/* Submit */}
      <div className="pt-2">
        {status === "error" && (
          <p className="font-mono text-xs text-red-400 mb-4">
            Something went wrong. Try emailing hello@striat.dev directly.
          </p>
        )}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center h-12 px-8 rounded-[4px] bg-[#7CFFB2] text-[#0A0A0B] font-sans font-medium text-sm tracking-tight hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed transition-transform duration-200"
        >
          {status === "submitting" ? "Sending…" : "Send →"}
        </button>
      </div>

      <p className="font-mono text-xs text-[#52525B] text-center">
        Or email us directly at{" "}
        <a
          href="mailto:hello@striat.dev"
          className="text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors duration-200"
        >
          hello@striat.dev
        </a>
      </p>
    </form>
  );
}

function ChevronDown() {
  return (
    <svg
      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#52525B]"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 5l4 4 4-4" />
    </svg>
  );
}
