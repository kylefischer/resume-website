import Link from "next/link";
import type { Metadata } from "next";

const projectData = {
  'spotify-taste-profiler': {
    title: "Spotify Taste Profiler",
    about:
      "A machine learning–powered data science project that analyzes your Spotify listening history to uncover hidden patterns in your music taste. Using K-means clustering and the Spotify Web API, it groups your favorite tracks into distinct “music personalities,” revealing insights about genre preferences, artist loyalty, and listening trends.",
    skills: ['Python', 'Spotify API', 'pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'seaborn'],
    links: [
      { label: "GitHub", href: "https://github.com/kylefischer/spotify-taste-profiler" },
    ],
  },
  "brawl-stars-analytics": {
    title: "Brawl Stars Analytics",
    about: "A data-driven dashboard that visualizes real-time player performance and game insights using the official Brawl Stars API. Built with Python, Streamlit, and Plotly, it analyzes recent battles to display win rates, brawler statistics, and mode-specific performance trends.",
    skills: ["Python", 'Brawl Stars API', 'Streamlit', "Plotly"],
    links: [{ label: "GitHub", href: "https://github.com/kylefischer/brawl-stars-analytics" }],
  },
  "mnist-neural-network": {
    title: "MNIST Neural Network",
    about: "This project is an adaptation of a school assignment, modified to train a fully-connected neural network on the MNIST handwritten digits dataset from scratch.",
    skills: ["Python", "NumPy", "TensorFlow", "Matplotlib"],
    links: [{ label: "GitHub", href: "https://github.com/kylefischer/mnst-nn-scratch" }],
  },
} as const;

type Slug = keyof typeof projectData;

export function generateStaticParams(): Array<{ slug: string }> {
  return Object.keys(projectData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const proj = projectData[slug as Slug];
  return { title: `${proj.title} — Projects` };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const proj = projectData[slug as Slug];
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h1 className="text-right text-4xl font-semibold text-white/90">
        Projects / <span className="opacity-100">{proj.title}</span>
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="glass md:col-span-2 text-white">
          <h2 className="text-lg font-semibold">About {proj.title}</h2>
          <p className="mt-3 text-white/85">{proj.about}</p>
        </div>
        <div className="glass text-white">
          <h2 className="text-lg font-semibold">Skills and Technologies</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {proj.skills.map((s) => (
              <span key={s} className="rounded-md border border-white/15 bg-white/10 px-3 py-1 text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="glass text-white md:col-span-2">
          <h2 className="text-lg font-semibold">Links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {proj.links.map((l) => (
              <a key={l.label} href={l.href} className="glass inline-block text-sm">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <Link href="/projects" className="link-underline text-white/90">
          Back
        </Link>
      </div>
    </main>
  );
}


