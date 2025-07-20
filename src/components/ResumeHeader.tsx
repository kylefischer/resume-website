import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";

const ResumeHeader = () => {
  return (
    <header className="bg-section-bg border-b border-section-border p-8 mb-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-text-primary mb-2">
              John Doe
            </h1>
            <h2 className="text-xl text-highlight font-medium mb-3">
              Senior Software Developer
            </h2>
            <p className="text-text-secondary max-w-2xl leading-relaxed">
              Passionate full-stack developer with 5+ years of experience building scalable web applications. 
              Specialized in React, Node.js, and cloud technologies with a focus on clean code and user experience.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 md:text-right">
            <ContactItem icon={Mail} text="john.doe@email.com" />
            <ContactItem icon={Phone} text="+1 (555) 123-4567" />
            <ContactItem icon={MapPin} text="San Francisco, CA" />
            <ContactItem icon={Linkedin} text="linkedin.com/in/johndoe" />
            <ContactItem icon={Github} text="github.com/johndoe" />
            <ContactItem icon={Globe} text="johndoe.dev" />
          </div>
        </div>
      </div>
    </header>
  );
};

const ContactItem = ({ icon: Icon, text }: { icon: any, text: string }) => {
  return (
    <div className="flex items-center gap-3 text-text-secondary hover:text-highlight transition-colors">
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span className="text-sm font-mono">{text}</span>
    </div>
  );
};

export default ResumeHeader;