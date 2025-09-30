import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import aiChatbot from "@assets/generated_images/AI_chatbot_dashboard_interface_a353b062.png";
import fullStack from "@assets/generated_images/Full_stack_web_dashboard_7333c63e.png";
import mlDashboard from "@assets/generated_images/ML_data_visualization_dashboard_5874f7a1.png";
import ecommerce from "@assets/generated_images/E-commerce_app_mockup_showcase_8d9ccf40.png";

const projects = [
  {
    title: "AI Chatbot Platform",
    description: "Intelligent conversational AI platform powered by GPT-4 with custom training capabilities and multi-language support.",
    image: aiChatbot,
    tags: ["Python", "OpenAI", "React", "FastAPI"],
    github: "#",
    live: "#",
  },
  {
    title: "Full Stack Dashboard",
    description: "Comprehensive analytics dashboard with real-time data visualization and advanced reporting features.",
    image: fullStack,
    tags: ["React", "Node.js", "MongoDB", "D3.js"],
    github: "#",
    live: "#",
  },
  {
    title: "ML Data Analytics",
    description: "Machine learning pipeline for predictive analytics with automated model training and deployment.",
    image: mlDashboard,
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with payment integration, inventory management, and customer analytics.",
    image: ecommerce,
    tags: ["React", "Stripe", "PostgreSQL", "Redis"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-section-projects">Projects</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my latest projects showcasing expertise in AI, machine learning, 
            and full-stack development solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden group hover-elevate transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-project-${index}`}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" data-testid={`button-project-github-${index}`}>
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" data-testid={`button-project-live-${index}`}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
