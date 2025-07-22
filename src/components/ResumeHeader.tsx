import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";

const ResumeHeader = () => {
  return (
    <header className="bg-section-bg p-8 mb-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-text-primary mb-2">
              Kyle Fischer
            </h1>
            <h2 className="text-xl text-highlight font-medium mb-3">
              Data Analyst
            </h2>
            <p className="text-text-secondary max-w-2xl leading-relaxed">
              Student at UC Berkeley, pursuing a B.A. in Cognitive Science with a minor in Data Science aiming to explore the intersection of mind and data. 
              I'm not just breaking into a career, I’m building one that’s thoughtful, ethical, and impact-driven.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 md:text-right">
            <ContactItem icon={Mail} text="kylefischer@berkeley.edu" href="mailto:kylefischer@berkeley.edu" />
            <ContactItem icon={MapPin} text="Berkeley, CA" />
            <ContactItem icon={Linkedin} text="linkedin.com/in/kylepfischer" href="https://linkedin.com/in/kylepfischer" />
            <ContactItem icon={Github} text="github.com/kylefischer" href="https://github.com/kylefischer" />
            <ContactItem icon={Globe} text="Download Resume" href="https://drive.google.com/file/d/1dFHuBJOwdZDabRv69quVn8fVO7545Kbp/view?usp=sharing" />
          </div>
        </div>
      </div>
    </header>
  );
};

const ContactItem = ({ icon: Icon, text, href }: { icon: any, text: string, href?: string }) => {
  const content = (
    <>
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span className="text-sm font-mono">{text}</span>
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-text-secondary hover:text-highlight transition-colors cursor-pointer"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-3 text-text-secondary hover:text-highlight transition-colors">
      {content}
    </div>
  );
};

export default ResumeHeader;