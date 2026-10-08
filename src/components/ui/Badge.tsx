type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "purple" | "outline";
  className?: string;
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variantStyles = {
    default: "border-slate-700/60 bg-slate-900/80 text-slate-300 hover:border-slate-600",
    primary: "border-blue-500/30 bg-blue-500/10 text-blue-300 hover:border-blue-500/50",
    success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:border-emerald-500/50",
    purple: "border-purple-500/30 bg-purple-500/10 text-purple-300 hover:border-purple-500/50",
    outline: "border-slate-800 bg-transparent text-slate-400 hover:text-slate-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}