"use client";

import { useMemo, useState } from "react";
import { talents, talentCategories, type TalentCategory } from "@/data/talents";
import TalentCard from "./TalentCard";
import Reveal from "./Reveal";

export default function TalentLibrary() {
  const [active, setActive] = useState<TalentCategory | "ALL">("ALL");

  const filtered = useMemo(() => {
    if (active === "ALL") return talents;
    return talents.filter((t) => t.category.includes(active));
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
        {talentCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-[11px] tracking-[0.16em] uppercase transition-colors ${
              active === cat
                ? "border-royal bg-royal text-off-white"
                : "border-black/15 text-black/60 hover:border-black/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <Reveal>
          <p className="text-black/50 text-sm">No talent bytes under this filter yet.</p>
        </Reveal>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((talent, i) => (
            <TalentCard key={talent.slug} talent={talent} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
