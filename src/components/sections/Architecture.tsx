import { SectionHeading } from "@/components/ui/SectionHeading";

const architectureLayers = [
  {
    number: "01",
    title: "Client Layer",
    description: "Web, mobile and external clients communicate through secure APIs.",
    technologies: ["Web", "Mobile", "REST"],
  },
  {
    number: "02",
    title: "API Layer",
    description:
      "Application services handle authentication, validation, business logic and API orchestration.",
    technologies: ["Node.js", "NestJS", "TypeScript"],
  },
  {
    number: "03",
    title: "Data & Messaging",
    description:
      "Persistent storage and asynchronous messaging support reliable application workflows.",
    technologies: ["PostgreSQL", "MongoDB", "AWS SQS"],
  },
  {
    number: "04",
    title: "Cloud & Infrastructure",
    description:
      "Containerized services and cloud infrastructure provide deployment and scalability.",
    technologies: ["AWS", "Docker", "S3"],
  },
];

export function Architecture() {
  return (
    <section className="border-t border-slate-800 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="System Architecture"
          title="Thinking beyond individual APIs."
          description="I approach backend systems by considering scalability, reliability, data flow, asynchronous processing and maintainability."
        />

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[27px] top-8 hidden h-[calc(100%-64px)] w-px bg-slate-800 md:block" />

          <div className="space-y-6">
            {architectureLayers.map((layer) => (
              <div
                key={layer.number}
                className="relative grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-blue-500/30 md:grid-cols-[56px_1fr]"
              >
                {/* Number */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-950 font-mono text-sm text-blue-400">
                  {layer.number}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {layer.title}
                  </h3>

                  <p className="mt-2 max-w-3xl leading-7 text-slate-400">
                    {layer.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {layer.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-slate-800 px-3 py-1.5 font-mono text-xs text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Principles */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Engineering Principles
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Clean Architecture",
              "Scalable APIs",
              "Reliable Messaging",
              "Observable Systems",
            ].map((principle) => (
              <div key={principle}>
                <p className="font-medium text-white">{principle}</p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Designed with maintainability and production reliability
                  in mind.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}