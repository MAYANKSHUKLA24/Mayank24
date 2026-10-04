"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/data/site";
import Reveal from "./Reveal";

const sizes = [
  "text-base px-7 py-4",
  "text-sm px-5 py-3",
  "text-lg px-8 py-5",
  "text-sm px-5 py-3",
  "text-base px-6 py-4",
  "text-sm px-5 py-3",
  "text-lg px-8 py-5",
  "text-sm px-5 py-3",
  "text-base px-6 py-4",
  "text-sm px-5 py-3",
];

export default function Capabilities() {
  return (
    <section className="dark-section relative px-5 py-28 sm:px-8 lg:px-12 overflow-hidden">
      <Reveal>
        <h2 className="text-display text-[11vw] sm:text-[6.5vw] lg:text-[5vw] text-off-white leading-[0.92] max-w-4xl">
          Where brands <span className="text-royal-soft italic">meet</span> culture.
        </h2>
      </Reveal>

      <div className="pointer-events-none absolute left-1/2 top-[55%] h-[50vmax] w-[50vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/10 blur-3xl" />

      <div className="relative mt-20 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {capabilities.map((cap, i) => (
          <motion.span
            key={cap}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-full border border-off-white/15 bg-off-white/[0.03] tracking-[0.1em] uppercase text-off-white/85 backdrop-blur-sm hover:border-royal-soft hover:text-royal-soft transition-colors cursor-default ${sizes[i % sizes.length]}`}
          >
            {cap}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
