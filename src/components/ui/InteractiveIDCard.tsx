"use client";

import { useState, useRef } from "react";
import { Badge } from "@/components/ui/Badge";

export function InteractiveIDCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSwinging, setIsSwinging] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [copied, setCopied] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle 3D Tilt on Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  // Handle Touch Move for Mobile
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = cardRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = Math.max(-15, Math.min(15, ((y - centerY) / centerY) * -15));
    const rotateY = Math.max(-15, Math.min(15, ((x - centerX) / centerX) * 15));

    setTilt({
      x: rotateX,
      y: rotateY,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
    });
  };

  const handleTouchEnd = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  // Trigger Swing & Flip
  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent flip if clicking on inner action buttons directly
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("button.action-btn")) {
      return;
    }

    triggerSwing();
    setIsFlipped(!isFlipped);
  };

  const triggerSwing = () => {
    setIsSwinging(true);
    setTimeout(() => {
      setIsSwinging(false);
    }, 1600);
  };

  const copyText = (text: string, label: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <div className="relative mx-auto flex flex-col items-center select-none">
      {/* Toast */}
      {copied && (
        <div className="absolute -top-12 z-50 animate-fade-in rounded-xl border border-blue-500/50 bg-slate-900/95 px-3.5 py-2 text-xs font-semibold text-white shadow-2xl backdrop-blur-md">
          ✓ {copied} copied!
        </div>
      )}

      {/* LANYARD STRAP (Hangs down from top) */}
      <div className="flex flex-col items-center">
        {/* Lanyard Fabric Ribbon */}
        <div className="relative h-14 w-9 rounded-t-sm bg-gradient-to-r from-blue-950 via-blue-600 to-blue-950 shadow-md shadow-blue-500/20">
          {/* Lanyard Pattern Lines */}
          <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-blue-300/40" />
          <div className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-[8px] font-bold text-blue-200 uppercase tracking-widest rotate-90 whitespace-nowrap">
            HAPPIEST MINDS
          </div>
        </div>

        {/* Metallic Chrome Clasp & Ring */}
        <div className="relative -mt-1 flex flex-col items-center z-20">
          <div className="h-3.5 w-6 rounded-md border border-slate-400/60 bg-gradient-to-b from-slate-200 via-slate-400 to-slate-600 shadow-sm" />
          <div className="h-4 w-4 rounded-full border-2 border-slate-300 bg-transparent -mt-1 shadow-sm" />
          <div className="h-3 w-1.5 rounded-sm bg-gradient-to-b from-slate-300 to-slate-500 -mt-1" />
        </div>
      </div>

      {/* SWINGING PENDULUM CONTAINER */}
      <div
        className={`relative z-10 -mt-2.5 perspective-1000 ${
          isSwinging ? "animate-impulse-swing" : "animate-lanyard-idle"
        }`}
      >
        {/* 3D TILT & FLIP CARD */}
        <div
          ref={cardRef}
          onClick={handleCardClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${
              tilt.y + (isFlipped ? 180 : 0)
            }deg)`,
            transition: isSwinging
              ? "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)"
              : "transform 0.15s ease-out",
          }}
          className="relative h-[480px] w-[310px] sm:h-[510px] sm:w-[335px] cursor-pointer rounded-3xl p-1 transform-style-3d transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
        >
          {/* Lanyard Top Slot Hole */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 flex h-4 w-12 items-center justify-center rounded-full border border-slate-600 bg-[#050811] shadow-inner">
            <div className="h-1.5 w-7 rounded-full bg-slate-800" />
          </div>

          {/* =========================================
              CARD FRONT: DIGITAL ENGINEER BADGE
          ========================================= */}
          <div className="absolute inset-0 rounded-3xl border border-slate-700/80 bg-gradient-to-b from-[#0b1329] via-[#080d1e] to-[#040711] p-5 sm:p-6 shadow-2xl backdrop-blur-xl backface-hidden overflow-hidden flex flex-col justify-between">
            {/* Dynamic Holographic Foil Glare */}
            <div
              className="pointer-events-none absolute inset-0 holographic-foil opacity-30 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-60"
              style={{
                backgroundPosition: `${tilt.glareX}% ${tilt.glareY}%`,
              }}
            />

            {/* Subtle Noise Texture & Top Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" />

            {/* Top Row: Company & Security Hologram */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mt-1">
              <div>
                <span className="font-mono text-[10px] font-extrabold uppercase tracking-widest text-blue-400 block">
                  HAPPIEST MINDS
                </span>
                <span className="text-[9px] font-mono text-slate-400">
                  ENGINEERING ID • ACCESS PASS
                </span>
              </div>

              {/* Holographic Security Chip */}
              <div className="relative flex h-7 w-9 items-center justify-center rounded-md border border-yellow-500/40 bg-gradient-to-br from-yellow-300/20 via-amber-500/30 to-yellow-600/20 shadow-sm">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="h-1.5 w-2 border border-yellow-400/60 rounded-xs" />
                  <div className="h-1.5 w-2 border border-yellow-400/60 rounded-xs" />
                  <div className="h-1.5 w-2 border border-yellow-400/60 rounded-xs" />
                  <div className="h-1.5 w-2 border border-yellow-400/60 rounded-xs" />
                </div>
              </div>
            </div>

            {/* Middle: Candidate Identity Avatar & Details */}
            <div className="flex flex-col items-center text-center my-auto py-2">
              {/* Photo Avatar with Status Ring */}
              <div className="relative mb-3">
                <div className="flex h-20 w-20 sm:h-22 sm:w-22 items-center justify-center rounded-2xl border-2 border-blue-500/50 bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 font-mono text-2xl sm:text-3xl font-extrabold text-white shadow-xl shadow-blue-500/30">
                  RP
                </div>

                {/* Status Dot */}
                <div
                  className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#080d1e] bg-emerald-500 text-[10px] text-white shadow"
                  title="Available for roles"
                >
                  ✓
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
                Rajendra Prasad Kudumula
              </h3>
              <p className="mt-0.5 text-xs font-semibold text-blue-400 font-mono">
                Senior Software Engineer
              </p>
              <p className="text-[11px] text-slate-400">
                Full Stack • Backend • AI Engineering
              </p>

              {/* Core Skill Chips */}
              <div className="mt-3.5 flex flex-wrap justify-center gap-1.5 max-w-[270px]">
                <Badge variant="primary" className="text-[10px] py-0.5 px-2">
                  Node.js
                </Badge>
                <Badge variant="primary" className="text-[10px] py-0.5 px-2">
                  NestJS
                </Badge>
                <Badge variant="primary" className="text-[10px] py-0.5 px-2">
                  TypeScript
                </Badge>
                <Badge variant="default" className="text-[10px] py-0.5 px-2">
                  React
                </Badge>
                <Badge variant="default" className="text-[10px] py-0.5 px-2">
                  PostgreSQL
                </Badge>
                <Badge variant="purple" className="text-[10px] py-0.5 px-2">
                  AI / RAG
                </Badge>
              </div>
            </div>

            {/* Bottom: ID Meta, Barcode & Flip Prompt */}
            <div className="border-t border-slate-800/80 pt-3">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <div>
                  <span className="text-slate-500 block">BADGE ID</span>
                  <span className="font-bold text-slate-200">#HM-8328-SE</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 block">EXPERIENCE</span>
                  <span className="font-bold text-emerald-400">4+ YEARS (SENIOR)</span>
                </div>
              </div>

              {/* Barcode graphic */}
              <div className="mt-2 flex h-5 w-full items-center justify-between overflow-hidden opacity-60">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-white"
                    style={{
                      width: `${(i % 3) + 1}px`,
                      height: "100%",
                      marginRight: `${(i % 2) + 1}px`,
                    }}
                  />
                ))}
              </div>

              {/* Click / Touch Prompt */}
              <p className="mt-2 text-center text-[10px] font-mono text-blue-400 font-semibold animate-pulse">
                ✦ TOUCH / CLICK TO SWING & FLIP PASS ✦
              </p>
            </div>
          </div>

          {/* =========================================
              CARD BACK: RECRUITER PASS & DIRECT CONNECT
          ========================================= */}
          <div className="absolute inset-0 rounded-3xl border border-blue-500/40 bg-gradient-to-b from-[#0c152e] via-[#080e22] to-[#040711] p-5 sm:p-6 shadow-2xl backdrop-blur-xl backface-hidden rotate-y-180 overflow-hidden flex flex-col justify-between">
            {/* Top Magnetic Security Stripe */}
            <div className="absolute top-0 left-0 right-0">
              <div className="h-8 w-full bg-slate-950 border-b border-slate-800" />
            </div>

            {/* Header */}
            <div className="mt-6 border-b border-slate-800/80 pb-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
                  RECRUITER PASS
                </span>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 font-mono text-[9px] font-semibold text-emerald-300">
                  ⚡ 30 DAYS NOTICE
                </span>
              </div>
              <p className="mt-1 text-xs font-bold text-white">
                Direct Contact & Quick Verification
              </p>
            </div>

            {/* Contact Actions List */}
            <div className="space-y-2.5 my-auto py-1">
              {/* Phone */}
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-base">📞</span>
                  <div>
                    <span className="text-[9px] font-mono text-slate-400 block uppercase">Phone / Mobile</span>
                    <a href="tel:+918328375393" className="text-xs font-bold text-white hover:text-blue-400 font-mono">
                      +91 8328375393
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => copyText("+918328375393", "Phone number", e)}
                  className="action-btn rounded-lg bg-slate-800 px-2.5 py-1 text-[10px] font-mono font-semibold text-blue-400 hover:bg-slate-700"
                >
                  Copy
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-2.5">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-base">✉️</span>
                  <div className="truncate">
                    <span className="text-[9px] font-mono text-slate-400 block uppercase">Email Address</span>
                    <a href="mailto:rajkudumala81@gmail.com" className="text-xs font-bold text-white hover:text-blue-400 font-mono truncate block">
                      rajkudumala81@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => copyText("rajkudumala81@gmail.com", "Email", e)}
                  className="action-btn rounded-lg bg-slate-800 px-2.5 py-1 text-[10px] font-mono font-semibold text-blue-400 hover:bg-slate-700 shrink-0 ml-2"
                >
                  Copy
                </button>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/918328375393?text=Hi%20Rajendra,%20saw%20your%20portfolio%20and%20profile%20on%20Naukri."
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 py-2.5 text-xs font-bold text-emerald-300 hover:bg-emerald-500/20 transition"
              >
                <span>💬</span> Chat on WhatsApp ↗
              </a>

              {/* Resume Download CTA */}
              <a
                href="/rajendra-prasad-k-4YE.pdf"
                download="Rajendra-Prasad-K-Resume.pdf"
                className="action-btn flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 transition"
              >
                <span>📄</span> Download Resume (PDF) ↓
              </a>
            </div>

            {/* Bottom Signature & Flip Back Note */}
            <div className="border-t border-slate-800/80 pt-2.5">
              <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                <span>📍 BENGALURU, INDIA</span>
                <span>OPEN FOR ROLES</span>
              </div>
              <p className="mt-2 text-center text-[10px] font-mono text-emerald-400 font-semibold animate-pulse">
                ✦ TAP TO FLIP BACK TO FRONT ✦
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Floating Control Helper Buttons */}
      <div className="mt-5 flex items-center gap-2.5 z-20">
        <button
          type="button"
          onClick={() => {
            triggerSwing();
            setIsFlipped(!isFlipped);
          }}
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-1.5 text-xs font-mono font-semibold text-slate-200 shadow-md hover:border-blue-500 hover:text-white transition active:scale-95"
        >
          <span>🔄</span> Flip Card
        </button>

        <button
          type="button"
          onClick={triggerSwing}
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-1.5 text-xs font-mono font-semibold text-blue-400 shadow-md hover:border-blue-500 hover:text-blue-300 transition active:scale-95"
        >
          <span>🪪</span> Swing Badge
        </button>
      </div>
    </div>
  );
}

