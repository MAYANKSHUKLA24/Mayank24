"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import BrandLogo from "./BrandLogo";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const isLight = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <div
          className={`relative aspect-[4/3.6] rounded-2xl p-5 flex flex-col justify-between transition-transform duration-400 ease-out group-hover:-translate-y-1 ${
            isLight ? "bg-off-white text-black" : "bg-charcoal text-off-white border border-off-white/10"
          }`}
        >
          <div className="flex items-start justify-between">
            <span className={`text-eyebrow text-[10px] ${isLight ? "text-black/40" : "text-off-white/40"}`}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={`text-eyebrow text-[10px] ${isLight ? "text-black/40" : "text-off-white/40"}`}>
              {project.year}
            </span>
          </div>

          <div className="flex-1 flex items-center justify-center py-6">
            <div className="flex h-20 w-full max-w-[82%] items-center justify-center rounded-xl bg-white p-4 shadow-sm">
              <BrandLogo
                name={project.client}
                domain={project.brandfetchDomain}
                theme="light"
                imgClassName="max-h-14 max-w-full"
                className="font-semibold text-lg text-center text-black/80"
              />
            </div>
          </div>

          <div className="flex items-end justify-between gap-3">
            <div>
              <p className={`text-[10px] uppercase tracking-[0.1em] ${isLight ? "text-black/35" : "text-off-white/35"}`}>
                {project.category}
              </p>
              <p className={`mt-1 text-xs ${isLight ? "text-black/55" : "text-off-white/55"}`}>{project.role}</p>
            </div>
            <span
              className={`circle-btn h-9 w-9 shrink-0 transition-transform group-hover:rotate-45 ${
                isLight ? "bg-black text-off-white" : "bg-off-white/10 text-off-white"
              }`}
              aria-hidden
            >
              ↗
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
