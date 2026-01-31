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
  {
    slug: "mnist-neural-network",
    name: "MNIST Neural Network",
    summary: "Python, NumPy, TensorFlow, Matplotlib",
  },
];

const publications = [
  {
    slug: "publication-1",
    name: "A Statewide Analysis of Ethics and Social Impact in the CS Teacher Preparation Pipeline",
    authors: "Brendan Henrique, Kyle Fischer",
    venue: "SIGCSE 2026",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h1 className="text-right text-5xl font-bold text-white/90">Projects</h1>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="glass block text-white hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold underline underline-offset-8 decoration-white/40">
                {p.name}
              </h2>
            </div>
            <p className="mt-2 text-sm text-white/80">{p.summary}</p>
          </Link>
        ))}
      </div>

      <h1 className="mt-16 text-right text-5xl font-bold text-white/90">Publications</h1>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {publications.map((p) => (
          <Link key={p.slug} href={`/publications/${p.slug}`} className="glass block text-white hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold underline underline-offset-8 decoration-white/40">
                {p.name}
              </h2>
            </div>
            <p className="mt-3 text-sm text-white/70">{p.authors}</p>
            <p className="mt-1 text-sm font-medium text-white/90">{p.venue}</p>
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


