import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";
import Loading from "@/components/Loading";
import About from "@/components/sections/About";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loading key="loading" onComplete={() => setIsLoading(false)} />
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="sticky top-0 z-50 backdrop-blur bg-background/60 border-b border-border">
            <div className="container h-14 flex items-center justify-between">
              <a href="#top" className="font-display text-lg">
                Creator Portfolio
              </a>
              <div className="hidden md:flex items-center gap-6 text-sm">
                <a href="#about" className="story-link">
                  About
                </a>
                <a href="#skills" className="story-link">
                  Skills
                </a>
                <a href="#projects" className="story-link">
                  Projects
                </a>
                <a href="#experience" className="story-link">
                  Experience
                </a>
                <a href="#contact" className="story-link">
                  Contact
                </a>
              </div>
            </div>
          </nav>
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Timeline />
            <Contact />
          </main>
          <footer className="py-10 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Creator Portfolio — Built with motion +
            craft.
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
