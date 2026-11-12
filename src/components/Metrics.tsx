"use client";

import { metrics } from "@/data/metrics";
import AnimatedNumber from "./AnimatedNumber";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const cardStyles = [
  "bg-gradient-to-br from-royal to-[#0d1366] text-off-white",
  "bg-off-white text-black",
  "bg-charcoal text-off-white border border-off-white/10",
];

const barHeights = [38, 62, 45, 80, 55, 70, 40, 90, 60, 50, 75, 48];

export default function Metrics() {
  const [m1, m2, m3, m4] = metrics;

  return (
    <section className="dark-section px-5 py-24 sm:px-8 lg:px-12">
      <SectionHeader index="01" title="Scale, Verified" dark className="mb-14" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[m1, m2, m3].map((m, i) => (
          <Reveal key={m.label} delay={i * 0.08}>
            <div className={`rounded-2xl p-7 h-full flex flex-col justify-between min-h-[220px] ${cardStyles[i]}`}>
              <AnimatedNumber value={m.value} className="text-display block text-[14vw] sm:text-[5.5vw] lg:text-[3.2vw] leading-none" />
              <p className="mt-6 text-sm opacity-70">{m.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-4 rounded-2xl border border-off-white/10 p-7 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <AnimatedNumber value={m4.value} className="text-display block text-[14vw] sm:text-[4vw] lg:text-[2.4vw] leading-none text-off-white" />
            <p className="mt-3 text-sm text-off-white/50">{m4.label}</p>
          </div>
          <div className="flex items-end gap-1 h-16 shrink-0">
            {barHeights.map((h, i) => (
              <div
                key={i}
                className={`w-2 rounded-full ${i % 3 === 0 ? "bg-royal-soft" : "bg-off-white/15"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
