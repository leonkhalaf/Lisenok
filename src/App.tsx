import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/HeroSection";
import { TwoPathsSection } from "@/sections/TwoPathsSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { GallerySection } from "@/sections/GallerySection";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/sections/Footer";

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-cream">
      <Header />
      <main>
        <HeroSection />
        <TwoPathsSection />
        <ProcessSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
