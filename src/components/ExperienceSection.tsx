const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Haas School of Business, University of California Berkeley",
      location: "Berkeley, CA",
      period: "Feb. 2025 - Present",
      achievements: [
        "Optimized data quality and integrity by cleaning and standardizing multi-million entry datasets, boosting accuracy and consistency by 70% for analysis using Python (pandas) and SQL.",
        "Built robust entity matching workflows across multi-source datasets using fuzzy string matching (e.g., Levenshtein distance, TF-IDF) to identify duplicates and resolve inconsistencies.",
        "Mentored 3 junior developers and conducted code reviews",
        "Ensured high-accuracy data integration by developing matching algorithms that achieved over 95% precision in cross-dataset entity resolution."
      ]
    },
    {
      title: "Undergraduate Research Data Scientist",
      company: "Berkeley School of Education CoRE Lab",
      location: "Berkeley, CA",
      period: "Jan. 2025 – May 2025",
      achievements: [
        "Developed and configured a web-crawler to systematically collect data from over 20 CS credentialing programs and 150+ courses throughout California.",
        "Leveraged an NLP model, SBERT, to generate sentence embeddings and compute cosine similarity for alignment detection between programs.",
        "Summarized findings through comprehensive reports and interactive data visualizations, supporting research dissemination to academic stakeholders and research communities.",
      ]
    },
    {
      title: "Data Analytics Externship",
      company: "Beats by Dre",
      location: "Remote",
      period: "Dec. 2024 – Apr. 2025",
      achievements: [
        "Conducted exploratory data analysis (EDA) and sentiment analysis on survey and customer review data usingPython, Pandas, and NumPy.",
        "Built and cleaned datasets to ensure high-quality data for analysis, applying statistical methods and AI-driven insights to extract key trends.",
        "Visualized consumer insights using interactive data dashboards (Tableau), leading to 5+ actionable business recommendations that informed product strategy."
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