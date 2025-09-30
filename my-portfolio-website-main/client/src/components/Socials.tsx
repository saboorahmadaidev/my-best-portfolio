import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiUpwork, SiDiscord } from "react-icons/si";

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/saboor-ahmad",
    color: "hover:text-[#0077B5]",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/saboorahmad",
    color: "hover:text-foreground",
  },
  {
    name: "Upwork",
    icon: SiUpwork,
    url: "https://upwork.com/freelancers/saboorahmad",
    color: "hover:text-[#14A800]",
  },
  {
    name: "Discord",
    icon: SiDiscord,
    url: "https://discord.com/users/saboorahmad",
    color: "hover:text-[#5865F2]",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:saboorahmad.aidev@gmail.com",
    color: "hover:text-primary",
  },
];

export default function Socials() {
  return (
    <section id="socials" className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Badge className="mb-4" data-testid="badge-section-socials">Connect</Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
        <p className="text-lg text-muted-foreground mb-12">
          Find me on these platforms or reach out directly
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Button
                key={social.name}
                variant="outline"
                size="lg"
                className={`transition-colors ${social.color}`}
                asChild
                data-testid={`button-social-${social.name.toLowerCase()}`}
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Icon className="w-5 h-5" />
                  {social.name}
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
