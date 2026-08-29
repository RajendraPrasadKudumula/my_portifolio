type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}