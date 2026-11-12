import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function FeaturedWork() {
  const featured = projects.filter((p) => p.status === "case-study").slice(0, 4);

  return (
    <section id="work" className="bg-off-white px-5 py-24 sm:px-8 lg:px-12">
      <SectionHeader index="02" title="Selected Work" className="mb-6" />

      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <Reveal delay={0.1}>
          <h2 className="text-display text-[9vw] sm:text-[5vw] lg:text-[3.4vw] leading-[0.95] max-w-3xl">
            Partnerships built to be talked about.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs tracking-[0.1em] text-royal hover:gap-3 transition-all"
          >
            View full index <span aria-hidden>↗</span>
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
