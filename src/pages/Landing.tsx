import Layout from "@/components/layout/Layout";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import About from "@/components/landing/About";
import { Terminal } from "lucide-react";
import { useState, useEffect } from "react";

const Landing = () => {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#about") {
        setShowAbout(true);
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <Layout>
      <div className="grain flex-1">
        <Hero />
        {showAbout && (
          <div className="animate-fade-in">
            <About />
          </div>
        )}
      </div>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50 mt-auto">
        <div className="container-tight text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-mono">
            <Terminal className="h-4 w-4 text-primary" />
            <span>© 2026 EZBuild</span>
            <span className="text-primary">|</span>
            <span>Built for builders</span>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Landing;
