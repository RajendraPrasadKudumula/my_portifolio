type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
};

export function Card({ children, className = "", hoverEffect = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-md ${
        hoverEffect
          ? "transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-blue-500/5"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}