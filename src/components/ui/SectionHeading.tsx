type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  badge?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  badge,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-14 ${isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      <div className={`mb-3 inline-flex items-center gap-2 ${isCenter ? "justify-center" : ""}`}>
        <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
          {eyebrow}
        </p>
        {badge && (
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-medium text-blue-300">
            {badge}
          </span>
        )}
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}