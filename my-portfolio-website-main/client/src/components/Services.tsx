import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, Bot, Globe, Rocket } from "lucide-react";

const services = [
  {
    title: "Full Stack Web Development",
    description: "Build modern, responsive web applications using React, Node.js, and cutting-edge technologies.",
    icon: Code,
  },
  {
    title: "AI-powered Applications & Tools",
    description: "Develop intelligent solutions with machine learning, chatbots, and AI integrations.",
    icon: Bot,
  },
  {
    title: "Custom WordPress Websites & E-commerce",
    description: "Create stunning WordPress sites and fully-featured e-commerce platforms.",
    icon: Globe,
  },
  {
    title: "Software Development & Deployment",
    description: "End-to-end software development with seamless deployment on AWS, Vercel, and more.",
    icon: Rocket,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-section-services">Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What I Offer</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions tailored to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="p-8 hover-elevate transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`card-service-${index}`}
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
