import { SectionHeading } from "@/components/ui/SectionHeading";

const architectureLayers = [
  {
    number: "01",
    title: "Client & Presentation Layer",
    description:
      "Modern Single Page Applications (Angular 21 & React) and administrative dashboards with role-based auth, real-time data visualisations, and dynamic export engines.",
    technologies: ["React", "Angular 21", "Next.js", "Tailwind CSS", "Highcharts"],
    details: "State management, client caching, responsive mobile interfaces, and schema-driven forms.",
  },
  {
    number: "02",
    title: "API Gateway & Microservices",
    description:
      "Stateless NestJS & Express.js services handling JWT token authentication, route orchestration, schema validation (AJV), rate limiting, and third-party advertising integrations.",
    technologies: ["Node.js", "NestJS", "TypeScript", "Express", "JWT", "AJV", "Swagger"],
    details: "Strict RESTful standards, automated OpenAPI specs, request interceptors, and robust error middleware.",
  },
  {
    number: "03",
    title: "Data Warehousing & Persistence",
    description:
      "Optimized PostgreSQL & Aurora relational databases for transactional safety, combined with Snowflake data warehouses for heavy analytical aggregations and historical data reporting.",
    technologies: ["PostgreSQL", "Aurora", "Snowflake", "MongoDB", "Redis", "pgvector"],
    details: "Index tuning, query execution plan optimization (-35% latency), connection pooling, and automated ETL.",
  },
  {
    number: "04",
    title: "Asynchronous Workers & Cloud",
    description:
      "Decoupled asynchronous queue processing using AWS SQS and RabbitMQ to generate complex multi-format documents (PDF, Excel, PPTX) and manage scheduled cron workflows without blocking API threads.",
    technologies: ["AWS S3", "AWS SQS", "Docker", "RabbitMQ", "Cron", "PDFMake", "ExcelJS"],
    details: "Background retry mechanisms, pre-signed cloud uploads, distributed logging, and containerized deployments.",
  },
];

const principles = [
  {
    title: "Scalability & Modularization",
    description: "Decoupled microservices architecture ensuring independent scaling and zero ripple-effect failures.",
  },
  {
    title: "Performance & Low Latency",
    description: "Aggressive database indexing, efficient SQL query design, and Redis caching for sub-50ms critical responses.",
  },
  {
    title: "Reliability & Fault Tolerance",
    description: "Queue-backed async workloads, graceful error boundaries, and structured health-check endpoints.",
  },
  {
    title: "AI-Augmented Velocity",
    description: "Deterministic LLM API integration with Zod validation and continuous automated test verification.",
  },
];

export function Architecture() {
  return (
    <section id="architecture" className="border-t border-slate-800/80 bg-slate-950/40 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="System Design"
          title="Architectural thinking & scalable systems."
          description="How I structure end-to-end applications to deliver high throughput, maintainable codebases, and production resilience."
        />

        {/* 4-Layer Architecture Pipeline */}
        <div className="relative mt-12">
          <div className="space-y-6">
            {architectureLayers.map((layer) => (
              <div
                key={layer.number}
                className="group relative grid gap-6 rounded-3xl border border-slate-800/80 bg-gradient-to-r from-slate-900/60 to-[#070d1e] p-6 sm:p-8 transition duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 md:grid-cols-[70px_1fr]"
              >
                {/* Number Badge */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10 font-mono text-lg font-bold text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition">
                  {layer.number}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight sm:text-2xl">
                    {layer.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-300">
                    {layer.description}
                  </p>

                  <p className="mt-2 text-xs text-slate-400 font-mono">
                    ✦ {layer.details}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {layer.technologies.map((tech) => (
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
            ))}
          </div>
        </div>

        {/* Engineering Principles */}
        <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-md">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            Core Engineering Principles
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <div key={principle.title} className="border-t border-slate-800 pt-4">
                <p className="font-bold text-white text-sm sm:text-base">
                  {principle.title}
                </p>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}