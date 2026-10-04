"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import BrandLogo from "./BrandLogo";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="relative aspect-[4/3.2] overflow-hidden rounded-xl bg-charcoal transition-transform duration-500 ease-out group-hover:-translate-y-1">
          <div className="absolute left-4 top-4 right-4 flex items-start justify-between z-10">
            <span className="text-[10px] tracking-[0.16em] uppercase text-off-white/60">
              {project.category}
            </span>
            <span className="text-[10px] tracking-[0.16em] uppercase text-off-white/60">
              {project.year}
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center px-10 py-16">
            <div className="h-12 w-full max-w-[65%] flex items-center justify-center opacity-95 transition-transform duration-500 group-hover:scale-105">
              <BrandLogo
                name={project.client}
                domain={project.brandfetchDomain}
                theme="dark"
                imgClassName="max-h-12 max-w-full"
                className="font-serif text-xl text-off-white/80 text-center"
              />
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pt-10 pb-4 px-4">
            <p className="text-xs text-off-white/55">{project.role}</p>
            <span className="mt-2 inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-royal-soft opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              View Case Study <span aria-hidden>→</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
