"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";
import { site } from "@/data/site";

const headlineWords = ["I", "MAKE", "BRANDS"];
const headlineWords2 = ["PART", "OF", "THE", "CULTURE."];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="dark-section relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-5 pt-28 pb-10 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute -right-24 top-1/3 h-[60vmax] w-[60vmax] rounded-full border border-off-white/40" />
        <div className="absolute -left-32 bottom-0 h-[40vmax] w-[40vmax] rounded-full border border-off-white/30" />
      </div>

      <motion.div style={{ y, opacity }} className="flex-1 flex flex-col justify-center">
        <p className="text-eyebrow text-xs text-royal-soft mb-6">
          Brand Partnerships × Experiences × Entertainment × Culture × Talent
        </p>

        <h1 className="text-display text-[13vw] sm:text-[9vw] lg:text-[7.2vw] text-off-white">
          {headlineWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.22em]"
            >
              {word}
            </motion.span>
          ))}
          <br />
          {headlineWords2.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`inline-block mr-[0.22em] ${word === "CULTURE." ? "text-royal-soft italic" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-base sm:text-lg text-off-white/70 font-light"
        >
          {site.subline}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="flex flex-wrap items-center gap-5 pt-10"
      >
        <MagneticButton
          href="#work"
          className="inline-flex items-center gap-2 rounded-full border border-off-white/30 px-6 py-3 text-xs tracking-[0.18em] uppercase text-off-white hover:border-royal-soft hover:text-royal-soft transition-colors"
        >
          Enter the Work <span aria-hidden>↓</span>
        </MagneticButton>
        <MagneticButton
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-royal px-6 py-3 text-xs tracking-[0.18em] uppercase text-off-white hover:bg-royal-soft transition-colors"
        >
          Let&rsquo;s Talk <span aria-hidden>→</span>
        </MagneticButton>
      </motion.div>
    </section>
  );
}
