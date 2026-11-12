import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import PillCta from "@/components/PillCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact | Mayank Shukla",
  description: "Get in touch with Mayank Shukla for brand partnerships and experiences.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="bg-off-white pt-32 pb-24 px-5 sm:px-8 lg:px-12">
        <SectionHeader index="00" title="Let's Talk" className="mb-8" />
        <Reveal delay={0.1}>
          <h1 className="text-display text-[11vw] sm:text-[7vw] lg:text-[5vw] leading-[0.92] max-w-4xl">
            Tell me about the brand. I&rsquo;ll bring the idea.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center gap-4">
            <PillCta href={`mailto:${site.email}`} variant="royal">
              {site.email}
            </PillCta>
            <PillCta href={site.linkedin} variant="outline">
              LinkedIn
            </PillCta>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-10 text-sm text-black/40">{site.phone}</p>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
