import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact | Mayank Shukla",
  description: "Get in touch with Mayank Shukla for brand partnerships and experiences.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="bg-off-white pt-40 pb-24 px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="text-eyebrow text-xs text-royal mb-4">Let&rsquo;s Talk</p>
          <h1 className="text-display text-[13vw] sm:text-[8vw] lg:text-[6vw] leading-[0.92] max-w-4xl">
            Tell me about the brand. I&rsquo;ll bring the idea.
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
            <MagneticButton
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-royal px-7 py-4 text-sm tracking-[0.1em] uppercase text-off-white hover:bg-royal-soft transition-colors"
            >
              {site.email}
            </MagneticButton>
            <MagneticButton
              href={site.linkedin}
              className="inline-flex items-center gap-2 rounded-full border border-black/15 px-7 py-4 text-sm tracking-[0.1em] uppercase hover:border-royal hover:text-royal transition-colors"
            >
              LinkedIn ↗
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-10 text-sm text-black/40">{site.phone}</p>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
