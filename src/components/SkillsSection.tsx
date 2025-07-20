import { SectionTitle } from "./ExperienceSection";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML/CSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "Express.js", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "AWS", "Git", "Jenkins", "Kubernetes", "Terraform"]
    },
    {
      category: "Other",
      skills: ["GraphQL", "REST APIs", "Jest", "Cypress", "Figma", "Agile/Scrum"]
    }
  ];

  return (
    <section className="mb-8">
      <SectionTitle title="Technical Skills" />
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

const SkillCategory = ({ category, skills }: { category: string; skills: string[] }) => {
  return (
    <div className="bg-section-bg border border-section-border rounded-lg p-6">
      <h3 className="text-lg font-semibold text-highlight mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-muted text-text-primary px-3 py-1 rounded-full text-sm font-medium hover:bg-highlight hover:text-primary-foreground transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;