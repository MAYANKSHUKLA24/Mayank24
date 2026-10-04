"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Talent } from "@/data/talents";

export default function TalentCard({ talent, index = 0 }: { talent: Talent; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.06 }}
      className="group rounded-2xl border border-black/10 p-6 hover:border-royal transition-colors"
    >
      <div className="flex flex-wrap gap-2 mb-5">
        {talent.category.map((c) => (
          <span
            key={c}
            className="rounded-full bg-charcoal/[0.05] px-3 py-1 text-[10px] tracking-[0.14em] uppercase text-black/50"
          >
            {c}
          </span>
        ))}
      </div>
      <h3 className="text-display text-2xl leading-snug mb-2">{talent.name}</h3>
      <p className="text-sm text-black/60 mb-4">{talent.brandRelevance}</p>
      <dl className="space-y-2 text-xs text-black/50 mb-5">
        <div className="flex gap-2">
          <dt className="shrink-0 uppercase tracking-[0.1em] text-black/35">Format</dt>
          <dd>{talent.format}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="shrink-0 uppercase tracking-[0.1em] text-black/35">Byte</dt>
          <dd>{talent.byte}</dd>
        </div>
      </dl>
      <Link
        href={`/work/${talent.projectSlug}`}
        className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-royal group-hover:gap-3 transition-all"
      >
        {talent.project} <span aria-hidden>→</span>
      </Link>
    </motion.div>
  );
}
