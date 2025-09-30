import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "@assets/WhatsApp Image 2025-09-29 at 03.11.54_50674e19_1759211423877.jpg";

const titles = [
  "AI Developer",
  "Full Stack Developer",
  "Python Developer",
  "Machine Learning Expert",
];

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-block animate-fade-in">
          <img
            src={profileImage}
            alt="Saboor Ahmad"
            className="w-48 h-48 rounded-full object-cover mx-auto animate-glow-pulse"
            data-testid="img-profile"
          />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
            Saboor Ahmad
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Full Stack AI & Web Developer, Python Expert, and Government-Certified ML & AI Specialist
        </p>

        <div className="h-12 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl md:text-2xl text-primary font-semibold" data-testid="text-rotating-title">
            {titles[currentTitle]}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="group"
            data-testid="button-view-work"
          >
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            data-testid="button-contact-me"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
