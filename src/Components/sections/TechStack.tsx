import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

export function TechStack() {
  return (
    <section
      id="tech-stack"
      className="border-t border-slate-800 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title="The technologies behind my work."
          description="A focused engineering stack covering full-stack development, backend systems, cloud infrastructure, testing and AI-powered applications."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                category.featured
                  ? "border-blue-500/20 bg-blue-500/[0.03] hover:border-blue-500/40"
                  : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
              }`}
            >
              <div className="relative">
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                  {category.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500/40 hover:text-blue-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}