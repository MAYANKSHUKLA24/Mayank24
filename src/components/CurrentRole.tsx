import { site, currentRoleCapabilityTags } from "@/data/site";
import Reveal from "./Reveal";
import AbstractArt from "./AbstractArt";

export default function CurrentRole() {
  return (
    <section className="charcoal-section px-5 py-28 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="text-eyebrow text-xs text-royal-soft mb-4">Currently</p>
            <p className="font-serif text-2xl italic text-off-white/90">{site.company}</p>
            <AbstractArt variant="waveform" className="mt-10 w-full max-w-[220px] text-off-white/40 hidden lg:block" />
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={0.1}>
            <h2 className="text-display text-[9vw] sm:text-[5.5vw] lg:text-[4vw] text-off-white leading-[0.95]">
              {site.role}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg font-light text-off-white/70">
              Building partnerships between culture-defining brands and Rolling
              Stone India&rsquo;s audience.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-3">
              {currentRoleCapabilityTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-off-white/20 px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-off-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
