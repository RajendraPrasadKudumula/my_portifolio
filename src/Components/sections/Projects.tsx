import { Badge } from "@/components/ui/Badge";
import { Card } from "@/Components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/Data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-800 bg-slate-900/30 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Real-world systems I've built and contributed to."
          description="Professional engineering experience across healthcare, AdTech and food-tech, with a focus on backend systems, full-stack applications, APIs, microservices and cloud infrastructure."
        />

        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                project.featured
                  ? "border-blue-500/30 bg-blue-500/[0.025] hover:border-blue-500/50"
                  : "hover:border-slate-700"
              }`}
            >
              {/* Header */}
              <div className="border-b border-slate-800 p-6 md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
                        {project.category}
                      </span>

                      {project.featured && (
                        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-blue-400">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      {project.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-500">
                      <span>{project.company}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{project.duration}</span>
                    </div>

                    <p className="mt-5 max-w-4xl leading-7 text-slate-400">
                      {project.description}
                    </p>
                  </div>

                  <span className="shrink-0 font-mono text-xs text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                {/* Engineering */}
                <div className="p-6 md:p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                    Engineering Highlights
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-xl border border-slate-800 bg-slate-950/40 p-4 transition-colors duration-200 hover:border-blue-500/20"
                      >
                        <div className="flex gap-3">
                          <span className="mt-0.5 text-sm text-blue-400">
                            ✓
                          </span>

                          <span className="text-sm leading-6 text-slate-300">
                            {highlight}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stack */}
                  <div className="mt-8">
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                      Technology Stack
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <Badge key={technology}>{technology}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Architecture */}
                <div className="border-t border-slate-800 bg-slate-950/50 p-6 md:p-8 lg:border-l lg:border-t-0">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                      Technical Flow
                    </p>

                    <span className="font-mono text-xs text-slate-700">
                      ARCH
                    </span>
                  </div>

                  <div className="mt-6 space-y-2">
                    {project.architecture.map((step, stepIndex) => (
                      <div key={step}>
                        <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 transition-all duration-200 hover:border-blue-500/30 hover:bg-slate-900">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-500/10 font-mono text-xs font-medium text-blue-400">
                            {String(stepIndex + 1).padStart(2, "0")}
                          </span>

                          <span className="text-sm font-medium text-slate-300">
                            {step}
                          </span>
                        </div>

                        {stepIndex < project.architecture.length - 1 && (
                          <div className="ml-7 h-2 border-l border-dashed border-slate-700" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                    <p className="text-xs leading-6 text-slate-500">
                      High-level representation of the major technical
                      components and data flow.
                    </p>
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