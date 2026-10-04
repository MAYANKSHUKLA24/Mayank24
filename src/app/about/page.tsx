import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import About from "@/components/About";
import CareerTimeline from "@/components/CareerTimeline";
import Capabilities from "@/components/Capabilities";

export const metadata: Metadata = {
  title: "About | Mayank Shukla",
  description: "Mayank Shukla: brand partnerships, experiences and culture.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <About />
        <CareerTimeline />
        <Capabilities />
      </main>
      <Footer />
    </>
  );
}
