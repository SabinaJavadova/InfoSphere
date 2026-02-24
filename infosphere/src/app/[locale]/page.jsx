import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import SliderSection from "@/components/home/SliderSection";
import Services from "@/components/home/Services";
import Highlight from "@/components/home/Highlight";
import CTA from "@/components/home/CTA";
import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <>
    <Navbar/>
    <main>
      <Hero />
      <Features />
      <SliderSection />
      <Services />
      <Highlight />
      <CTA />
    </main>
    </>
  );
}