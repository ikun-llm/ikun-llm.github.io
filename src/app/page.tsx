import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Features from "@/components/Features";
import FeatureCards from "@/components/FeatureCards";
import Testimonials from "@/components/Testimonials";
import Trust from "@/components/Trust";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <Features />
      <FeatureCards />
      <Testimonials />
      <Trust />
      <CtaBanner />
      <Footer />
    </>
  );
}
