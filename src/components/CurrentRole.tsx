import { site, currentRoleCapabilityTags } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function CurrentRole() {
  return (
    <section className="charcoal-section px-5 py-24 sm:px-8 lg:px-12">
      <SectionHeader index="00" title="Currently" dark className="mb-10" />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="font-semibold text-2xl text-off-white/90">{site.company}</p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={0.1}>
            <h2 className="text-display text-[8vw] sm:text-[5vw] lg:text-[3.6vw] text-off-white leading-[0.95] normal-case tracking-tight">
              {site.role}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base sm:text-lg font-light text-off-white/60">
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
