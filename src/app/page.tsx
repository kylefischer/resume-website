import Link from "next/link";

export default function Home() { 
  return (
    <main className="relative mx-auto max-w-6xl min-h-screen px-6 py-20 sm:py-28">
      <section className="max-w-3xl md:absolute md:left-0 md:top-[42%] md:-translate-y-1/2">
        <h1 className="text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl">
          I&apos;m <span className="opacity-90 font-extrabold">Kyle Fischer</span>,
          <br /> I study <span className="opacity-90 font-extrabold">Data&nbsp;Science</span> & <span className="opacity-90 font-extrabold">Cognitive&nbsp;Science</span> at <span className="opacity-90 font-extrabold">UC&nbsp;Berkeley</span>.
        </h1>
        <div className="mt-6 h-px w-96 bg-white" />
        <div className="mt-6 max-w-xl text-white/90 font-mono text-lg leading-tight space-y-2">
          <p>
          Undergraduate Researcher <span className="font-extrabold">building pipelines</span> for educational research.
          </p>
          <p>
          Data Analyst <span className="font-extrabold">engineering data workflows</span> for business analytics.
          </p>
          <p>
          Cognitive Scientist <span className="font-extrabold">exploring</span> the intersection of mind and data.
          </p>
        </div>
      </section>

      <nav className="mt-10 flex w-72 flex-col items-end gap-4 md:fixed md:bottom-12 md:right-1 md:w-80">
        <Link href="/about" className="group w-full whitespace-nowrap text-left leading-none text-lg font-semibold text-white/90 hover:text-white py-2">
          <span className="block">About</span>
          <span className="mt-1 block h-1 w-40 bg-white/60 transition-colors group-hover:bg-white md:w-48" />
        </Link>
        <Link href="/projects" className="group w-full whitespace-nowrap text-left leading-none text-lg font-semibold text-white/90 hover:text-white py-2">
          <span className="block">Work</span>
          <span className="mt-1 block h-1 w-40 bg-white/60 transition-colors group-hover:bg-white md:w-48" />
        </Link>
        <a href="https://www.linkedin.com/in/kylepfischer/" target="_blank" className="group w-full whitespace-nowrap text-left leading-none text-lg font-semibold text-white/90 hover:text-white py-2">
          <span className="block">LinkedIn</span>
          <span className="mt-1 block h-1 w-40 bg-white/60 transition-colors group-hover:bg-white md:w-48" />
        </a>
        <a href="https://github.com/kylefischer" target="_blank" className="group w-full whitespace-nowrap text-left leading-none text-lg font-semibold text-white/90 hover:text-white py-2">
          <span className="block">GitHub</span>
          <span className="mt-1 block h-1 w-40 bg-white/60 transition-colors group-hover:bg-white md:w-48" />
        </a>
        <a href="https://drive.google.com/file/d/1dFHuBJOwdZDabRv69quVn8fVO7545Kbp/view?usp=sharing" className="group w-full whitespace-nowrap text-left leading-none text-lg font-semibold text-white/90 hover:text-white py-2">
          <span className="block">Resume</span>
          <span className="mt-1 block h-1 w-40 bg-white/60 transition-colors group-hover:bg-white md:w-48" />
        </a>
      </nav>
    </main>
  );
}
