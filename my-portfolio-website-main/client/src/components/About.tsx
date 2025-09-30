import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Brain, Code2, Database, Globe, Sparkles, Zap, Bot, Server, Layout, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "AI & ML",
    skills: [
      { name: "Python", icon: Code2 },
      { name: "Machine Learning", icon: Brain },
      { name: "AI Tool Development", icon: Sparkles },
      { name: "Chatbots", icon: Bot },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Flask", icon: Server },
      { name: "FastAPI", icon: Zap },
      { name: "SQLAlchemy", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Node.js", icon: Server },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: Layout },
      { name: "CSS", icon: Layout },
      { name: "JavaScript", icon: Code2 },
      { name: "React", icon: Globe },
      { name: "Next.js", icon: Globe },
    ]
  },
  {
    title: "Other",
    skills: [
      { name: "WordPress", icon: Wrench },
      { name: "E-commerce Development", icon: Globe },
      { name: "AWS Deployment", icon: Server },
      { name: "Vercel", icon: Zap },
    ]
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-section-about">About Me</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building Intelligent Solutions with Python & AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            I am a passionate Full Stack AI & Web Developer with expertise in Python, JavaScript, React, Node.js, and Machine Learning. I craft intelligent solutions — from dynamic websites to AI-powered applications — blending creativity with technology.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-sm text-muted-foreground">Technologies</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <p className="text-sm text-muted-foreground">Projects Built</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </Card>
          </div>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <Card
                      key={skill.name}
                      className="p-6 text-center hover-elevate transition-all duration-300 hover:-translate-y-1"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                      data-testid={`card-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-sm">{skill.name}</h4>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
