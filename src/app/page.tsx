import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { PerformanceSection } from "@/components/sections/PerformanceSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeaturedWorkSection />
      <PerformanceSection />
      <Footer />
    </>
  );
}
