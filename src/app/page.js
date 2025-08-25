import HeroSection from "@/components/sections/HeroSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TravelPlansSection from "@/components/sections/TravelPlansSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="hero-section">
        <HeroSection />
      </section>
      <DestinationsSection />
      <HowItWorksSection />
      <TravelPlansSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}