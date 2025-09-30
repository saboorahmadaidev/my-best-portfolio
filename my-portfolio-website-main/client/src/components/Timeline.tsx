import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Server, Layout, Brain, Rocket } from "lucide-react";

const experiences = [
  {
    year: "Now",
    type: "present",
    icon: Rocket,
    title: "Full Stack Web & App Developer",
    description: "Turning ideas into reality, building AI-powered apps, tools, and solutions that make an impact.",
  },
  {
    year: "Year 3",
    type: "ai",
    icon: Brain,
    title: "AI & Machine Learning Journey",
    description: "Learned deployment, built AI tools, chatbots, and conducted deep research in ML/AI/Data Science.",
  },
  {
    year: "Year 2",
    type: "frontend",
    icon: Layout,
    title: "Frontend & E-commerce Mastery",
    description: "Mastered JavaScript, React, Node.js, CSS + WordPress & E-commerce web development.",
  },
  {
    year: "Year 1",
    type: "backend",
    icon: Server,
    title: "Backend Development Foundation",
    description: "Learned backend development with HTML, Python, Flask, SQLAlchemy, and MongoDB.",
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="py-20 md:py-32 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-section-experience">Experience</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Journey</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A timeline of my professional growth, achievements, and educational milestones.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative mb-12 ${isLeft ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-12"}`}
                data-testid={`timeline-item-${index}`}
              >
                <div
                  className={`absolute left-8 md:left-1/2 -ml-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-4 ring-background ${
                    isLeft ? "md:-ml-4" : "md:-ml-4"
                  }`}
                >
                  <Icon className="w-4 h-4 text-primary-foreground" />
                </div>

                <div className={`ml-20 md:ml-0 ${isLeft ? "" : "md:ml-12"}`}>
                  <Card className="p-6 hover-elevate transition-all duration-300 hover:-translate-y-1">
                    <p className="text-sm text-primary font-semibold mb-2">{exp.year}</p>
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
