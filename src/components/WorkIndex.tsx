"use client";

import { useMemo, useState } from "react";
import { projects, filterTags, type FilterTag } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function WorkIndex() {
  const [active, setActive] = useState<FilterTag | "ALL">("ALL");

  const filtered = useMemo(() => {
    if (active === "ALL") return projects;
    return projects.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-14">
        <button
          onClick={() => setActive("ALL")}
          className={`rounded-full border px-4 py-2 text-[11px] tracking-[0.16em] uppercase transition-colors ${
            active === "ALL"
              ? "border-royal bg-royal text-off-white"
              : "border-black/15 text-black/60 hover:border-black/40"
          }`}
        >
          All
        </button>
        {filterTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={`rounded-full border px-4 py-2 text-[11px] tracking-[0.16em] uppercase transition-colors ${
              active === tag
                ? "border-royal bg-royal text-off-white"
                : "border-black/15 text-black/60 hover:border-black/40"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <Reveal>
          <p className="text-black/50 text-sm">No projects under this filter yet.</p>
        </Reveal>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
