import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

const corePillars = [
  {
    icon: "⚙️",
    title: "Full Stack & Backend Depth",
    description:
      "4+ years architecting scalable Node.js, NestJS, and TypeScript microservices alongside responsive React and Angular client interfaces with clean, modular patterns.",
  },
  {
    icon: "🗄️",
    title: "Database & Query Mastery",
    description:
      "Expertise in relational database optimization (PostgreSQL, Aurora), massive analytical pipelines (Snowflake), and schema integrity that reduces latency and cost.",
  },
  {
    icon: "☁️",
    title: "Cloud & Message Architecture",
    description:
      "Hands-on experience deploying containerized services with Docker, utilizing AWS S3/SQS for asynchronous task decoupling and bulletproof reliability.",
  },
  {
    icon: "🤖",
    title: "AI-Accelerated Engineering",
    description:
      "Actively applying modern AI workflows—integrating LLMs via structured API pipelines, RAG with vector search, and leveraging Claude Code & Copilot for rapid delivery.",
  },
];

const highlights = [
  { label: "Current Company", value: "Happiest Minds Technologies" },
  { label: "Total Experience", value: "4+ Years (2021 – Present)" },
  { label: "Current Role", value: "Senior Software Engineer" },
  { label: "Location", value: "Bengaluru, India (Open to Hybrid/Remote)" },
  { label: "Notice Period", value: "Immediate / 30 Days" },
  { label: "Education", value: "B.Tech in ECE (2017 – 2021)" },
];

export function About() {
  return (
    <section id="about" className="border-t border-slate-800/80 bg-slate-950/40 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering scalable systems with speed, depth & AI."
          description="A senior full-stack engineer who bridges architectural precision, backend resilience, and modern AI acceleration to ship enterprise-grade products."
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          {/* Left Story */}
          <div className="space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="text-xl font-semibold text-white leading-relaxed">
              I specialize in designing and shipping production-grade full-stack and backend systems that handle heavy data loads, complex business logic, and mission-critical workflows.
            </p>

            <p>
              Over the last 4+ years at <strong className="text-white">Happiest Minds Technologies</strong> and <strong className="text-white">PRove IT Catalysts</strong>, I've progressed from building foundational REST APIs to architecting complete enterprise platforms across <strong className="text-blue-400">Healthcare (WebMD Ignite)</strong> and <strong className="text-blue-400">AdTech (Marketron)</strong>.
            </p>

            <p>
              My engineering philosophy focuses on three tenets: <em>writing maintainable, test-backed code (Jest)</em>; <em>eliminating database and API bottlenecks</em>; and <em>harnessing modern AI tools (Claude Code, GitHub Copilot, RAG pipelines)</em> to shorten development cycles while upholding the highest quality standards.
            </p>

            {/* Quick Profile Factsheet */}
            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md">
              <p className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                Recruiter Factsheet
              </p>
              <div className="grid gap-3.5 sm:grid-cols-2 text-sm">
                {highlights.map((item) => (
                  <div key={item.label} className="border-b border-slate-800/60 pb-2.5">
                    <span className="text-xs text-slate-400 block">{item.label}</span>
                    <span className="font-semibold text-slate-100">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Core Pillars */}
          <div className="grid gap-4 sm:grid-cols-2">
            {corePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <span className="text-3xl block mb-4">{pillar.icon}</span>
                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                  {pillar.description}
                </p>
              </div>
            ))}

            {/* AI Workflow Card */}
            <div className="sm:col-span-2 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                    AI-AUGMENTED WORKFLOW
                  </span>
                  <h4 className="mt-1 text-base font-bold text-white">
                    40% Faster Sprint Delivery with AI Tooling
                  </h4>
                  <p className="mt-1 text-xs text-slate-300 max-w-xl">
                    Using Claude Code, GitHub Copilot, and LLMs for automated boilerplate, edge-case generation, and deep debugging while maintaining full architectural ownership.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 shrink-0">
                  <Badge variant="primary">Claude Code</Badge>
                  <Badge variant="primary">Copilot</Badge>
                  <Badge variant="primary">ChatGPT</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}