import { SectionHeading } from "@/components/ui/SectionHeading";
import { educationData, certificationsData } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="border-t border-slate-800/80 bg-slate-950/40 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Education & Certifications"
          title="Academic foundation & continuous learning."
          description="Formal engineering background paired with ongoing industry certifications in cloud architecture, full-stack systems, and AI engineering."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
              <span>🎓</span> Formal Degree
            </h3>

            {educationData.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 to-[#070d1e] p-6 sm:p-8"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="text-xl font-bold text-white">
                    {edu.degree}
                  </h4>
                  <span className="font-mono text-xs font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 w-fit">
                    {edu.period}
                  </span>
                </div>

                <p className="mt-1 text-sm font-semibold text-slate-300">
                  {edu.field}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  🏛️ {edu.institution} • 📍 {edu.location}
                </p>

                <div className="mt-5 space-y-2 border-t border-slate-800/60 pt-4">
                  {edu.highlights.map((point) => (
                    <div key={point} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <span className="text-blue-400 mt-0.5">▸</span>
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
              <span>🏆</span> Certifications & Upskilling
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 transition hover:border-blue-500/30"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        {cert.name}
                      </h4>
                      <p className="mt-0.5 text-xs text-slate-400">
                        Issued by: <strong className="text-slate-200">{cert.issuer}</strong> • {cert.year}
                      </p>
                    </div>

                    {cert.badgeText && (
                      <span className="shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-300">
                        {cert.badgeText}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

