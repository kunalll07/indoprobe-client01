"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { contactConfig } from "@/config/contact";

const serviceOptions = [
  "Personal Investigation",
  "Corporate Investigation",
  "Background Verification",
  "Insurance Investigation",
  "Banking & Financial Investigation",
  "Technical Investigation",
  "Other / Not Sure",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const email = String(formData.get("email") ?? "");
    const organization = String(formData.get("organization") ?? "");
    const service = String(formData.get("service") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = `Website Enquiry — ${service || "General"}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      organization && `Organization: ${organization}`,
      `Service Required: ${service}`,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${contactConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-premium sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Organization" name="organization" />
        <div className="sm:col-span-2">
          <label
            htmlFor="service"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-800"
          >
            Service Required
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="w-full rounded-lg border border-navy-900/15 bg-offwhite-100 px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-500"
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-800"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full rounded-lg border border-navy-900/15 bg-offwhite-100 px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-500"
            placeholder="Briefly describe your requirement"
          />
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-graphite-500">
        Please avoid submitting highly sensitive case information through the public
        form. For sensitive matters, use WhatsApp or email directly.
      </p>

      <button
        type="submit"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3 text-sm font-semibold text-navy-950 shadow-gold transition-colors hover:bg-gold-400"
      >
        <Send className="h-4 w-4" />
        Send Message
      </button>

      {submitted && (
        <p className="mt-4 flex items-center gap-2 text-sm font-medium text-navy-700">
          <CheckCircle2 className="h-4 w-4 text-gold-600" />
          Your email application should now open with your message ready to send.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-800"
      >
        {label}
        {required && <span className="text-gold-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-navy-900/15 bg-offwhite-100 px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-500"
      />
    </div>
  );
}
