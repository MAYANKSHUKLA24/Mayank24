"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Talent } from "@/data/talents";
import DriveVideo from "./DriveVideo";

export default function TalentCard({ talent, index = 0 }: { talent: Talent; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.06 }}
      className="group rounded-2xl border border-black/10 p-5 hover:border-royal transition-colors"
    >
      <DriveVideo fileId={talent.driveFileId} title={talent.name} className="mb-5" />

      <h3 className="text-display normal-case tracking-normal font-semibold text-xl leading-snug mb-2">{talent.name}</h3>
      <p className="text-sm text-black/60 mb-4">{talent.brandRelevance}</p>

      <Link
        href={`/work/${talent.projectSlug}`}
        className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-royal group-hover:gap-3 transition-all"
      >
        {talent.project} <span aria-hidden>→</span>
      </Link>
    </motion.div>
  );
}
