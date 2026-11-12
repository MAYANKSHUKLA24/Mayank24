import { careerTimeline } from "@/data/career";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function CareerTimeline({ index = "06" }: { index?: string }) {
  return (
    <section className="dark-section px-5 py-24 sm:px-8 lg:px-12">
      <SectionHeader index={index} title="Career" dark className="mb-6" />
      <Reveal>
        <h2 className="text-display text-[9vw] sm:text-[5vw] lg:text-[3.4vw] leading-[0.95] text-off-white max-w-3xl mb-16">
          Five years, one throughline: brands and culture.
        </h2>
      </Reveal>

      <div className="space-y-0 divide-y divide-off-white/10 border-y border-off-white/10 max-w-4xl">
        {careerTimeline.map((role) => (
          <Reveal key={role.id}>
            <div
              className={`grid grid-cols-1 gap-4 py-10 sm:grid-cols-12 sm:gap-8 ${
                role.current ? "py-14" : ""
              }`}
            >
              <div className="sm:col-span-3">
                <span
                  className={`text-xs tracking-[0.14em] uppercase ${
                    role.current ? "text-royal-soft" : "text-off-white/40"
                  }`}
                >
                  {role.dateRange}
                </span>
                {role.current && (
                  <span className="ml-2 inline-block rounded-full bg-royal px-2 py-0.5 text-[9px] tracking-[0.12em] uppercase text-off-white align-middle">
                    Current
                  </span>
                )}
              </div>
              <div className="sm:col-span-9">
                <h3
                  className={`text-display leading-tight text-off-white ${
                    role.current ? "text-[8vw] sm:text-[4vw] lg:text-[2.8vw]" : "text-2xl sm:text-3xl"
                  }`}
                >
                  {role.company}
                </h3>
                <p
                  className={`mt-2 ${
                    role.current ? "text-lg text-off-white/80" : "text-sm text-off-white/60"
                  }`}
                >
                  {role.role}
                </p>
                <p className="mt-3 max-w-xl text-sm text-off-white/50 leading-relaxed">
                  {role.summary}
                </p>
                {role.current && (
                  <ul className="mt-5 space-y-2 list-disc list-inside marker:text-royal-soft">
                    {role.bullets.map((b, i) => (
                      <li key={i} className="text-sm text-off-white/60 leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
