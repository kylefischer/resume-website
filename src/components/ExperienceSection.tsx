const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      achievements: [
        "Led development of microservices architecture serving 1M+ users",
        "Improved application performance by 40% through optimization",
        "Mentored 3 junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Co.",
      location: "Remote",
      period: "2020 - 2022",
      achievements: [
        "Built responsive web applications using React and Node.js",
        "Collaborated with design team to implement pixel-perfect UIs",
        "Integrated third-party APIs and payment systems",
        "Maintained 99.9% uptime for customer-facing applications"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      period: "2019 - 2020",
      achievements: [
        "Developed mobile-first responsive interfaces",
        "Optimized bundle size reducing load times by 50%",
        "Implemented A/B testing framework for feature rollouts",
        "Contributed to open source projects and internal tooling"
      ]
    }
  ];

  return (
    <section className="mb-8">
      <SectionTitle title="Professional Experience" />
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

const ExperienceItem = ({ title, company, location, period, achievements }: {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}) => {
  return (
    <div className="py-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
          <p className="text-highlight font-medium">{company}</p>
          <p className="text-text-muted text-sm">{location}</p>
        </div>
        <span className="text-text-secondary font-mono text-sm mt-2 md:mt-0">
          {period}
        </span>
      </div>
      
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-3 text-text-secondary">
            <span className="w-1.5 h-1.5 bg-highlight rounded-full mt-2 flex-shrink-0"></span>
            <span className="leading-relaxed">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
      <span className="w-8 h-0.5 bg-highlight"></span>
      {title}
    </h2>
  );
};

export default ExperienceSection;
export { SectionTitle };