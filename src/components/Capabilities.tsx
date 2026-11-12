"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const items = [
  { title: "Brand Partnerships", body: "Connecting brands with the culture and platforms where their audience already is." },
  { title: "Talent Partnerships", body: "Matching the right face, voice or creator to the right brand moment." },
  { title: "Branded Content", body: "Content built to carry a brand message without feeling like an ad." },
  { title: "Entertainment Marketing", body: "Marketing built for the pace and culture of OTT, film and music." },
  { title: "Experiential Marketing", body: "Activations and on-ground experiences that make a brand tangible." },
  { title: "Partner Marketing", body: "Co-marketing across ecosystems, OEMs, platforms and distribution partners." },
  { title: "Integrated Campaigns", body: "Strategy that holds together across ATL, BTL, digital and print." },
  { title: "Social & Content", body: "Social-first storytelling that builds audiences, not just posts." },
  { title: "Events", body: "End-to-end event execution, from booth to stage to closing ceremony." },
  { title: "Client Strategy", body: "Translating a brand's objective into a plan the whole team can execute." },
];

export default function Capabilities({ index = "05" }: { index?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="dark-section px-5 py-24 sm:px-8 lg:px-12">
      <SectionHeader index={index} title="Where Brands Meet Culture" dark className="mb-6" />

      <Reveal delay={0.1}>
        <h2 className="text-display text-[9vw] sm:text-[5vw] lg:text-[3.4vw] text-off-white mb-12 max-w-3xl">
          Ten disciplines, one job: make the brand matter.
        </h2>
      </Reveal>

      <div className="border-t border-off-white/10">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.title} className="border-b border-off-white/10">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center gap-5 py-5 text-left group"
              >
                <span className="text-eyebrow text-[11px] text-off-white/35 w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`flex-1 font-semibold text-lg sm:text-2xl transition-colors ${
                    isOpen ? "text-royal-soft" : "text-off-white group-hover:text-off-white/70"
                  }`}
                >
                  {item.title}
                </span>
                <span
                  className={`circle-btn h-9 w-9 border border-off-white/20 text-off-white shrink-0 ${
                    isOpen ? "rotate-45 bg-royal border-royal" : ""
                  }`}
                  aria-hidden
                >
                  ↗
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pl-[52px] max-w-xl text-off-white/55 text-sm sm:text-base">
                      {item.body}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
