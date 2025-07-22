import { SectionTitle } from "./ExperienceSection";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "SQL (Posgres)", "Javascript", "HTML/CSS", "R", "Java"]
    },
    {
      category: "Technologies",
      skills: ["Excel", "Tableau","Git","Pandas", "Numpy", "Matplotlib", "Scikit-Learn", "Tensorflow", "Jupyter", "FastAPI", "HuggingFace"]
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
    <div className="py-6">
      <h3 className="text-lg font-semibold text-highlight mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-muted text-text-primary px-3 py-1 text-sm font-medium hover:bg-highlight hover:text-primary-foreground transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;