import Link from "next/link";

const projects = [
  {
    slug: "spotify-taste-profiler",
    name: "Spotify Taste Profiler",
    summary: "Python, Pandas, Numpy, Scikit-learn, matplotlib, seaborn",
  },
  {
    slug: "brawl-stars-analytics",
    name: "Brawl Stars Analytics",
    summary: "Python, Brawl Stars API, Streamlit, Plotly",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h1 className="text-right text-5xl font-bold text-white/90">Projects</h1>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="glass block text-white">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold underline underline-offset-8 decoration-white/40">
                {p.name}
              </h2>
            </div>
            <p className="mt-2 text-sm text-white/80">{p.summary}</p>
          </Link>
        ))}
      </div>
      <div className="mt-12 flex justify-end">
        <Link href="/" className="link-underline text-white/90">
          Back
        </Link>
      </div>
    </main>
  );
}


