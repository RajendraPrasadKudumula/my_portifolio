import { Navbar } from "@/components/layout/Navbar";
import { RecruiterBar } from "@/components/layout/RecruiterBar";
import { Hero } from "@/components/sections/Hero";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Architecture } from "@/components/sections/Architecture";
import { AIEngineering } from "@/components/sections/AIEngineering";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <ImpactStats />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Architecture />
        <AIEngineering />
        <Education />
        <Contact />
      </main>
      <Footer />
      <RecruiterBar />
    </>
  );
}