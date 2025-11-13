"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      event.currentTarget.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setTimeout(() => {
        setStatus("idle");
        setError(null);
      }, 5000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel rounded-3xl p-8 shadow-2xl shadow-sky-500/10"
    >
      <div className="mb-6 flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-200">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="How should I address you?"
          className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
        />
      </div>
      <div className="mb-6 flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-200">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
        />
      </div>
      <div className="mb-8 flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-200">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Share a few sentences about your idea and goals."
          className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
      <p
        className="mt-4 text-center text-xs text-slate-300"
        role="status"
        aria-live="polite"
      >
        {status === "success" && "Thanks! I’ll get back to you within one business day."}
        {status === "error" && (error ?? "Something went wrong. Please retry.")}
        {status === "idle" && "No spam — just a quick reply with next steps."}
        {status === "loading" && "Crafting a reply..."}
      </p>
    </form>
  );
}
