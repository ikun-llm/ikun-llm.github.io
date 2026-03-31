import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ModelCards from "@/components/ModelCards";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <ModelCards />
      <Community />
      <Footer />
    </>
  );
}
