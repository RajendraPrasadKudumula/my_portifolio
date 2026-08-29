import { Navbar } from "@/Components/layout/Navbar";
import { Hero } from "@/Components/sections/Hero";
import { About } from "@/Components/sections/About";
import { TechStack } from "@/Components/sections/TechStack";
import { Projects } from "@/Components/sections/Projects";
import { Experience } from "@/Components/sections/Experience";
import { AIEngineering } from "@/Components/sections/AIEngineering";
import { Contact } from "@/Components/sections/Contact";
import { Footer } from "@/Components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <AIEngineering />
        <Contact />
      </main>
      <Footer />
    </>
  );
}