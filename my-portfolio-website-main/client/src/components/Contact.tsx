import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { SiUpwork, SiDiscord } from "react-icons/si";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const socials = [
    { name: "LinkedIn", icon: Linkedin, link: "https://linkedin.com/in/saboor-ahmad", color: "#0A66C2" },
    { name: "GitHub", icon: Github, link: "https://github.com/saboorahmad", color: "#181717" },
    { name: "Upwork", icon: SiUpwork, link: "https://upwork.com/freelancers/saboorahmad", color: "#14A800" },
    { name: "Discord", icon: SiDiscord, link: "https://discord.com/users/saboorahmad", color: "#5865F2" },
    { name: "Email", icon: Mail, link: "mailto:saboorahmad.aidev@gmail.com", color: "#EA4335" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-section-contact">Contact</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's work together — Reach out via LinkedIn, GitHub, or email me at saboorahmad.aidev@gmail.com
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <Card className="md:col-span-3 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-email"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  data-testid="input-message"
                />
              </div>
              <Button type="submit" size="lg" className="w-full" data-testid="button-send-message">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          <div className="md:col-span-2 space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Connect With Me</h3>
              <div className="space-y-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                      data-testid={`button-social-${social.name.toLowerCase()}`}
                    >
                      <a href={social.link} target="_blank" rel="noopener noreferrer">
                        <Icon className="w-5 h-5 mr-3" style={{ color: social.color }} />
                        {social.name}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6 bg-primary text-primary-foreground">
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-sm opacity-90">
                I typically respond within 24 hours. For urgent inquiries, please reach out via LinkedIn or Discord.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
