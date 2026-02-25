import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import SliderSection from "@/components/home/SliderSection";
import Services from "@/components/home/Services";
import Highlight from "@/components/home/Highlight";
import CTA from "@/components/home/CTA";
import Navbar from "@/components/layout/Navbar";
import { getDictionary } from "@/lib/i18n";
export default async function HomePage({ params }) {

    const dict = await getDictionary(params.locale);

  return (
    <>
    {/* <Navbar/> */}
    <main>
       <Hero dict={dict} />
    <Features dict={dict} />
      <SliderSection />
      <Services />
      <Highlight />
      <CTA />
    </main>
    </>
  );
}