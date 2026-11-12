import SectionHeader from "./SectionHeader";
import PillCta from "./PillCta";
import Reveal from "./Reveal";

export default function TalentTeaser() {
  return (
    <section className="charcoal-section px-5 py-20 sm:px-8 lg:px-12">
      <SectionHeader index="03" title="Talent x Brand" dark className="mb-8" />
      <div className="flex flex-wrap items-center justify-between gap-8">
        <Reveal>
          <h2 className="text-display text-[8vw] sm:text-[4.5vw] lg:text-[3vw] leading-tight text-off-white max-w-xl">
            A library of talent bytes built for brand and title campaigns.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <PillCta href="/talent" variant="dark">
            Explore Talent Library
          </PillCta>
        </Reveal>
      </div>
    </section>
  );
}
