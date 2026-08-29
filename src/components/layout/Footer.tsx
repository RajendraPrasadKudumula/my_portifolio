export function Footer() {
  return (
    <footer className="border-t border-slate-800 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Rajendra Prasad Kudumula. All rights reserved.
        </p>

        <p>
          Built with Next.js · TypeScript · Tailwind CSS · AI-assisted development.
        </p>
      </div>
    </footer>
  );
}