import Link from "next/link";
import Reveal from "./Reveal";

export default function TalentTeaser() {
  return (
    <section className="charcoal-section px-5 py-20 sm:px-8 lg:px-12">
      <div className="flex flex-wrap items-center justify-between gap-8">
        <Reveal>
          <p className="text-eyebrow text-xs text-royal-soft mb-3">Talent × Brand</p>
          <h2 className="text-display text-[8vw] sm:text-[4.5vw] lg:text-[3vw] leading-tight text-off-white max-w-xl">
            A library of talent bytes built for brand and title campaigns.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/talent"
            className="inline-flex items-center gap-2 rounded-full border border-off-white/25 px-6 py-3 text-xs tracking-[0.16em] uppercase text-off-white hover:border-royal-soft hover:text-royal-soft transition-colors"
          >
            Explore Talent Library <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
