import { ExternalLink, Github } from "lucide-react";
import { SectionTitle } from "./ExperienceSection";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      github: "https://github.com/johndoe/ecommerce",
      demo: "https://ecommerce-demo.johndoe.dev",
      highlights: [
        "Built responsive shopping cart and checkout flow",
        "Implemented secure payment processing",
        "Created admin dashboard for inventory management"
      ]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features",
      technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket", "Tailwind"],
      github: "https://github.com/johndoe/taskmanager",
      demo: "https://tasks.johndoe.dev",
      highlights: [
        "Real-time collaboration with WebSocket",
        "Drag-and-drop task organization",
        "Team management and permissions"
      ]
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts and interactive maps",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Mapbox"],
      github: "https://github.com/johndoe/weather-dashboard",
      demo: "https://weather.johndoe.dev",
      highlights: [
        "Interactive weather maps",
        "7-day forecast with charts",
        "Location-based weather alerts"
      ]
    }
  ];

  return (
    <section className="mb-8">
      <SectionTitle title="Featured Projects" />
      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  github, 
  demo, 
  highlights 
}: {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  highlights: string[];
}) => {
  return (
    <div className="bg-section-bg border border-section-border rounded-lg p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
          <p className="text-text-secondary mb-4">{description}</p>
        </div>
        
        <div className="flex gap-3 mt-2 md:mt-0">
          <a 
            href={github}
            className="flex items-center gap-2 text-text-muted hover:text-highlight transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm">Code</span>
          </a>
          <a 
            href={demo}
            className="flex items-center gap-2 text-text-muted hover:text-highlight transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">Demo</span>
          </a>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-muted text-text-primary px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <ul className="space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-3 text-text-secondary text-sm">
            <span className="w-1.5 h-1.5 bg-highlight rounded-full mt-1.5 flex-shrink-0"></span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;