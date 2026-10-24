"use client";

import { FormEvent, useState } from "react";
import { contactDetails } from "@/lib/site-data";

type ContactFormProps = {
  kind: "contact" | "careers";
};

export default function ContactForm({ kind }: ContactFormProps) {
  const [notice, setNotice] = useState("");
  const isCareer = kind === "careers";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const subject = isCareer
      ? `Career application: ${String(form.get("position") ?? "")}`
      : String(form.get("subject") ?? "Paboya Group enquiry");
    const message = String(form.get("message") ?? "");
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      ...(isCareer ? [`Position of interest: ${String(form.get("position") ?? "")}`] : []),
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNotice("Your email app should open with your message ready to send.");
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-card__heading">
        {!isCareer && <p className="eyebrow">Write to our team</p>}
        <h2>{isCareer ? "Start a conversation" : "How can we help?"}</h2>
        <p>
          {isCareer
            ? "Tell us a little about yourself and the role you are interested in."
            : "Share a few details and your email app will prepare a message for our team."}
        </p>
      </div>

      <div className="form-grid">
        <label>
          <span>Full name</span>
          <input autoComplete="name" name="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Email address</span>
          <input
            autoComplete="email"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </label>
        {isCareer ? (
          <label className="form-grid__wide">
            <span>Position of interest</span>
            <input name="position" placeholder="e.g. Supply chain" required />
          </label>
        ) : (
          <label className="form-grid__wide">
            <span>Subject</span>
            <input name="subject" placeholder="What is this about?" required />
          </label>
        )}
        <label className="form-grid__wide">
          <span>{isCareer ? "Brief cover note" : "Your message"}</span>
          <textarea
            name="message"
            placeholder={isCareer ? "A short introduction" : "How can we help?"}
            required
            rows={5}
          />
        </label>
      </div>

      <button className="button form-card__submit" type="submit">
        {isCareer ? "Prepare application" : "Prepare message"}
        <span aria-hidden="true">↗</span>
      </button>
      <p aria-live="polite" className="form-card__notice">
        {notice}
      </p>
    </form>
  );
}
