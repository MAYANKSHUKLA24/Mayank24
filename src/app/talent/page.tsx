import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TalentLibrary from "@/components/TalentLibrary";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Talent × Brand | Mayank Shukla",
  description: "A library of talent bytes built for brand and title campaigns.",
};

export default function TalentPage() {
  return (
    <>
      <Navigation />
      <main className="bg-off-white pt-32 pb-24 px-5 sm:px-8 lg:px-12">
        <SectionHeader index="00" title="Talent x Brand" className="mb-8" />
        <Reveal delay={0.1}>
          <h1 className="text-display text-[10vw] sm:text-[6vw] lg:text-[4.2vw] leading-[0.95] max-w-4xl">
            Where talent becomes the brand message.
          </h1>
          <p className="mt-6 max-w-xl text-black/60 font-light">
            Talent Byte scripts and attribution content built for Amazon Prime Video title
            launches across the Smart TV OEM ecosystem.
          </p>
        </Reveal>
        <div className="mt-16">
          <TalentLibrary />
        </div>
      </main>
      <Footer />
    </>
  );
}
