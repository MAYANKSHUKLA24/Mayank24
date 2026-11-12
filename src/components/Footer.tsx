import Link from "next/link";
import { site } from "@/data/site";
import PillCta from "./PillCta";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="dark-section px-5 pt-24 pb-10 sm:px-8 lg:px-12">
      <div className="section-rule text-off-white mb-10">
        <span className="text-eyebrow text-sm sm:text-base flex-1">Contact</span>
        <span className="circle-btn h-9 w-9 border border-off-white/25 text-off-white" aria-hidden>
          ↗
        </span>
      </div>

      <Reveal>
        <h2 className="text-display text-[9vw] sm:text-[5.5vw] lg:text-[4.2vw] leading-[0.95] text-off-white max-w-4xl">
          Got a brand that needs a bigger idea?
        </h2>
        <h2 className="text-display text-[9vw] sm:text-[5.5vw] lg:text-[4.2vw] leading-[0.95] text-royal-soft max-w-4xl">
          Let&rsquo;s make something worth talking about.
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <PillCta href={`mailto:${site.email}`} variant="royal">
            Let&rsquo;s Talk
          </PillCta>
          <PillCta href={site.linkedin} variant="dark">
            LinkedIn
          </PillCta>
          <PillCta href={`mailto:${site.email}`} variant="dark">
            Email
          </PillCta>
        </div>
      </Reveal>

      <div className="mt-20 grid grid-cols-1 gap-8 border-t border-off-white/10 pt-10 text-sm sm:grid-cols-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-off-white/35 mb-2">Navigate</p>
          <nav className="flex flex-col gap-2 text-off-white/70">
            <Link href="/work" className="hover:text-off-white w-fit">Work</Link>
            <Link href="/experiences" className="hover:text-off-white w-fit">Experiences</Link>
            <Link href="/talent" className="hover:text-off-white w-fit">Talent</Link>
            <Link href="/about" className="hover:text-off-white w-fit">About</Link>
          </nav>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-off-white/35 mb-2">Reach</p>
          <div className="flex flex-col gap-2 text-off-white/70">
            <span>{site.email}</span>
            <span>{site.phone}</span>
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-off-white/35 mb-2">Currently</p>
          <p className="text-off-white/70">{site.role}, {site.company}</p>
        </div>
      </div>

      <div className="relative mt-16 select-none overflow-hidden h-[11vw] min-h-[56px]">
        <span className="absolute -left-1 -bottom-3 text-display text-[13vw] leading-none text-off-white/[0.07] whitespace-nowrap">
          MAYANK SHUKLA
        </span>
      </div>

      <div className="flex flex-col gap-3 text-[11px] tracking-[0.08em] uppercase text-off-white/30 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Mayank Shukla</span>
        <span>Brand Partnerships × Culture × Experiences</span>
      </div>
    </footer>
  );
}
