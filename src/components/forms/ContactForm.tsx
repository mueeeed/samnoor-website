"use client";

import { useState, type FormEvent } from "react";
import { businessTypes, contactMethods } from "@/lib/schema";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-sm border border-line bg-panel px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none";
const labelClass = "text-xs font-medium uppercase tracking-wide text-muted";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: formData.get("fullName"),
      companyName: formData.get("companyName"),
      country: formData.get("country"),
      phone: formData.get("phone"),
      whatsapp: formData.get("whatsapp") || "",
      email: formData.get("email"),
      interestedProducts: formData.get("interestedProducts"),
      quantity: formData.get("quantity"),
      targetMarket: formData.get("targetMarket"),
      businessType: formData.get("businessType"),
      privateLabelRequired: formData.get("privateLabelRequired") === "on",
      oemRequired: formData.get("oemRequired") === "on",
      customBranding: formData.get("customBranding") === "on",
      message: formData.get("message") || "",
      preferredContactMethod: formData.get("preferredContactMethod"),
      consent: formData.get("consent") === "on",
      website: formData.get("website") || "",
      source: "contact-page",
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      setStatus("error");
      setErrorMessage(data.error || "Something went wrong. Please try again.");
      if (data.issues?.fieldErrors) setErrors(data.issues.fieldErrors);
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="card-premium flex flex-col items-center gap-4 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <CheckIcon width={28} height={28} />
        </span>
        <h3 className="font-heading text-xl font-semibold text-heading">Inquiry Received</h3>
        <p className="max-w-sm text-sm text-muted">
          Thank you for reaching out. Our export sales team will respond within one business day with a quotation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-premium flex flex-col gap-5 p-6 sm:p-8">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className={labelClass} htmlFor="fullName">Full Name *</label>
          <input id="fullName" name="fullName" required className={inputClass} placeholder="Jane Doe" />
          {errors.fullName && <p className="text-xs text-red-500">{errors.fullName[0]}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass} htmlFor="companyName">Company Name *</label>
          <input id="companyName" name="companyName" required className={inputClass} placeholder="Noor Collective Boutiques" />
          {errors.companyName && <p className="text-xs text-red-500">{errors.companyName[0]}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass} htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="jane@company.com" />
          {errors.email && <p className="text-xs text-red-500">{errors.email[0]}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass} htmlFor="phone">Phone *</label>
          <input id="phone" name="phone" type="tel" required className={inputClass} placeholder="+1 555 000 0000" />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone[0]}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass} htmlFor="whatsapp">WhatsApp (optional)</label>
          <input id="whatsapp" name="whatsapp" type="tel" className={inputClass} placeholder="+1 555 000 0000" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass} htmlFor="country">Country *</label>
          <input id="country" name="country" required className={inputClass} placeholder="United Kingdom" />
          {errors.country && <p className="text-xs text-red-500">{errors.country[0]}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="interestedProducts">Products of Interest *</label>
        <input
          id="interestedProducts"
          name="interestedProducts"
          required
          className={inputClass}
          placeholder="e.g. Chiffon hijabs, Nida abayas"
        />
        {errors.interestedProducts && <p className="text-xs text-red-500">{errors.interestedProducts[0]}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className={labelClass} htmlFor="quantity">Estimated Quantity *</label>
          <input id="quantity" name="quantity" required className={inputClass} placeholder="e.g. 1,000 pieces" />
          {errors.quantity && <p className="text-xs text-red-500">{errors.quantity[0]}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass} htmlFor="targetMarket">Target Market *</label>
          <input id="targetMarket" name="targetMarket" required className={inputClass} placeholder="e.g. United Kingdom retail" />
          {errors.targetMarket && <p className="text-xs text-red-500">{errors.targetMarket[0]}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass} htmlFor="businessType">Business Type *</label>
          <select id="businessType" name="businessType" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select one</option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass} htmlFor="preferredContactMethod">Preferred Contact Method *</label>
          <select id="preferredContactMethod" name="preferredContactMethod" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select one</option>
            {contactMethods.map((method) => (
              <option key={method} value={method}>{method}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-3">
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" name="privateLabelRequired" className="h-4 w-4 accent-accent" />
          Private label required
        </label>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" name="oemRequired" className="h-4 w-4 accent-accent" />
          OEM production required
        </label>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" name="customBranding" className="h-4 w-4 accent-accent" />
          Custom branding required
        </label>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="message">Message (optional)</label>
        <textarea id="message" name="message" rows={4} className={inputClass} placeholder="Anything else we should know?" />
      </div>

      <label className="flex items-start gap-2.5 text-sm text-muted">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 accent-accent" />
        I agree to be contacted by Samnoor regarding this inquiry and accept the privacy policy. *
      </label>

      {status === "error" && <p className="text-sm text-red-500">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-sm bg-accent px-7 py-3 font-body text-sm font-medium text-paper transition-colors hover:bg-transparent hover:text-accent hover:border hover:border-accent disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
        <ArrowRightIcon width={16} height={16} />
      </button>
    </form>
  );
}
