import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CareSection from "@/components/CareSection";
import FeatureSection from "@/components/FeatureSection";
import ForArtisanSection from "@/components/ForArtisanSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DownloadAppSection from "@/components/DownloadAppSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="fixed left-0 top-0 z-[9999] bg-red-600 px-4 py-2 text-white">
        DEPLOY TEST — SEPTEMBER 18
      </div>

      <Header />
      <main>
        <HeroSection />
        <CareSection />
        <FeatureSection />
        <ForArtisanSection />
        <TestimonialsSection />
        <DownloadAppSection />
      </main>
      <Footer />
    </>
  );
}