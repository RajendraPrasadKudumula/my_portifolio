"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("rajkudumala81@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+918328375393");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="border-t border-slate-800/80 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-[#0a1024] via-slate-900/90 to-[#070c1a] p-8 sm:p-12 text-center shadow-2xl backdrop-blur-xl">
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[100px]" />

          <SectionHeading
            align="center"
            eyebrow="Get In Touch"
            title="Let's build scalable systems together."
            description="I am actively looking for Senior Full Stack & Backend Engineering roles where I can drive backend architecture, API scaling, cloud systems, and AI integration."
          />

          {/* Availability Card */}
          <div className="mx-auto mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-xs sm:text-sm font-semibold text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to Senior Engineering Opportunities</span>
            <span className="text-emerald-500">•</span>
            <span className="font-mono text-xs">Notice: Immediate / 30 Days</span>
          </div>

          {/* Direct Action Grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto text-left">
            {/* Phone Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 transition hover:border-blue-500/40">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Direct Phone / Call
                </span>
                <button
                  type="button"
                  onClick={copyPhone}
                  className="text-[11px] font-mono font-semibold text-blue-400 hover:text-blue-300"
                >
                  {copiedPhone ? "✓ Copied!" : "Copy"}
                </button>
              </div>
              <a
                href="tel:+918328375393"
                className="mt-2 block text-lg font-bold text-white hover:text-blue-400 transition"
              >
                +91 8328375393
              </a>
              <p className="mt-1 text-xs text-slate-400">Tap to call directly</p>
            </div>

            {/* Email Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 transition hover:border-blue-500/40">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Direct Email
                </span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="text-[11px] font-mono font-semibold text-blue-400 hover:text-blue-300"
                >
                  {copiedEmail ? "✓ Copied!" : "Copy"}
                </button>
              </div>
              <a
                href="mailto:rajkudumala81@gmail.com"
                className="mt-2 block text-base sm:text-lg font-bold text-white hover:text-blue-400 transition truncate"
              >
                rajkudumala81@gmail.com
              </a>
              <p className="mt-1 text-xs text-slate-400">Tap to compose email</p>
            </div>
          </div>

          {/* Social Links & Primary CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/918328375393?text=Hi%20Rajendra,%20saw%20your%20portfolio%20and%20profile%20on%20Naukri."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20 transition"
            >
              <span>💬</span> Chat on WhatsApp ↗
            </a>

            <a
              href="/rajendra-prasad-k-4YE.pdf"
              download="Rajendra-Prasad-K-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-indigo-500 transition"
            >
              <span>📄</span> Download Resume (PDF) ↓
            </a>

            <a
              href="https://www.linkedin.com/in/rajendra-prasad-k-20a302136/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-slate-600 hover:bg-slate-800 transition"
            >
              <span>🔗</span> LinkedIn ↗
            </a>

            <a
              href="https://github.com/RajendraPrasadKudumula"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-slate-600 hover:bg-slate-800 transition"
            >
              <span>🐙</span> GitHub ↗
            </a>
          </div>

          {/* Quick Recruiter Note */}
          <div className="mx-auto mt-10 max-w-2xl border-t border-slate-800/80 pt-6 text-xs sm:text-sm text-slate-400 leading-relaxed">
            <p>
              Based in <strong>Bengaluru, India</strong> • Open to Bangalore local, hybrid, or remote engineering opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}