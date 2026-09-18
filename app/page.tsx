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