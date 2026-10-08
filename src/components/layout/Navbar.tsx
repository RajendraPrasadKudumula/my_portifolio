"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "AI Engineering", href: "#ai" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-800/80 bg-[#050811]/90 backdrop-blur-xl shadow-lg shadow-black/40"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <a href="#" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 font-mono text-sm font-bold text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition">
            RP
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-white tracking-tight">
              Rajendra Prasad<span className="text-blue-500">.</span>
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
              Senior Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Right CTA */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="/rajendra-prasad-k-4YE.pdf"
            download="Rajendra-Prasad-K-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-blue-500/50 hover:bg-slate-800 hover:text-white"
          >
            <svg
              className="h-3.5 w-3.5 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Resume (PDF)
          </a>

          <Button href="#contact" size="sm" variant="primary">
            Hire Me →
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 text-slate-200 transition hover:bg-slate-800 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="border-b border-slate-800 bg-[#070c1a]/95 backdrop-blur-2xl px-6 py-6 lg:hidden animate-fade-in">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-200 transition hover:bg-slate-800/60 hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-2 flex flex-col gap-3 border-t border-slate-800 pt-4">
              <a
                href="/rajendra-prasad-k-4YE.pdf"
                download="Rajendra-Prasad-K-Resume.pdf"
                className="flex items-center justify-center gap-2 rounded-xl border border-blue-500/40 bg-blue-500/10 py-3 text-sm font-semibold text-blue-300"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume (PDF)
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+918328375393"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 py-2.5 text-xs font-semibold text-slate-200"
                >
                  📞 Call
                </a>
                <a
                  href="https://wa.me/918328375393?text=Hi%20Rajendra,%20saw%20your%20portfolio%20and%20profile%20on%20Naukri."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 py-2.5 text-xs font-semibold text-emerald-300"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}