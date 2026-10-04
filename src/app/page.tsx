import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrandTicker from "@/components/BrandTicker";
import CurrentRole from "@/components/CurrentRole";
import Metrics from "@/components/Metrics";
import FeaturedWork from "@/components/FeaturedWork";
import TalentTeaser from "@/components/TalentTeaser";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <BrandTicker />
        <CurrentRole />
        <Metrics />
        <FeaturedWork />
        <TalentTeaser />
        <ExperienceTimeline />
        <Capabilities />
        <About />
      </main>
      <Footer />
    </>
  );
}
