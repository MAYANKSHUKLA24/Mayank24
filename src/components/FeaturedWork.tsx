import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function FeaturedWork() {
  const featured = projects.filter((p) => p.status === "case-study").slice(0, 4);

  return (
    <section id="work" className="bg-off-white px-5 py-28 sm:px-8 lg:px-12">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
        <Reveal>
          <p className="text-eyebrow text-xs text-royal mb-4">Selected Work</p>
          <h2 className="text-display text-[10vw] sm:text-[6vw] lg:text-[4.4vw] leading-[0.95] max-w-3xl">
            Partnerships built to be talked about.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-royal hover:gap-3 transition-all"
          >
            View Work Index <span aria-hidden>↗</span>
          </Link>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {featured.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
