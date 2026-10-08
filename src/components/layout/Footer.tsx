export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#04060e] px-6 py-12 pb-24 md:pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 font-mono text-xs font-bold text-white">
                RP
              </span>
              <span className="font-bold text-white tracking-tight">
                Rajendra Prasad Kudumula
              </span>
            </div>
            <p className="mt-1.5 text-xs text-slate-400">
              Senior Software Engineer • Full Stack, Backend & AI Systems • Bengaluru, India
            </p>
          </div>

          {/* Quick jump links */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#tech-stack" className="hover:text-blue-400 transition">Skills</a>
            <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#architecture" className="hover:text-blue-400 transition">Architecture</a>
            <a href="#ai" className="hover:text-blue-400 transition">AI</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            <a href="/rajendra-prasad-k-4YE.pdf" download="Rajendra-Prasad-K-Resume.pdf" className="text-blue-400 hover:text-blue-300 transition font-semibold">Resume PDF ↓</a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-800/80 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Rajendra Prasad Kudumula. All rights reserved.
          </p>
          <p>
            Built with Next.js 16 (App Router) • TypeScript • Tailwind CSS • Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}