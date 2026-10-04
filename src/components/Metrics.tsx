import { metrics } from "@/data/metrics";
import AnimatedNumber from "./AnimatedNumber";
import Reveal from "./Reveal";

export default function Metrics() {
  return (
    <section className="bg-off-white px-5 py-24 sm:px-8 lg:px-12">
      <Reveal>
        <p className="text-eyebrow text-xs text-royal mb-12">Scale, Verified</p>
      </Reveal>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.08}>
            <div className="border-t border-black/15 pt-5">
              <AnimatedNumber
                value={m.value}
                className="text-display block text-[16vw] sm:text-[8vw] lg:text-[5.5vw] leading-[0.95]"
              />
              <p className="mt-3 text-sm sm:text-base tracking-wide text-black/60">
                {m.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
