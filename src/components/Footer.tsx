import Link from "next/link";
import { site } from "@/data/site";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="dark-section px-5 pt-28 pb-10 sm:px-8 lg:px-12">
      <Reveal>
        <h2 className="text-display text-[10vw] sm:text-[6vw] lg:text-[4.6vw] leading-[0.95] text-off-white max-w-4xl">
          Got a brand that needs a bigger idea?
        </h2>
        <h2 className="text-display text-[10vw] sm:text-[6vw] lg:text-[4.6vw] leading-[0.95] text-royal-soft italic max-w-4xl">
          Let&rsquo;s make something worth talking about.
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-12 flex flex-wrap items-center gap-5">
          <MagneticButton
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-royal px-7 py-3.5 text-xs tracking-[0.18em] uppercase text-off-white hover:bg-royal-soft transition-colors"
          >
            Let&rsquo;s Talk
          </MagneticButton>
          <MagneticButton
            href={site.linkedin}
            className="inline-flex items-center gap-2 rounded-full border border-off-white/30 px-7 py-3.5 text-xs tracking-[0.18em] uppercase text-off-white hover:border-royal-soft hover:text-royal-soft transition-colors"
          >
            LinkedIn
          </MagneticButton>
          <MagneticButton
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-off-white/30 px-7 py-3.5 text-xs tracking-[0.18em] uppercase text-off-white hover:border-royal-soft hover:text-royal-soft transition-colors"
          >
            Email
          </MagneticButton>
        </div>
      </Reveal>

      <div className="mt-24 flex flex-col gap-6 border-t border-off-white/10 pt-8 text-xs tracking-[0.1em] uppercase text-off-white/40 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Mayank Shukla</span>
        <nav className="flex flex-wrap gap-6">
          <Link href="/work" className="hover:text-off-white/80">Work</Link>
          <Link href="/experiences" className="hover:text-off-white/80">Experiences</Link>
          <Link href="/talent" className="hover:text-off-white/80">Talent</Link>
          <Link href="/about" className="hover:text-off-white/80">About</Link>
        </nav>
        <span>{site.email}</span>
      </div>
    </footer>
  );
}
