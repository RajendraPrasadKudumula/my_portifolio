type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-500"
      : "border border-slate-700 text-slate-200 hover:bg-slate-800";

  if (href) {
    return (
      <a
        href={href}
        className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition ${styles}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition ${styles}`}
    >
      {children}
    </button>
  );
}