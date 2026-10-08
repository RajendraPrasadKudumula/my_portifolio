export function ImpactStats() {
  const stats = [
    {
      value: "4+ Years",
      label: "Professional Experience",
      subtext: "Senior Software Engineer at Happiest Minds",
      icon: "⚡",
      accent: "from-blue-500/20 to-blue-600/5",
    },
    {
      value: "25+ APIs",
      label: "Production Services",
      subtext: "Enterprise Healthcare & AdTech Systems",
      icon: "🚀",
      accent: "from-cyan-500/20 to-cyan-600/5",
    },
    {
      value: "35% Latency",
      label: "Query Optimization",
      subtext: "PostgreSQL, Indexing & Redis Caching",
      icon: "📈",
      accent: "from-emerald-500/20 to-emerald-600/5",
    },
    {
      value: "500K+ Daily",
      label: "Data Ingestion Pipeline",
      subtext: "Snowflake & Scheduled ETL Workflows",
      icon: "🧠",
      accent: "from-purple-500/20 to-purple-600/5",
    },
  ];

  return (
    <section className="relative z-10 -mt-8 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/90 bg-gradient-to-b from-slate-900/90 to-[#070d1e]/90 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
                  Verified
                </span>
              </div>

              <div className="mt-4">
                <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-200">
                  {stat.label}
                </p>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

