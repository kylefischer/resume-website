import { SectionTitle } from "./ExperienceSection";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2015 - 2019",
      details: "Graduated Magna Cum Laude • GPA: 3.8/4.0"
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "Certified Kubernetes Administrator (CKA)"
  ];

  return (
    <section className="mb-8">
      <SectionTitle title="Education & Certifications" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-text-primary">Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="py-6">
              <h4 className="font-semibold text-text-primary">{edu.degree}</h4>
              <p className="text-highlight font-medium">{edu.school}</p>
              <p className="text-text-muted text-sm">{edu.location}</p>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mt-2 gap-2">
                <span className="text-text-secondary text-sm">{edu.details}</span>
                <span className="text-text-secondary font-mono text-sm mt-2">
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-text-primary">Certifications</h3>
          <div className="py-6">
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3 text-text-secondary">
                  <span className="w-1.5 h-1.5 bg-highlight rounded-full mt-2 flex-shrink-0"></span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;