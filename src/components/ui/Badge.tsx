type BadgeProps = {
  children: React.ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300">
      {children}
    </span>
  );
}