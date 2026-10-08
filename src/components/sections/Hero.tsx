"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { InteractiveIDCard } from "@/components/ui/InteractiveIDCard";

type HeroViewMode = "id-card" | "architecture";
type ShowcaseTab = "architecture" | "stack" | "metrics" | "ai";

export function Hero() {
  const [viewMode, setViewMode] = useState<HeroViewMode>("id-card");
  const [activeTab, setActiveTab] = useState<ShowcaseTab>("architecture");
  const [copied, setCopied] = useState(false);

  const copyPhone = () => {
    navigator.clipboard.writeText("+918328375393");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-12 lg:pb-28">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute right-10 top-40 -z-10 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT COLUMN: Recruiter Pitch & Quick Actions */}
        <div className="animate-fade-up">
          {/* Availability & Notice Period Badge */}
          <div className="mb-5 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Full Stack / Backend Roles
            </span>
            <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xs font-mono text-slate-300">
              ⚡ Notice: Immediate / 30 Days
            </span>
          </div>

          {/* Role Eyebrow */}
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400 font-mono">
            Senior Software Engineer • 4+ Years Experience
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
            Architecting <span className="gradient-text-blue">resilient backends</span> and full-stack systems.
          </h1>

          {/* Recruiter Summary Paragraph */}
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl">
            Senior Software Engineer at <strong className="text-white">Happiest Minds Technologies</strong> specializing in{" "}
            <span className="text-blue-400 font-medium">Node.js, NestJS, TypeScript, React, PostgreSQL & AWS</span>. Proven experience scaling enterprise microservices, optimizing database latency, and integrating AI-accelerated development workflows.
          </p>

          {/* Direct Recruiter Contact Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-300">
            <button
              type="button"
              onClick={copyPhone}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700/80 bg-slate-900/80 px-3.5 py-2 hover:border-blue-500 hover:text-white transition"
              title="Click to copy phone"
            >
              <span>📞</span>
              <span className="font-mono font-medium">+91 8328375393</span>
              <span className="text-[10px] text-blue-400">{copied ? "✓ Copied!" : "Copy"}</span>
            </button>

            <a
              href="mailto:rajkudumala81@gmail.com"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700/80 bg-slate-900/80 px-3.5 py-2 hover:border-blue-500 hover:text-white transition"
            >
              <span>✉️</span>
              <span className="font-mono font-medium">rajkudumala81@gmail.com</span>
            </a>

            <span className="inline-flex items-center gap-1 text-slate-400">
              <span>📍</span> Bengaluru, India
            </span>
          </div>

          {/* Main Action CTAs */}
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="/rajendra-prasad-k-4YE.pdf"
              download="Rajendra-Prasad-K-Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 active:scale-95"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume (PDF)
            </a>

            <a
              href="https://wa.me/918328375393?text=Hi%20Rajendra,%20saw%20your%20portfolio%20and%20profile%20on%20Naukri."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3.5 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20 transition active:scale-95"
            >
              <span>💬</span> WhatsApp Me
            </a>

            <Button href="#projects" variant="secondary" size="md">
              View Work →
            </Button>
          </div>

          {/* Quick Stack Badges */}
          <div className="mt-9 border-t border-slate-800/80 pt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
              Core Engineering Stack
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">Node.js</Badge>
              <Badge variant="primary">NestJS</Badge>
              <Badge variant="primary">TypeScript</Badge>
              <Badge variant="primary">PostgreSQL</Badge>
              <Badge variant="default">React</Badge>
              <Badge variant="default">Angular</Badge>
              <Badge variant="default">AWS S3 / SQS</Badge>
              <Badge variant="default">Snowflake</Badge>
              <Badge variant="purple">AI / LLM / RAG</Badge>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive 3D Swinging ID Card / Architecture View */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none animate-fade-in flex flex-col items-center">
          {/* Top Toggle Switcher: ID Card vs System Specs */}
          <div className="mb-4 flex items-center gap-1.5 rounded-2xl border border-slate-800 bg-slate-900/90 p-1.5 shadow-lg backdrop-blur-md">
            <button
              type="button"
              onClick={() => setViewMode("id-card")}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-mono font-semibold transition ${
                viewMode === "id-card"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>🪪</span> 3D Engineer Badge
            </button>

            <button
              type="button"
              onClick={() => setViewMode("architecture")}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-mono font-semibold transition ${
                viewMode === "architecture"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>⚡</span> System Architecture
            </button>
          </div>

          {/* VIEW 1: INTERACTIVE 3D FLOATING & SWINGING ID CARD */}
          {viewMode === "id-card" && (
            <div className="w-full flex flex-col items-center animate-fade-in py-2">
              <InteractiveIDCard />
            </div>
          )}

          {/* VIEW 2: ENTERPRISE SYSTEM ARCHITECTURE CARD */}
          {viewMode === "architecture" && (
            <div className="relative w-full overflow-hidden rounded-3xl border border-slate-800 bg-[#0a1022]/90 shadow-2xl shadow-blue-500/5 backdrop-blur-xl animate-fade-in">
              {/* Header / Tabs */}
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3.5 bg-slate-950/60">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">system-overview.ts</span>
                </div>

                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-400">
                  PROD READY
                </span>
              </div>

              {/* Tab Selectors */}
              <div className="flex overflow-x-auto border-b border-slate-800/80 px-4 py-2 bg-slate-900/40 gap-1.5">
                {[
                  { id: "architecture", label: "Architecture Flow" },
                  { id: "stack", label: "Production Stack" },
                  { id: "metrics", label: "Key Metrics" },
                  { id: "ai", label: "AI Integration" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as ShowcaseTab)}
                    className={`rounded-lg px-3 py-1.5 font-mono text-xs transition ${
                      activeTab === tab.id
                        ? "bg-blue-600/30 text-blue-300 border border-blue-500/40 font-semibold"
                        : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content Area */}
              <div className="min-h-[380px] p-6 text-xs sm:text-sm">
                {/* TAB 1: ARCHITECTURE */}
                {activeTab === "architecture" && (
                  <div className="space-y-4 animate-fade-in font-mono">
                    <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800/60">
                      <span>WebMD Ignite & Microservices Flow</span>
                      <span className="text-blue-400">4-Tier System</span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-500/20 font-bold text-blue-400 text-xs">
                          01
                        </span>
                        <div>
                          <p className="font-semibold text-white">Client UI & Admin Dashboard</p>
                          <p className="text-xs text-slate-400 font-sans">Angular 21 / React + Role-Based Access Control + Analytics</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-xl border border-blue-500/30 bg-blue-500/5 p-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-500/30 font-bold text-blue-300 text-xs">
                          02
                        </span>
                        <div>
                          <p className="font-semibold text-blue-300">NestJS / Node.js Microservices</p>
                          <p className="text-xs text-slate-300 font-sans">25+ REST APIs, JWT Auth, Google & Meta Ads integrations</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-cyan-500/20 font-bold text-cyan-400 text-xs">
                          03
                        </span>
                        <div>
                          <p className="font-semibold text-white">Data & Analytics Storage Tier</p>
                          <p className="text-xs text-slate-400 font-sans">PostgreSQL (Indexed, &lt;50ms) + Snowflake (500K+ daily ETL)</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-purple-500/20 font-bold text-purple-400 text-xs">
                          04
                        </span>
                        <div>
                          <p className="font-semibold text-white">Async Message Queues & Cloud</p>
                          <p className="text-xs text-slate-400 font-sans">AWS SQS / S3 / Docker + Cron batch workers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: STACK */}
                {activeTab === "stack" && (
                  <div className="space-y-4 animate-fade-in font-mono">
                    <p className="text-xs text-slate-400 pb-2 border-b border-slate-800/60">
                      Production Stack Breakdown
                    </p>

                    <div className="grid grid-cols-2 gap-3 font-sans">
                      <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3">
                        <span className="font-mono text-xs text-blue-400 font-semibold">BACKEND</span>
                        <p className="mt-1 text-sm font-bold text-white">Node.js • NestJS • Express</p>
                        <p className="mt-1 text-xs text-slate-400">TypeScript, REST, Microservices</p>
                      </div>

                      <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3">
                        <span className="font-mono text-xs text-cyan-400 font-semibold">DATABASE</span>
                        <p className="mt-1 text-sm font-bold text-white">PostgreSQL • Snowflake</p>
                        <p className="mt-1 text-xs text-slate-400">MongoDB, Redis, Indexing</p>
                      </div>

                      <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3">
                        <span className="font-mono text-xs text-emerald-400 font-semibold">FRONTEND</span>
                        <p className="mt-1 text-sm font-bold text-white">React • Angular 21</p>
                        <p className="mt-1 text-xs text-slate-400">Next.js, Tailwind, Highcharts</p>
                      </div>

                      <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3">
                        <span className="font-mono text-xs text-purple-400 font-semibold">CLOUD & AI</span>
                        <p className="mt-1 text-sm font-bold text-white">AWS • Docker • RAG</p>
                        <p className="mt-1 text-xs text-slate-400">Claude Code, Copilot, pgvector</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: METRICS */}
                {activeTab === "metrics" && (
                  <div className="space-y-3 animate-fade-in">
                    <p className="text-xs text-slate-400 pb-2 border-b border-slate-800/60 font-mono">
                      Quantified Senior Engineering Impact
                    </p>

                    <div className="space-y-2.5">
                      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-white">Query Latency Optimization</span>
                          <span className="font-mono font-bold text-emerald-400">-35% Response Time</span>
                        </div>
                        <p className="mt-1 text-xs text-slate-400">Optimized PostgreSQL relational schemas, execution plans & connection pools.</p>
                      </div>

                      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-white">Manual Reporting Automation</span>
                          <span className="font-mono font-bold text-blue-400">70% Overhead Cut</span>
                        </div>
                        <p className="mt-1 text-xs text-slate-400">Replaced manual AdTech client reporting with automated queue-backed export engine.</p>
                      </div>

                      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-white">Data Pipeline Scalability</span>
                          <span className="font-mono font-bold text-purple-400">500K+ Records/Day</span>
                        </div>
                        <p className="mt-1 text-xs text-slate-400">Snowflake ETL scheduled processing for healthcare marketing analytics.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: AI INTEGRATION */}
                {activeTab === "ai" && (
                  <div className="space-y-3 animate-fade-in">
                    <p className="text-xs text-slate-400 pb-2 border-b border-slate-800/60 font-mono">
                      AI-Augmented Engineering Practice
                    </p>

                    <div className="space-y-2.5">
                      <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-3">
                        <p className="font-semibold text-purple-300">LLM API Integration & Structured Parsing</p>
                        <p className="mt-1 text-xs text-slate-300">Zod runtime schema validation guaranteeing deterministic JSON responses from Claude & OpenAI APIs.</p>
                      </div>

                      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                        <p className="font-semibold text-white">RAG (Retrieval-Augmented Generation)</p>
                        <p className="mt-1 text-xs text-slate-400">Semantic search with pgvector/embeddings to augment context for enterprise queries.</p>
                      </div>

                      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                        <p className="font-semibold text-white">AI-Assisted Development Velocity</p>
                        <p className="mt-1 text-xs text-slate-400">Accelerated unit testing, edge case detection, and API boilerplate using Claude Code and Copilot.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between border-t border-slate-800 px-5 py-3 bg-slate-950/60 font-mono text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Happiest Minds Technologies</span>
                </span>
                <a href="#projects" className="text-blue-400 hover:text-blue-300">
                  Explore Case Studies →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}