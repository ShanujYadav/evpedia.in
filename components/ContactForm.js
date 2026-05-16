"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  function handleChange(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[32px] bg-[#03140a] p-8 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00b43e]">
          Contact
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tight">Tell us what matters.</h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
          Share editorial ideas, partnership inquiries, or feedback about the reading
          experience. We review every message.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="rounded-[32px] border border-white/10 bg-slate-900 p-8 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.55)]"
      >
        <div className="grid gap-5">
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#00b43e]"
          />
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#00b43e]"
          />
          <textarea
            required
            rows={6}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#00b43e]"
          />
          <button
            type="submit"
            className="rounded-2xl bg-[#00b43e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#009735]"
          >
            Send Message
          </button>
          {success ? (
            <p className="text-sm font-medium text-emerald-400">
              Thanks. Your message has been submitted successfully.
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
