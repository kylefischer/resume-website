import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Kyle Fischer",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h1 className="text-right text-5xl font-bold text-white/90">About</h1>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Profile Photo */}
        <div className="flex justify-center md:justify-start">
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Kyle Fischer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Bio */}
        <div className="glass md:col-span-2 text-white">
          <h2 className="text-2xl font-semibold">Hi, I&apos;m Kyle</h2>
          <p className="mt-4 text-white/85 leading-relaxed">
            I&apos;m an undergraduate student at UC Berkeley studying Data Science and Cognitive Science. 
            I&apos;m passionate about using data to solve meaningful problems and understanding how 
            the mind processes information.
          </p>
          <p className="mt-4 text-white/85 leading-relaxed">
            Currently, I work as an Undergraduate Researcher building data pipelines for educational 
            research and as a Data Analyst engineering workflows for business analytics. I love 
            exploring the intersection of cognitive science and data-driven solutions.
          </p>
        </div>

        {/* Education */}
        <div className="glass text-white">
          <h2 className="text-lg font-semibold">Education</h2>
          <div className="mt-4 space-y-4">
            <div>
              <p className="font-medium">UC Berkeley</p>
              <p className="text-sm text-white/70">B.A. Cognitive Science</p>
              <p className="text-sm text-white/70">Minor in Data Science</p>
              <p className="mt-1 text-sm text-white/50">Expected 2026</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="glass text-white">
          <h2 className="text-lg font-semibold">Technical Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Python",
              "SQL",
              "R",
              "Pandas",
              "NumPy",
              "scikit-learn",
              "TensorFlow",
              "Matplotlib",
              "Streamlit",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-white/15 bg-white/10 px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="glass text-white">
          <h2 className="text-lg font-semibold">Interests</h2>
          <ul className="mt-4 space-y-2 text-white/85">
            <li>• Machine Learning & AI</li>
            <li>• Human-Computer Interaction</li>
            <li>• Educational Technology</li>
            <li>• Data Visualization</li>
            <li>• Cognitive Psychology</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="glass md:col-span-3 text-white">
          <h2 className="text-lg font-semibold">Get in Touch</h2>
          <p className="mt-4 text-white/85">
            I&apos;m always interested in connecting with others who share similar interests or have 
            exciting opportunities. Feel free to reach out!
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/kylepfischer/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/kylefischer"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-end">
        <Link href="/" className="link-underline text-white/90">
          Back
        </Link>
      </div>
    </main>
  );
}
