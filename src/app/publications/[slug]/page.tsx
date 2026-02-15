import Link from "next/link";
import type { Metadata } from "next";

const publicationData = {
  "publication-1": {
    title: "A Statewide Analysis of Ethics and Social Impact in the CS Teacher Preparation Pipeline",
    authors: ["Brendan Henrique", "Kyle Fischer"],
    venue: "SIGCSE 2026",
    year: 2026,
    abstract:
      "The landscape of K-12 computer science (CS) teacher credentialing in the United States is highly variable across pathways and curricula. Scholars in CS education have called for more critical, justice-oriented approaches, particularly in teacher preparation. While the calls to do this work are apparent, it’s less clear to what extent teachers in these programs are critically examining the social impacts and ethical considerations of computing. This study asks: To what extent and in what ways do course descriptions in CS teacher credentialing programs address ethics and social impact? Our data collection focused on a single state with a clear credential pathway for CS. We examined all universities in that state offering a CS teacher credentialing program and compiled a dataset of their course titles, numbers, and descriptions. In total, we identified 89 courses across 18 universities. Further qualitative analysis demonstrated that the inclusion of ethics and social impact in course descriptions was uneven. Some courses highlighted the dual nature of CS as a tool for both innovation and oppression, while others made only brief mention of its social impact. This research highlights the need to examine the content of the CS curriculum for teacher credentialing candidates and the nature of how ethics and social impact are discussed.",
    skills: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "seaborn", "Statistical Analysis"],
    links: [
      { label: "Paper", href: "https://dl.acm.org/doi/10.1145/3770761.3777352" },
      { label: "Slides", href: "https://drive.google.com/file/d/1qgZbphQF2-tq5pdlboj7YQuAifiDde1s/view?usp=sharing" },
    ],
  },
} as const;

type Slug = keyof typeof publicationData;

export function generateStaticParams(): Array<{ slug: string }> {
  return Object.keys(publicationData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pub = publicationData[slug as Slug];
  return { title: `${pub.title} — Publications` };
}

export default async function PublicationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pub = publicationData[slug as Slug];
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h1 className="text-right text-4xl font-semibold text-white/90">
        Publications / <span className="opacity-100">{pub.title}</span>
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="glass md:col-span-2 text-white">
          <h2 className="text-lg font-semibold">Abstract</h2>
          <p className="mt-3 text-white/85">{pub.abstract}</p>
        </div>
        <div className="glass text-white">
          <h2 className="text-lg font-semibold">Details</h2>
          <div className="mt-4 space-y-3">
            <div>
              <span className="text-sm text-white/60">Authors</span>
              <p className="text-white/90">{pub.authors.join(", ")}</p>
            </div>
            <div>
              <span className="text-sm text-white/60">Venue</span>
              <p className="text-white/90">{pub.venue}</p>
            </div>
            <div>
              <span className="text-sm text-white/60">Year</span>
              <p className="text-white/90">{pub.year}</p>
            </div>
          </div>
        </div>
        <div className="glass text-white">
          <h2 className="text-lg font-semibold">Methods & Tools</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {pub.skills.map((s) => (
              <span key={s} className="rounded-md border border-white/15 bg-white/10 px-3 py-1 text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="glass text-white md:col-span-2">
          <h2 className="text-lg font-semibold">Links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {pub.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="glass inline-block text-sm hover:bg-white/10 transition-colors">
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
