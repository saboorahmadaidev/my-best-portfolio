import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { SiGoogle, SiAmazon, SiMeta, SiApple } from "react-icons/si";

const clients = [
  { name: "Google", icon: SiGoogle, color: "#4285F4" },
  { name: "Apple", icon: SiApple, color: "#000000" },
  { name: "Amazon", icon: SiAmazon, color: "#FF9900" },
  { name: "Meta", icon: SiMeta, color: "#0668E1" },
];

const testimonials = [
  {
    quote: "Saboor's AI expertise transformed our customer service with a chatbot that reduced response time by 80%. Exceptional work!",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp Inc.",
    avatar: "SJ",
  },
  {
    quote: "The full-stack solution delivered exceeded our expectations. Clean code, scalable architecture, and ahead of schedule!",
    author: "Michael Chen",
    role: "CTO",
    company: "StartupX",
    avatar: "MC",
  },
  {
    quote: "Outstanding data science work! The ML models improved our prediction accuracy by 35%. Highly recommended.",
    author: "Emily Rodriguez",
    role: "Head of Analytics",
    company: "DataFlow",
    avatar: "ER",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-section-clients">Clients & Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Leading Companies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I've had the privilege to work with amazing teams and deliver impactful solutions.
          </p>
        </div>

        <div className="flex justify-center items-center gap-12 mb-16 flex-wrap">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <div
                key={client.name}
                className="flex items-center justify-center w-24 h-24 grayscale hover:grayscale-0 transition-all duration-300 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
                data-testid={`logo-client-${client.name.toLowerCase()}`}
              >
                <Icon className="w-16 h-16" style={{ color: client.color }} />
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
