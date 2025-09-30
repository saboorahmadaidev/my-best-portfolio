import { Github, Linkedin, Mail } from "lucide-react";
import { SiUpwork, SiDiscord } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const socials = [
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/saboor-ahmad" },
    { name: "GitHub", icon: Github, url: "https://github.com/saboorahmad" },
    { name: "Upwork", icon: SiUpwork, url: "https://upwork.com/freelancers/saboorahmad" },
    { name: "Discord", icon: SiDiscord, url: "https://discord.com/users/saboorahmad" },
    { name: "Email", icon: Mail, url: "mailto:saboorahmad.aidev@gmail.com" },
  ];

  return (
    <footer className="border-t py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  data-testid={`button-footer-${social.name.toLowerCase()}`}
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                </Button>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Saboor Ahmad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
