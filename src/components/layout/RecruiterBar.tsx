"use client";

import { useState } from "react";

export function RecruiterBar() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <>
      {/* Toast Alert */}
      {copied && (
        <div className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 animate-fade-in rounded-xl border border-blue-500/50 bg-slate-900/95 px-4 py-2.5 text-xs font-semibold text-white shadow-2xl backdrop-blur-md">
          ✓ {copied} copied to clipboard!
        </div>
      )}

      {/* Floating Bottom Bar for Mobile & Tablet */}
      <div className="fixed bottom-3 left-3 right-3 z-40 md:hidden">
        <div className="flex items-center justify-between gap-1.5 rounded-2xl border border-slate-700/80 bg-[#070d1e]/95 p-2 shadow-2xl backdrop-blur-xl">
          {/* Call */}
          <a
            href="tel:+918328375393"
            className="flex flex-1 flex-col items-center justify-center rounded-xl bg-slate-800/80 py-2 text-[11px] font-semibold text-slate-200 active:scale-95 transition"
          >
            <span className="text-base">📞</span>
            <span>Call</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918328375393?text=Hi%20Rajendra,%20saw%20your%20portfolio%20and%20profile%20on%20Naukri."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 flex-col items-center justify-center rounded-xl bg-emerald-600/20 border border-emerald-500/40 py-2 text-[11px] font-semibold text-emerald-300 active:scale-95 transition"
          >
            <span className="text-base">💬</span>
            <span>WhatsApp</span>
          </a>

          {/* Resume */}
          <a
            href="/rajendra-prasad-k-4YE.pdf"
            download="Rajendra-Prasad-K-Resume.pdf"
            className="flex flex-1 flex-col items-center justify-center rounded-xl bg-blue-600/25 border border-blue-500/40 py-2 text-[11px] font-semibold text-blue-300 active:scale-95 transition"
          >
            <span className="text-base">📄</span>
            <span>Resume</span>
          </a>

          {/* Email */}
          <a
            href="mailto:rajkudumala81@gmail.com"
            className="flex flex-1 flex-col items-center justify-center rounded-xl bg-slate-800/80 py-2 text-[11px] font-semibold text-slate-200 active:scale-95 transition"
          >
            <span className="text-base">✉️</span>
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Desktop Quick Dock on Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <div className="flex items-center gap-2 rounded-2xl border border-slate-800/90 bg-[#070d1e]/90 p-2 shadow-2xl backdrop-blur-xl hover:border-blue-500/40 transition duration-300">
          <div className="flex items-center gap-2 px-2 text-xs text-slate-400 border-r border-slate-800">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono font-medium text-slate-300">Quick Recruiter Connect:</span>
          </div>

          <button
            type="button"
            onClick={() => copyToClipboard("+918328375393", "Phone number (+91 8328375393)")}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700/60 bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:border-blue-500/50 hover:bg-slate-800 hover:text-white transition"
            title="Click to copy phone number"
          >
            📞 +91 8328375393
          </button>

          <a
            href="https://wa.me/918328375393?text=Hi%20Rajendra,%20saw%20your%20portfolio%20and%20profile%20on%20Naukri."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/20 transition"
          >
            💬 WhatsApp
          </a>

          <a
            href="/rajendra-prasad-k-4YE.pdf"
            download="Rajendra-Prasad-K-Resume.pdf"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 transition"
          >
            📄 Resume ↓
          </a>
        </div>
      </div>
    </>
  );
}

