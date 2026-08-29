import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  {
    title: "Full Stack Engineering",
    description:
      "Building modern applications across frontend, backend and APIs with a strong focus on maintainability.",
  },
  {
    title: "Backend Systems",
    description:
      "Designing REST APIs, microservices, database-driven systems and asynchronous workflows.",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Working with AWS, Docker and production-oriented application architecture.",
  },
  {
    title: "AI Engineering",
    description:
      "Integrating LLMs, RAG pipelines and vector databases into practical applications.",
  },
];

const aiTools = ["Claude", "GitHub Copilot", "ChatGPT"];

export function About() {
  return (
    <section
      id="about"
      className="border-t border-slate-800 bg-slate-900/30 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering software with depth, speed and AI."
        />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.5fr]">
          {/* LEFT */}
          <div>
            <p className="max-w-lg text-2xl font-semibold leading-9 text-white">
              I build full-stack applications with a strong backend
              foundation and an AI-augmented development workflow.
            </p>

            <p className="mt-6 max-w-lg leading-8 text-slate-400">
              My focus is not just writing code. I enjoy understanding
              the problem, designing the right architecture, building
              reliable systems and using modern AI tools to improve the
              development lifecycle.
            </p>

            {/* Quick profile */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-2xl font-bold text-white">4+</p>
                <p className="mt-1 text-xs text-slate-500">
                  Years Experience
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-2xl font-bold text-blue-400">
                  Full Stack
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Engineering
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-blue-400 transition group-hover:border-blue-500/40">
                  →
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}

            {/* AI workflow card */}
            <div className="sm:col-span-2 rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-blue-400">
                    AI-Augmented Workflow
                  </p>

                  <p className="mt-2 text-lg font-semibold text-white">
                    Building faster without compromising engineering quality.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {aiTools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg border border-blue-500/20 bg-slate-950 px-3 py-2 text-xs font-medium text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}