import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PublicationsSection from "@/components/PublicationsSection";
import TeachingSection from "@/components/TeachingSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-14">
        <HeroSection />
        <AboutSection />
        <PublicationsSection />
        <TeachingSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
