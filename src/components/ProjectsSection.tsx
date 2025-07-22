import { ExternalLink, Github } from "lucide-react";
import { SectionTitle } from "./ExperienceSection";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Brawl Stars Analytics Dashboard",
      description: "A comprehensive data analytics dashboard for Brawl Stars players that visualizes battle performance, brawler statistics, and game mode analysis using the official Brawl Stars API.",
      technologies: ["Python", "Pandas", "NumPy", "Streamlit", "Plotly", "Brawlstats API"],
      github: "https://github.com/kylefischer/brawl-stars-analytics",
      highlights: [
        "Developed a Brawl Stars Analytics Dashboard to track in-game performance.",
        "Integrated with Brawl Stars API to fetch and analyze 25 recent battle logs.",
        "Generated 5 interactive visualizations for player, brawler, and game mode performance.",
        "Calculated 10+ key performance metrics, including win rates and star player statistics.",
        "Designed a user-friendly Streamlit interface with real-time data display and detailed tables."
      ]
    },
    {
      title: "Spotify Taste Profiler",
      description: "A data science project that analyzes your Spotify listening history using machine learning clustering to discover hidden patterns in your music taste.",
      technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "Spotipy API"],
      github: "https://github.com/kylefischer/spotify-taste-profiler",
      highlights: [
        "Developed a Spotify Taste Profiler to analyze musical taste and identify patterns in music listening history.",
        "Fetched and analyzed up to 300 top tracks from Spotify API to understand music preferences.",
        "Generated 5 data visualizations (Elbow Method, Silhouette Analysis, Popularity vs. Duration, Genre Diversity, Popularity Distribution) to illustrate clustering results and patterns.",
        "Implemented K-means clustering to identify 8-12 distinct music taste clusters."
      ]
    },
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
  highlights 
}: {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  highlights: string[];
}) => {
  return (
    <div className="py-8 border-b border-section-border last:border-b-0">
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
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-muted text-text-primary px-2 py-1 text-xs font-medium"
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