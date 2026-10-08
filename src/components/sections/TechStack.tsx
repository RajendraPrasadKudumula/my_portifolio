"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

export function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="tech-stack" className="border-t border-slate-800/80 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Skills & Technologies"
            title="Production-tested tech stack."
            description="Proven expertise across full-stack engineering, scalable backend microservices, high-throughput databases, cloud infrastructure, and AI engineering."
          />

          {/* Quick Filter Pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-mono font-medium transition ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-xl px-3 py-1.5 text-xs font-mono font-medium transition ${
                  selectedCategory === cat.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                {cat.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                category.featured
                  ? "border-blue-500/30 bg-gradient-to-b from-blue-950/20 via-slate-900/60 to-slate-900/80 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5"
                  : "border-slate-800/80 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900/80"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition">
                  {category.title}
                </h3>
                {category.featured && (
                  <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-blue-400 border border-blue-500/20">
                    CORE
                  </span>
                )}
              </div>

              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {category.tagline}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
                      skill.primary
                        ? "border border-blue-500/30 bg-blue-500/10 text-blue-200 font-semibold hover:border-blue-500/60"
                        : "border border-slate-800 bg-slate-950/80 text-slate-300 hover:border-slate-700 hover:text-white"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}