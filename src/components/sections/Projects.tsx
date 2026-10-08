"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

type CategoryFilter = "all" | "fullstack" | "backend" | "ai";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="border-t border-slate-800/80 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Enterprise Projects"
            title="Systems built for scale & impact."
            description="Mission-critical healthcare, AdTech, and AI platforms architected with high-concurrency microservices, clean APIs, and modern frontends."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {[
              { id: "all", label: "All Projects" },
              { id: "fullstack", label: "Full Stack" },
              { id: "backend", label: "Backend & Cloud" },
              { id: "ai", label: "AI & RAG" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id as CategoryFilter)}
                className={`rounded-xl px-4 py-2 text-xs font-mono font-medium transition ${
                  activeCategory === tab.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`overflow-hidden transition-all duration-300 ${
                project.featured
                  ? "border-blue-500/30 bg-gradient-to-br from-blue-950/20 via-slate-900/80 to-[#070d1e] shadow-xl shadow-blue-500/5 hover:border-blue-500/50"
                  : "hover:border-slate-700"
              }`}
            >
              {/* Card Header */}
              <div className="border-b border-slate-800/80 p-6 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-400">
                        {project.categoryLabel}
                      </span>
                      {project.featured && (
                        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-blue-300">
                          Featured System
                        </span>
                      )}
                    </div>

                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-300">
                      {project.subtitle}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                      <span>🏢 {project.company}</span>
                      <span>•</span>
                      <span>📅 {project.duration}</span>
                    </div>

                    <p className="mt-4 max-w-4xl text-sm sm:text-base leading-relaxed text-slate-300">
                      {project.description}
                    </p>
                  </div>

                  <span className="shrink-0 font-mono text-xs font-bold text-slate-500 bg-slate-800/60 px-3 py-1.5 rounded-lg w-fit">
                    PROJ #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Key Metrics Strip */}
                {project.keyMetrics && project.keyMetrics.length > 0 && (
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {project.keyMetrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-3"
                      >
                        <span className="text-base font-bold text-blue-400 font-mono sm:text-lg">
                          {metric.value}
                        </span>
                        <span className="block text-[11px] font-medium text-slate-400 mt-0.5">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Body (Two Columns: Highlights & Technical Architecture) */}
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                {/* Left: Engineering Deliverables */}
                <div className="p-6 md:p-8">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Key Technical Accomplishments
                  </p>

                  <div className="mt-4 space-y-2.5">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="mt-0.5 text-blue-400 shrink-0">✓</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-7">
                    <p className="mb-3 text-xs font-mono uppercase tracking-wider text-slate-500">
                      Technologies & Tools
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-xs font-mono text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Technical Flow Architecture */}
                <div className="border-t border-slate-800/80 bg-[#070c1a]/60 p-6 md:p-8 lg:border-l lg:border-t-0">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                      System Architecture Flow
                    </p>
                    <span className="font-mono text-[10px] text-slate-500">ENGINEERING DESIGN</span>
                  </div>

                  <div className="mt-5 space-y-3">
                    {project.architecture.map((arch, stepIdx) => (
                      <div
                        key={arch.step}
                        className="rounded-xl border border-slate-800/90 bg-slate-900/60 p-3"
                      >
                        <div className="flex items-center gap-2">
                          <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-500/20 font-mono text-[10px] font-bold text-blue-400">
                            {stepIdx + 1}
                          </span>
                          <span className="font-semibold text-xs text-white">
                            {arch.step}
                          </span>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-slate-400 pl-7">
                          {arch.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}