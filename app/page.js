import { LangProvider } from "@/components/LangProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Advice from "@/components/Advice";
import Influencers from "@/components/Influencers";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Advice />
        <Influencers />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </LangProvider>
  );
}
