import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const capabilities = [
  {
    number: "01",
    title: "AI-Assisted Development Velocity",
    description:
      "Deep integration of Claude Code, GitHub Copilot, and LLMs into daily development for rapid boilerplate generation, unit test scaffolding, debugging complex stack traces, and edge-case discovery.",
    technologies: ["Claude Code", "GitHub Copilot", "ChatGPT", "Prompt Optimization"],
    impact: "+40% Sprint Velocity",
  },
  {
    number: "02",
    title: "LLM API Integration & Schema Validation",
    description:
      "Building backend services that communicate with OpenAI and Anthropic Claude APIs using strict system instructions, structured prompt templating, and Zod runtime schema validation to guarantee deterministic JSON output.",
    technologies: ["Anthropic Claude API", "OpenAI API", "Zod Validation", "Structured Outputs"],
    impact: "100% Deterministic Output",
  },
  {
    number: "03",
    title: "RAG & Vector Search Pipelines",
    description:
      "Constructing Retrieval-Augmented Generation workflows that ingest application data, generate high-dimensional vector embeddings, and perform hybrid semantic similarity searches to provide contextual knowledge to LLMs.",
    technologies: ["pgvector", "Pinecone", "LangChain", "Text Embeddings", "Semantic Search"],
    impact: "Context-Aware AI Answers",
  },
  {
    number: "04",
    title: "AI Backend Orchestration",
    description:
      "Designing resilient NestJS / Express middleware and background workers that handle LLM rate limiting, token usage optimization, retry policies, and persistent audit logs.",
    technologies: ["NestJS", "Node.js", "PostgreSQL", "Rate Limiting", "Token Optimization"],
    impact: "Production Reliability",
  },
];

export function AIEngineering() {
  return (
    <section id="ai" className="border-t border-slate-800/80 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="AI Engineering"
          title="AI is deeply woven into how I engineer."
          description="Combining robust full-stack engineering with modern AI tooling, LLM integrations, and RAG pipelines to build intelligent, high-velocity systems."
        />

        {/* Capability Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 to-[#080e22] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 font-mono text-xs font-bold text-blue-400">
                  {cap.number}
                </span>
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-0.5 text-xs font-mono font-semibold text-purple-300">
                  {cap.impact}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-white group-hover:text-blue-300 transition">
                {cap.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">
                {cap.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-slate-800/60 pt-4">
                {cap.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI Workflow Banner */}
        <div className="mt-10 rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-950/30 via-slate-900/80 to-[#070d1e] p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                The AI Engineering Workflow
              </p>
              <h4 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                Human architectural mastery + AI execution velocity.
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                I direct system architecture, security models, data contracts, and unit testing—while AI tools accelerate implementation, syntax drafting, and edge-case validation.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200">
                1. System Spec
              </span>
              <span className="text-blue-400">→</span>
              <span className="rounded-xl border border-blue-500/40 bg-blue-500/20 px-3 py-2 text-blue-300 font-semibold">
                2. AI Accelerated Code
              </span>
              <span className="text-blue-400">→</span>
              <span className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200">
                3. Test & Verification
              </span>
              <span className="text-blue-400">→</span>
              <span className="rounded-xl border border-emerald-500/40 bg-emerald-500/20 px-3 py-2 text-emerald-300 font-semibold">
                4. Ship to Prod
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}