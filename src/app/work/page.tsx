import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WorkIndex from "@/components/WorkIndex";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Work Index | Mayank Shukla",
  description:
    "Brand partnerships, entertainment marketing, talent and experiential work by Mayank Shukla.",
};

export default function WorkPage() {
  return (
    <>
      <Navigation />
      <main className="bg-off-white pt-32 pb-24 px-5 sm:px-8 lg:px-12">
        <SectionHeader index="00" title="Work Index" className="mb-8" />
        <Reveal delay={0.1}>
          <h1 className="text-display text-[11vw] sm:text-[6.5vw] lg:text-[4.6vw] leading-[0.95] max-w-4xl">
            Partnerships, campaigns and experiences, filtered by what you need.
          </h1>
        </Reveal>
        <div className="mt-16">
          <WorkIndex />
        </div>
      </main>
      <Footer />
    </>
  );
}
