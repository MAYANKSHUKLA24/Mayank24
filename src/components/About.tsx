import Reveal from "./Reveal";
import AbstractArt from "./AbstractArt";
import SectionHeader from "./SectionHeader";

const domains = [
  "OTT",
  "Entertainment",
  "Consumer Brands",
  "Technology",
  "Beauty",
  "Events",
  "Partner Marketing",
  "Brand Experiences",
  "Brand Strategy",
  "Social Media Marketing",
  "Content Marketing",
];

export default function About({ index = "06" }: { index?: string }) {
  return (
    <section className="bg-off-white px-5 py-24 sm:px-8 lg:px-12">
      <SectionHeader index={index} title="About" className="mb-10" />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="text-display text-[16vw] sm:text-[8vw] lg:text-[5.5vw] leading-[0.92]">
              I&rsquo;m Mayank.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <AbstractArt variant="rings" className="mt-12 w-36 text-royal/30 hidden lg:block" />
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <p className="text-2xl sm:text-3xl font-light leading-snug text-black/85 max-w-xl">
              I work at the intersection of brands, entertainment, culture and people.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-black/60 leading-relaxed">
              Five years across OTT, beauty, petrochemicals and consumer electronics:
              client servicing, partner marketing for a Smart TV OEM ecosystem, building
              a brand from the ground up at IFFI, and now brand partnerships for Rolling
              Stone India. Same job, different clients: take a brand into a room it
              wouldn&rsquo;t get into on its own.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-2">
              {domains.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-black/15 px-4 py-2 text-[11px] tracking-[0.14em] uppercase text-black/60"
                >
                  {d}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
