import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Experiences | Mayank Shukla",
  description: "Cultural experiences and brand activations: IFFI, National Film Awards, FICCI Frames and more.",
};

export default function ExperiencesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <ExperienceTimeline index="00" />
      </main>
      <Footer />
    </>
  );
}
