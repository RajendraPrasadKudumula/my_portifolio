type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "success" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  download?: string | boolean;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  download,
  target,
  rel,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-xl gap-2",
    lg: "px-6 py-3.5 text-base rounded-xl gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-500 hover:to-indigo-500 border border-blue-400/30",
    secondary:
      "bg-slate-900/80 text-slate-200 border border-slate-700/80 hover:bg-slate-800 hover:border-slate-600 hover:text-white backdrop-blur-sm",
    success:
      "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 border border-emerald-400/30",
    outline:
      "bg-transparent text-slate-300 border border-slate-700 hover:border-blue-500 hover:text-white",
    ghost:
      "bg-transparent text-slate-400 hover:text-white hover:bg-slate-800/60",
  };

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const fullClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={fullClassName}
        download={download}
        target={target}
        rel={target === "_blank" ? (rel || "noopener noreferrer") : rel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={fullClassName} onClick={onClick}>
      {children}
    </button>
  );
}