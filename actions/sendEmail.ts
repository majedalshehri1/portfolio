"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail")?.toString() || ""; 
  const message = formData.get("message")?.toString() || "";

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  try {
    const adminNotification = await resend.emails.send({
      from: "Contact Form <contact@majedalshehri.com>",
      to: "engmajedas1@gmail.com",
      replyTo: senderEmail, 
      subject: `📩 New Contact Form Message from ${senderEmail}`,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });

    const autoReply = await resend.emails.send({
      from: "Majed Alshahri <contact@majedalshehri.com>",
      to: senderEmail,
      subject: `Re: Your message has been received`,
      react: React.createElement(
        "div",
        {
          style: {
            fontFamily: "Arial, sans-serif",
            color: "#333",
            padding: "20px",
            lineHeight: "1.6",
          },
        },
        React.createElement("h2", { style: { color: "#4A90E2" } }, "📬 Thank you for reaching out!"),
        React.createElement("p", null, `Dear ${senderEmail},`),
        React.createElement(
          "p",
          null,
          "Thank you for contacting me. I have received your message and will respond as soon as possible."
        ),
        React.createElement("hr", { style: { margin: "20px 0", border: "none", borderBottom: "1px solid #ddd" } }),
        React.createElement("p", { style: { fontWeight: "bold", fontSize: "16px" } }, "Your Message:"),
        React.createElement(
          "blockquote",
          { style: { fontStyle: "italic", color: "#666", borderLeft: "3px solid #4A90E2", paddingLeft: "10px" } },
          message
        ),
        React.createElement("hr", { style: { margin: "20px 0", border: "none", borderBottom: "1px solid #ddd" } }),
        React.createElement("p", null, "Best regards,"),
        React.createElement("p", { style: { fontWeight: "bold" } }, "Majed Alshahri"),
        React.createElement(
          "p",
          null,
          "📧 ",
          React.createElement("a", { href: "mailto:contact@majedalshehri.com", style: { color: "#4A90E2" } }, "contact@majedalshehri.com")
        ),
        React.createElement(
          "p",
          null,
          "🌐 ",
          React.createElement("a", { href: "https://majedalshehri.com", style: { color: "#4A90E2" } }, "www.majedalshehri.com")
        )
      ),
    });

    return { data: { adminNotification, autoReply } };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
