"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";
import Reveal from "./Reveal";

export default function ExperienceTimeline() {
  const railRef = useRef<HTMLDivElement>(null);

  function scrollByAmount(dir: 1 | -1) {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  }

  return (
    <section className="bg-off-white px-5 py-28 sm:px-8 lg:px-12">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
        <Reveal>
          <p className="text-eyebrow text-xs text-royal mb-4">Experiences</p>
          <h2 className="text-display text-[10vw] sm:text-[6vw] lg:text-[4.4vw] leading-[0.95] max-w-3xl">
            Where the work left the feed and entered the room.
          </h2>
        </Reveal>
        <div className="flex gap-2">
          <button
            onClick={() => scrollByAmount(-1)}
            aria-label="Scroll experiences left"
            className="h-10 w-10 rounded-full border border-black/15 flex items-center justify-center hover:border-royal hover:text-royal transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => scrollByAmount(1)}
            aria-label="Scroll experiences right"
            className="h-10 w-10 rounded-full border border-black/15 flex items-center justify-center hover:border-royal hover:text-royal transition-colors"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
      >
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: i * 0.06 }}
            className="w-[82vw] sm:w-[48vw] lg:w-[30vw] shrink-0 snap-start rounded-2xl border border-black/10 p-8"
          >
            <span className="text-eyebrow text-[11px] text-royal">{exp.year}</span>
            <h3 className="text-display text-3xl mt-3 mb-2">{exp.title}</h3>
            <p className="text-xs uppercase tracking-[0.1em] text-black/40 mb-5">{exp.org}</p>
            <p className="text-sm text-black/65 leading-relaxed mb-6">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-charcoal/[0.05] px-3 py-1 text-[10px] tracking-[0.12em] uppercase text-black/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
