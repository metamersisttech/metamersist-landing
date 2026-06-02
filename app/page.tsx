import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { FeatureIntro } from "./components/FeatureIntro";
import { FeatureSection } from "./components/FeatureSection";
import { FeatureGrid } from "./components/FeatureGrid";
import { GetStarted } from "./components/GetStarted";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <FeatureIntro />
        <FeatureGrid />
        <FeatureSection />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
