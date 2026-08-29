import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="animate-fade-up rounded-3xl border border-slate-800 bg-slate-900/40 p-8 text-center transition duration-300 hover:border-slate-700 md:p-12">

          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's build something meaningful."
            description="I'm open to Full-Stack and Backend Engineering opportunities, technical discussions, and projects involving scalable systems and AI-powered applications."
          />

          {/* Availability */}
          <div className="mt-8 flex animate-fade-in items-center justify-center gap-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />

            <span className="text-sm text-slate-400">
              Open to Full-Stack / Backend Engineering opportunities
            </span>
          </div>

          {/* Email */}
          <a
            href="mailto:rajkudumala81@gmail.com"
            className="mt-4 inline-block font-mono text-sm text-blue-400 transition-colors duration-300 hover:text-blue-300"
          >
            rajkudumala81@gmail.com
          </a>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <div className="transition duration-300 hover:-translate-y-1">
              <Button href="mailto:rajkudumala81@gmail.com">
                Email Me →
              </Button>
            </div>

            <div className="transition duration-300 hover:-translate-y-1">
              <Button
                href="https://www.linkedin.com/in/rajendra-prasad-k-20a302136/"
                variant="secondary"
              >
                LinkedIn ↗
              </Button>
            </div>

            <div className="transition duration-300 hover:-translate-y-1">
              <Button
                href="https://github.com/RajendraPrasadKudumula"
                variant="secondary"
              >
                GitHub ↗
              </Button>
            </div>

          </div>

          {/* Recruiter message */}
          <div className="mx-auto mt-10 max-w-2xl animate-fade-in border-t border-slate-800 pt-7">
            <p className="text-sm leading-7 text-slate-500">
              Looking for someone who can contribute across backend
              architecture, APIs, databases, cloud infrastructure and
              AI-assisted development? I'd be happy to connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}