import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

/** Inbox for contact form submissions */
const CONTACT_INBOX = "service@fixerappliancerepair.ca";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildMessagePayload(
  name: string,
  email: string,
  phone: string,
  message: string | undefined,
  safeName: string,
  safeMessage: string
) {
  const to = process.env.CONTACT_EMAIL || CONTACT_INBOX;
  const subject = `New Request for Service from ${name}`;
  const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #DD4F06;">New Contact Form Submission</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${escapeHtml(email)}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${String(phone).replace(/[^\d+]/g, "")}">${escapeHtml(phone)}</a></p>
            ${message ? `<p><strong>Message:</strong></p><p style="white-space: pre-wrap;">${safeMessage}</p>` : ""}
          </div>
          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            This email was sent from the contact form on fixerappliancerepair.ca
          </p>
        </div>
      `;
  const text = `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        ${message ? `Message: ${message}` : ""}
      `;
  return { to, subject, html, text, replyTo: email };
}

export async function POST(request: Request) {
  try {
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.error("SMTP_USER and SMTP_PASS must be set (Hostinger mailbox credentials)");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(String(name).trim());
    const safeMessage = message ? escapeHtml(String(message)) : "";
    const payload = buildMessagePayload(
      name,
      email,
      phone,
      message,
      safeName,
      safeMessage
    );

    const port = parseInt(process.env.SMTP_PORT || "465", 10);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port,
      secure: port === 465,
      ...(port === 587 ? { requireTLS: true } : {}),
      auth: { user: smtpUser, pass: smtpPass },
    });

    const fromName = process.env.SMTP_FROM_NAME || "Fixer Appliance Repair";
    const from = `"${fromName}" <${smtpUser}>`;

    await transporter.sendMail({
      from,
      to: payload.to,
      replyTo: payload.replyTo,
      subject: payload.subject,
      html: payload.html,
      text: payload.text,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
