"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PillCta from "./PillCta";
import { site } from "@/data/site";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="dark-section relative flex min-h-[100svh] flex-col overflow-hidden px-5 pt-28 pb-10 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-[70vmax] w-[70vmax] rounded-full bg-royal/20 blur-[120px]" />

      <motion.div style={{ y, opacity }} className="relative flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-6">
          <p className="text-eyebrow text-[11px] sm:text-xs text-off-white/50 max-w-xs">
            Brand Partnerships / Experiences / Entertainment / Culture / Talent
          </p>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden sm:flex items-center gap-5 rounded-2xl border border-off-white/15 px-5 py-4 shrink-0"
          >
            <div>
              <p className="text-xl font-bold text-off-white">5+</p>
              <p className="text-[10px] uppercase tracking-[0.12em] text-off-white/45">Years</p>
            </div>
            <div className="h-8 w-px bg-off-white/15" />
            <div>
              <p className="text-xl font-bold text-royal-soft">6</p>
              <p className="text-[10px] uppercase tracking-[0.12em] text-off-white/45">Agencies &amp; Studios</p>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 flex flex-col justify-center py-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-display text-[13vw] sm:text-[8.5vw] lg:text-[6.6vw] text-off-white"
          >
            I make brands
            <br />
            part of the <span className="text-royal-soft">culture.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 max-w-lg text-base sm:text-lg text-off-white/55 font-light"
          >
            {site.subline}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center gap-4"
        >
          <PillCta href="#work" variant="light">
            Enter the Work
          </PillCta>
          <PillCta href="/contact" variant="royal">
            Let&rsquo;s Talk
          </PillCta>
        </motion.div>
      </motion.div>

      <div className="relative mt-10 select-none overflow-hidden h-[9vw] min-h-[48px]">
        <span className="absolute -left-1 -top-2 text-display text-[13vw] leading-none text-off-white/[0.06] whitespace-nowrap">
          MAYANK SHUKLA
        </span>
      </div>
    </section>
  );
}
