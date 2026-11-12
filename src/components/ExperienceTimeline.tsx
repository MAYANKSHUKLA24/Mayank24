import { experiences } from "@/data/experiences";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function ExperienceTimeline({ index = "04" }: { index?: string }) {
  const sequence = [...experiences, ...experiences, ...experiences];

  return (
    <section className="bg-off-white py-24">
      <div className="px-5 sm:px-8 lg:px-12">
        <SectionHeader index={index} title="Experiences" className="mb-6" />
        <Reveal delay={0.1}>
          <h2 className="text-display text-[9vw] sm:text-[5vw] lg:text-[3.4vw] leading-[0.95] max-w-3xl mb-14">
            Where the work left the feed and entered the room.
          </h2>
        </Reveal>
      </div>

      <div className="relative border-y border-black/10 bg-charcoal py-10 overflow-hidden">
        <div className="flex w-max animate-[ticker_36s_linear_infinite] items-center gap-16">
          {sequence.map((exp, i) => (
            <div key={`${exp.id}-${i}`} className="flex items-center gap-16 shrink-0">
              <div>
                <span className="text-eyebrow text-[11px] text-royal-soft block mb-1">{exp.year}</span>
                <span className="text-display normal-case tracking-tight text-off-white text-3xl sm:text-4xl">
                  {exp.title}
                </span>
              </div>
              <span className="text-royal-soft/50 text-xl" aria-hidden>
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
