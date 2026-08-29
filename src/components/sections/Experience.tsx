import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

const companyLinks: Record<string, string> = {
  "Happiest Minds Technologies Limited": "https://www.happiestminds.com/",
  "PRove IT Catalysts": "https://www.proveitcatalysts.com/",
};

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-slate-800 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="My engineering journey."
          description="Progressing from product development to senior software engineering while building backend and full-stack applications."
        />

        <div className="relative mt-14">
          {/* Timeline */}
          <div className="absolute left-[7px] top-3 hidden h-[calc(100%-24px)] w-px bg-slate-800 md:block" />

          <div className="space-y-8">
            {experience.map((item, index) => {
              const isCurrent = index === 0;
              const companyUrl = companyLinks[item.company];

              return (
                <article
                  key={`${item.company}-${item.period}`}
                  className="group relative md:pl-12"
                >
                  {/* Timeline dot */}
                  <span
                    className={`absolute left-0 top-7 hidden h-4 w-4 rounded-full border-4 border-slate-950 md:block ${
                      isCurrent
                        ? "bg-blue-400 shadow-[0_0_0_5px_rgba(59,130,246,0.10)]"
                        : "bg-slate-600"
                    }`}
                  />

                  <div
                    className={`rounded-2xl border p-6 transition-all duration-300 md:p-8 ${
                      isCurrent
                        ? "border-blue-500/30 bg-blue-500/[0.035] hover:border-blue-500/50"
                        : "border-slate-800 bg-slate-900/30 hover:border-slate-700 hover:bg-slate-900/50"
                    }`}
                  >
                    <div className="grid gap-8 lg:grid-cols-[210px_1fr]">
                      {/* Period */}
                      <div>
                        <div className="flex items-center gap-2">
                          {isCurrent && (
                            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                          )}

                          <p
                            className={`font-mono text-sm font-medium ${
                              isCurrent
                                ? "text-blue-400"
                                : "text-slate-500"
                            }`}
                          >
                            {item.period}
                          </p>
                        </div>

                        <p className="mt-2 text-sm text-slate-500">
                          {item.location}
                        </p>

                        {isCurrent && (
                          <span className="mt-4 inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-green-400">
                            Current Role
                          </span>
                        )}
                      </div>

                      {/* Details */}
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                              {item.role}
                            </h3>

                            {companyUrl ? (
                              <a
                                href={companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1 inline-flex items-center gap-1.5 font-medium text-slate-300 transition-colors hover:text-blue-400"
                              >
                                {item.company}
                                <span className="text-xs opacity-50">
                                  ↗
                                </span>
                              </a>
                            ) : (
                              <p className="mt-1 font-medium text-slate-300">
                                {item.company}
                              </p>
                            )}
                          </div>

                          <span className="hidden font-mono text-xs text-slate-700 sm:block">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <p className="mt-5 max-w-3xl leading-7 text-slate-400">
                          {item.description}
                        </p>

                        {/* Technology stack */}
                        <div className="mt-6">
                          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
                            Technologies
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((technology) => (
                              <Badge key={technology}>
                                {technology}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Career progression */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/20 p-6 md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Career Progression
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                Software Engineer → Senior Software Engineer
              </p>
            </div>

            <a
              href="https://www.happiestminds.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-blue-400 transition-colors hover:text-blue-300"
            >
              Happiest Minds ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}