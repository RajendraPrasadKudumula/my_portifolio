import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const capabilities = [
  {
    number: "01",
    title: "AI-Assisted Development",
    description:
      "Using Claude Code, GitHub Copilot and ChatGPT throughout the development lifecycle for code analysis, implementation, debugging, testing, documentation and edge-case validation.",
    technologies: [
      "Claude Code",
      "GitHub Copilot",
      "ChatGPT",
      "Prompt Engineering",
    ],
  },
  {
    number: "02",
    title: "LLM Integration",
    description:
      "Integrating large language models into backend applications through APIs, structured prompts, response validation and application-level workflows.",
    technologies: [
      "LLM APIs",
      "Structured Output",
      "Prompt Engineering",
      "API Integration",
    ],
  },
  {
    number: "03",
    title: "RAG & Vector Search",
    description:
      "Exploring retrieval-augmented generation workflows that connect application data with LLMs to build context-aware AI experiences.",
    technologies: [
      "RAG",
      "Embeddings",
      "Vector Databases",
      "Semantic Search",
    ],
  },
  {
    number: "04",
    title: "AI Backend Engineering",
    description:
      "Designing backend services that connect AI models with APIs, databases and business logic to create practical AI-powered applications.",
    technologies: [
      "Node.js",
      "NestJS",
      "Python",
      "FastAPI",
      "PostgreSQL",
    ],
  },
];

export function AIEngineering() {
  return (
    <section
      id="ai"
      className="border-t border-slate-800 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="AI Engineering"
          title="AI is part of how I build."
          description="Combining full-stack engineering with modern AI tools and technologies to build faster, smarter and more capable applications."
        />

        {/* Capability Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-slate-900/60"
            >
              {/* Background number */}
              <span className="pointer-events-none absolute right-6 top-4 font-mono text-5xl font-bold text-slate-800/50 transition-colors group-hover:text-blue-500/10">
                {capability.number}
              </span>

              {/* Icon */}
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 font-mono text-sm font-semibold text-blue-400">
                AI
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                  {capability.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {capability.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {capability.technologies.map((technology) => (
                    <Badge key={technology}>
                      {technology}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* AI Workflow */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-blue-500/20 bg-blue-500/[0.035]">
          <div className="p-7 md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
                  My AI Workflow
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white md:text-2xl">
                  Human engineering + AI acceleration.
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  I use AI to accelerate repetitive development work while
                  keeping architecture, technical decisions, debugging,
                  validation and code quality under engineering control.
                </p>
              </div>

              {/* Workflow */}
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-300">
                  Think
                </span>

                <span className="text-slate-600">→</span>

                <span className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-300">
                  AI Assist
                </span>

                <span className="text-slate-600">→</span>

                <span className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-300">
                  Review
                </span>

                <span className="text-slate-600">→</span>

                <span className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-blue-400">
                  Ship
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Tools */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="mr-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
            Daily AI Tools
          </span>

          <Badge>Claude Code</Badge>
          <Badge>GitHub Copilot</Badge>
          <Badge>ChatGPT</Badge>
        </div>
      </div>
    </section>
  );
}