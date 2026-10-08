import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-t border-slate-800/80 bg-slate-950/40 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Work Experience"
          title="Engineering journey & leadership."
          description="4+ years of proven growth from Product Developer to Senior Software Engineer, building mission-critical backend systems, APIs, and cloud microservices."
        />

        <div className="relative mt-12">
          {/* Vertical Timeline Guide */}
          <div className="absolute left-[15px] top-4 hidden h-[calc(100%-40px)] w-0.5 bg-gradient-to-b from-blue-500 via-blue-900 to-slate-800 md:block" />

          <div className="space-y-10">
            {experience.map((item, index) => {
              const isCurrent = index === 0;

              return (
                <article
                  key={`${item.company}-${item.period}`}
                  className="group relative md:pl-12"
                >
                  {/* Timeline Node */}
                  <span
                    className={`absolute left-0 top-7 hidden h-8 w-8 items-center justify-center rounded-full border-4 border-[#050811] md:flex ${
                      isCurrent
                        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/40"
                        : "bg-slate-700 text-slate-300"
                    }`}
                  >
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </span>

                  <div
                    className={`rounded-3xl border p-6 transition-all duration-300 md:p-8 ${
                      isCurrent
                        ? "border-blue-500/40 bg-gradient-to-br from-blue-950/25 via-slate-900/80 to-[#070d1e] shadow-xl shadow-blue-500/5 hover:border-blue-500/60"
                        : "border-slate-800/80 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/70"
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="text-xl font-bold text-white sm:text-2xl tracking-tight">
                            {item.role}
                          </h3>
                          {item.badge && (
                            <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-0.5 text-xs font-semibold text-blue-300">
                              ★ {item.badge}
                            </span>
                          )}
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Current Role
                            </span>
                          )}
                        </div>

                        <div className="mt-1.5 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                          <span className="font-semibold text-slate-200">
                            {item.company}
                          </span>
                          <span>•</span>
                          <span className="text-slate-400">📍 {item.location}</span>
                        </div>
                      </div>

                      <div className="font-mono text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-xl w-fit">
                        {item.period}
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                      {item.summary}
                    </p>

                    {/* Quantified Metrics Ribbon */}
                    {item.metrics && item.metrics.length > 0 && (
                      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {item.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-xl border border-slate-800/80 bg-slate-950/70 p-3"
                          >
                            <span className="text-lg font-extrabold text-blue-400 font-mono sm:text-xl">
                              {metric.value}
                            </span>
                            <span className="block text-[11px] font-medium text-slate-400 mt-0.5">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Bullet Highlights */}
                    <div className="mt-6 space-y-2.5">
                      <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        Key Engineering Deliverables & Impact
                      </p>
                      {item.highlights.map((point) => (
                        <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <span className="mt-1 text-blue-400 shrink-0">▸</span>
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-6 border-t border-slate-800/60 pt-4">
                      <p className="mb-2.5 text-xs font-mono uppercase tracking-wider text-slate-500">
                        Technologies Applied
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-xs font-mono text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}