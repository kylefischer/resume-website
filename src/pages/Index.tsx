import ResumeHeader from "@/components/ResumeHeader";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResumeHeader />
      
      <main className="max-w-4xl mx-auto px-8 pb-12">
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      
      <footer className="bg-section-bg p-6 text-center">
        <p className="text-text-muted text-sm">
          © 2024 Kyle Fischer. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
