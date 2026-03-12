import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Projects from "@/components/sections/Projects";
import { BackgroundRippleEffect } from "@/components/ui/BackgroundRippleEffect";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center relative overflow-hidden">
      <BackgroundRippleEffect rows={10} cellSize={60} />
      <Navbar />
      <Hero />
      <Journey />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
