import nodemailer from "nodemailer";
import { siteConfig } from "./site-config";
import type { InquiryInput } from "./schema";

/**
 * Pluggable mail transport. With SMTP_HOST/SMTP_USER/SMTP_PASS set, sends
 * real email. Without them (default local dev), logs the message to the
 * console instead so the flow is fully testable without an email provider.
 */
function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    return nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT ? Number(SMTP_PORT) : 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
  }
  return nodemailer.createTransport({ jsonTransport: true });
}

export async function sendInquiryConfirmation(input: InquiryInput): Promise<void> {
  const transport = getTransport();
  const info = await transport.sendMail({
    from: `"${siteConfig.name}" <${siteConfig.contact.email}>`,
    to: input.email,
    subject: `We've received your inquiry — ${siteConfig.name}`,
    text: [
      `Dear ${input.fullName},`,
      "",
      `Thank you for reaching out to ${siteConfig.name}. We have received your inquiry regarding ${input.interestedProducts} and a member of our export sales team will respond within one business day.`,
      "",
      "Summary of your inquiry:",
      `- Company: ${input.companyName}`,
      `- Country: ${input.country}`,
      `- Estimated quantity: ${input.quantity}`,
      `- Target market: ${input.targetMarket}`,
      `- Private label required: ${input.privateLabelRequired ? "Yes" : "No"}`,
      `- OEM required: ${input.oemRequired ? "Yes" : "No"}`,
      "",
      `In the meantime, feel free to reach us directly at ${siteConfig.contact.email} or via WhatsApp at +${siteConfig.contact.whatsapp}.`,
      "",
      "Warm regards,",
      `${siteConfig.name} Export Sales Team`,
    ].join("\n"),
  });
  if (process.env.NODE_ENV !== "production") {
    console.log("[mail:dev] Confirmation email (not actually sent):", JSON.stringify(info));
  }
}

export async function sendSalesNotification(input: InquiryInput): Promise<void> {
  const transport = getTransport();
  const info = await transport.sendMail({
    from: `"${siteConfig.name} Website" <${siteConfig.contact.email}>`,
    to: siteConfig.contact.salesEmail,
    subject: `New inquiry: ${input.companyName} (${input.country})`,
    text: JSON.stringify(input, null, 2),
  });
  if (process.env.NODE_ENV !== "production") {
    console.log("[mail:dev] Sales notification (not actually sent):", JSON.stringify(info));
  }
}
