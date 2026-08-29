"use client";

import { useState } from "react";
import { Button } from "@/Components/ui/Button";
import { Badge } from "@/components/ui/Badge";

type TerminalTab = "profile" | "skills" | "impact";

const terminalTabs: { id: TerminalTab; label: string }[] = [
  { id: "profile", label: "profile" },
  { id: "skills", label: "skills" },
  { id: "impact", label: "impact" },
];

export function Hero() {
  const [activeTab, setActiveTab] =
    useState<TerminalTab>("profile");

  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl -translate-y-4 items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* LEFT */}
        <div className="animate-fade-up">

          {/* Availability */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />

            <span className="text-sm text-slate-400">
              Open to Fullstack Engineering opportunities
            </span>
          </div>

          {/* Role */}
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Senior Software Engineer
          </p>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building full-stack systems
            <span className="block text-blue-500">
              with AI at the core.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Full Stack Developer specializing in Node.js, TypeScript,
            NestJS, React, PostgreSQL and AWS — using AI tools like
            Claude, GitHub Copilot and ChatGPT to design, build, test
            and ship software faster.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#projects">
              View My Work →
            </Button>

            <Button href="#contact" variant="secondary">
              Let's Connect →
            </Button>
          </div>

          {/* Technologies */}
          <div className="mt-10 space-y-4">

            {/* Core */}
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                Core Engineering
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge>Node.js</Badge>
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>NestJS</Badge>
                <Badge>Express</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>MongoDB</Badge>
              </div>
            </div>

            {/* Full Stack & Cloud */}
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                Full Stack & Cloud
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>Angular</Badge>
                <Badge>AWS</Badge>
                <Badge>S3</Badge>
                <Badge>SQS</Badge>
                <Badge>Docker</Badge>
                <Badge>REST APIs</Badge>
                <Badge>Microservices</Badge>
              </div>
            </div>

            {/* AI */}
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-blue-400">
                AI Engineering
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge>Claude</Badge>
                <Badge>GitHub Copilot</Badge>
                <Badge>OpenAI</Badge>
                <Badge>LLM</Badge>
                <Badge>RAG</Badge>
                <Badge>Vector DB</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — INTERACTIVE TERMINAL */}
        <div className="relative mx-auto w-full max-w-lg animate-terminal-enter">

          {/* Main terminal */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl backdrop-blur">

            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />

              <span className="ml-3 truncate font-mono text-xs text-slate-500">
                Rajendra Prasad Kudumula ~
              </span>
            </div>

            {/* Terminal tabs */}
            <div className="flex gap-2 overflow-x-auto border-b border-slate-800 px-5 py-3">
              {terminalTabs.map((tab) => {
                const active = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-md px-3 py-1.5 font-mono text-xs transition ${
                      active
                        ? "bg-blue-500 text-white"
                        : "text-slate-500 hover:bg-slate-800 hover:text-slate-200"
                    }`}
                  >
                    $ {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Terminal content */}
            <div className="min-h-[350px] p-6 font-mono text-sm leading-7">

              {/* PROFILE */}
              {activeTab === "profile" && (
                <div className="animate-fade-in">
                  <p className="text-blue-400">
                    $ profile
                  </p>

                  <div className="mt-6 space-y-3">
                    <div>
                      <span className="text-slate-500">
                        name:
                      </span>{" "}
                      <span className="text-green-400">
                        "Rajendra Prasad Kudumula"
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-500">
                        role:
                      </span>{" "}
                      <span className="text-green-400">
                        "Senior Software Engineer"
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-500">
                        experience:
                      </span>{" "}
                      <span className="text-yellow-300">
                        "4+ years"
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-500">
                        focus:
                      </span>{" "}
                      <span className="text-green-400">
                        "Fullstack + AI"
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-500">
                        location:
                      </span>{" "}
                      <span className="text-green-400">
                        "Bengaluru"
                      </span>
                    </div>
                  </div>

                  <div className="mt-7 border-t border-slate-800 pt-5">
                    <span className="text-green-400">
                      ●
                    </span>{" "}
                    <span className="text-slate-300">
                      Open to Fullstack Engineering opportunities
                    </span>
                  </div>
                </div>
              )}

              {/* SKILLS */}
              {activeTab === "skills" && (
                <div className="animate-fade-in">
                  <p className="text-blue-400">
                    $ skills
                  </p>

                  <div className="mt-6 space-y-4">
                    <Skill
                      name="Node.js"
                      level="██████████"
                    />

                    <Skill
                      name="TypeScript"
                      level="██████████"
                    />

                    <Skill
                      name="NestJS"
                      level="█████████"
                    />

                    <Skill
                      name="PostgreSQL"
                      level="█████████"
                    />

                    <Skill
                      name="AWS"
                      level="████████"
                    />

                    <Skill
                      name="AI / LLM"
                      level="███████"
                    />
                  </div>
                </div>
              )}

              {/* IMPACT */}
              {activeTab === "impact" && (
                <div className="animate-fade-in">
                  <p className="text-blue-400">
                    $ impact
                  </p>

                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="text-slate-200">
                        → API Engineering
                      </p>

                      <p className="text-xs leading-6 text-slate-500">
                        Reliable REST APIs and backend services
                      </p>
                    </div>

                    <div>
                      <p className="text-slate-200">
                        → Scalable Systems
                      </p>

                      <p className="text-xs leading-6 text-slate-500">
                        Microservices, async processing and queues
                      </p>
                    </div>

                    <div>
                      <p className="text-slate-200">
                        → Data Engineering
                      </p>

                      <p className="text-xs leading-6 text-slate-500">
                        PostgreSQL, MongoDB and query optimization
                      </p>
                    </div>

                    <div>
                      <p className="text-slate-200">
                        → AI Integration
                      </p>

                      <p className="text-xs leading-6 text-slate-500">
                        LLMs, RAG pipelines and vector databases
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Terminal footer */}
            <div className="border-t border-slate-800 px-6 py-3">
              <span className="font-mono text-xs text-slate-600">
                interactive-profile • ready
              </span>
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-slate-800 bg-slate-900 px-5 py-4 shadow-xl sm:block">
            <p className="text-xs text-slate-500">
              Currently focused on
            </p>

            <p className="mt-1 text-sm font-semibold text-white">
              Scalable Backend + AI
            </p>
          </div>

          {/* Floating badge */}
          <div className="absolute -right-5 -top-5 hidden rounded-xl border border-blue-500/20 bg-slate-900 px-5 py-4 shadow-xl sm:block">
            <p className="text-xs text-slate-500">
              Core Stack
            </p>

            <p className="mt-1 text-sm font-semibold text-blue-400">
              Node.js + NestJS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable skill row */
function Skill({
  name,
  level,
}: {
  name: string;
  level: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="min-w-24 text-slate-400">
        {name}
      </span>

      <span className="text-blue-400">
        {level}
      </span>
    </div>
  );
}