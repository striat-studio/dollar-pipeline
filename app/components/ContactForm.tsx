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
  website: string; // honeypot
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
  website: "",
};

type SubmitStatus = "idle" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "w-full h-11 px-4 bg-[#111113] border border-[#1F1F23] rounded-[4px] text-[#F4F4F5] font-sans text-sm placeholder:text-[#52525B] focus:outline-none focus:border-[#52525B] transition-colors duration-200";

const inputErrorClass =
  "w-full h-11 px-4 bg-[#111113] border border-red-500/50 rounded-[4px] text-[#F4F4F5] font-sans text-sm placeholder:text-[#52525B] focus:outline-none focus:border-red-400 transition-colors duration-200";

const selectClass =
  "w-full h-11 px-4 bg-[#111113] border border-[#1F1F23] rounded-[4px] text-[#F4F4F5] font-sans text-sm focus:outline-none focus:border-[#52525B] transition-colors duration-200 appearance-none cursor-pointer";

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function set(field: keyof FormData) {
    return (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setData((prev) => ({ ...prev, [field]: e.target.value }));
      // Clear field error on change
      if (field in fieldErrors) {
        setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };
  }

  function validate(): boolean {
    const errors: FieldErrors = {};

    if (!data.name.trim()) {
      errors.name = "Name is required.";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required.";
    } else if (!EMAIL_RE.test(data.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!data.message.trim()) {
      errors.message = "Please describe what you are building.";
    } else if (data.message.trim().length < 10) {
      errors.message = "Please write at least 10 characters.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage("");

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setSubmitStatus("success");
        setData(initialData);
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          json.error ?? "Something went wrong. Please try again.",
        );
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  /* ── Success state ── */
  if (submitStatus === "success") {
    return (
      <div className="py-16 text-center md:text-left">
        {/* Mint checkmark */}
        <div className="mb-6">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            className="mx-auto md:mx-0"
          >
            <circle cx="24" cy="24" r="24" fill="#7CFFB2" fillOpacity="0.1" />
            <path
              d="M16 24l6 6 10-12"
              stroke="#7CFFB2"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="font-mono text-xs text-[#7CFFB2] uppercase tracking-widest mb-4">
          Message received
        </p>
        <p className="text-[#A1A1AA] text-base leading-relaxed max-w-md">
          We will reply within 24 hours. In the meantime, you can reach us
          directly at{" "}
          <a
            href="mailto:dave@striat.dev"
            className="text-[#F4F4F5] hover:text-[#7CFFB2] transition-colors duration-200"
          >
            dave@striat.dev
          </a>
        </p>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={data.website}
        onChange={set("website")}
        tabIndex={-1}
        autoComplete="off"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
        }}
        aria-hidden="true"
      />

      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="block font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2"
        >
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={data.name}
          onChange={set("name")}
          placeholder="Your name"
          disabled={isSubmitting}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
          className={fieldErrors.name ? inputErrorClass : inputClass}
        />
        {fieldErrors.name && (
          <p id="name-error" className="font-mono text-xs text-red-400 mt-1.5">
            {fieldErrors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="block font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={data.email}
          onChange={set("email")}
          placeholder="you@company.com"
          disabled={isSubmitting}
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
          className={fieldErrors.email ? inputErrorClass : inputClass}
        />
        {fieldErrors.email && (
          <p
            id="email-error"
            className="font-mono text-xs text-red-400 mt-1.5"
          >
            {fieldErrors.email}
          </p>
        )}
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="contact-company"
          className="block font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2"
        >
          Company{" "}
          <span className="text-[#52525B] normal-case tracking-normal font-sans">
            (optional)
          </span>
        </label>
        <input
          id="contact-company"
          type="text"
          value={data.company}
          onChange={set("company")}
          placeholder="Company or project name"
          disabled={isSubmitting}
          className={inputClass}
        />
      </div>

      {/* Location */}
      <div>
        <label
          htmlFor="contact-location"
          className="block font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2"
        >
          Where you are based
        </label>
        <input
          id="contact-location"
          type="text"
          value={data.location}
          onChange={set("location")}
          placeholder="City, Country"
          disabled={isSubmitting}
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2"
        >
          What you are building
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={data.message}
          onChange={set("message")}
          placeholder="Tell us about your project — what you are building, what problem it solves, and any constraints."
          disabled={isSubmitting}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className={`w-full px-4 py-3 bg-[#111113] border ${fieldErrors.message ? "border-red-500/50 focus:border-red-400" : "border-[#1F1F23] focus:border-[#52525B]"} rounded-[4px] text-[#F4F4F5] font-sans text-sm placeholder:text-[#52525B] focus:outline-none transition-colors duration-200 resize-none leading-relaxed`}
        />
        {fieldErrors.message && (
          <p
            id="message-error"
            className="font-mono text-xs text-red-400 mt-1.5"
          >
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* Engagement type */}
      <div>
        <label
          htmlFor="contact-engagement"
          className="block font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2"
        >
          Engagement type
        </label>
        <div className="relative">
          <select
            id="contact-engagement"
            value={data.engagementType}
            onChange={set("engagementType")}
            disabled={isSubmitting}
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
        <label
          htmlFor="contact-timeline"
          className="block font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2"
        >
          Timeline
        </label>
        <div className="relative">
          <select
            id="contact-timeline"
            value={data.timeline}
            onChange={set("timeline")}
            disabled={isSubmitting}
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
        <label
          htmlFor="contact-investment"
          className="block font-mono text-xs text-[#52525B] uppercase tracking-widest mb-2"
        >
          Investment range
        </label>
        <div className="relative">
          <select
            id="contact-investment"
            value={data.investment}
            onChange={set("investment")}
            disabled={isSubmitting}
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
        {submitStatus === "error" && (
          <div className="mb-4 p-3 border border-red-500/20 rounded-[4px] bg-red-500/5">
            <p className="font-mono text-xs text-red-400">
              {errorMessage}
            </p>
            <p className="font-mono text-xs text-[#52525B] mt-1">
              If this keeps failing, email us directly at{" "}
              <a
                href="mailto:dave@striat.dev"
                className="text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors duration-200"
              >
                dave@striat.dev
              </a>
            </p>
          </div>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="w-full inline-flex items-center justify-center h-12 px-8 rounded-[4px] bg-[#7CFFB2] text-[#0A0A0B] font-sans font-medium text-sm tracking-tight hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed transition-transform duration-200"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="opacity-25"
                />
                <path
                  d="M4 12a8 8 0 018-8"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="opacity-75"
                />
              </svg>
              Sending…
            </>
          ) : (
            "Send →"
          )}
        </button>
      </div>

      <p className="font-mono text-xs text-[#52525B] text-center">
        Or email us directly at{" "}
        <a
          href="mailto:dave@striat.dev"
          className="text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors duration-200"
        >
          dave@striat.dev
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
