import Hero from "@/components/home/Hero";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import BrandStory from "@/components/home/BrandStory";
import ServicesOverview from "@/components/home/ServicesOverview";
import PortfolioHighlights from "@/components/home/PortfolioHighlights";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";
import StoreTour from "@/components/home/StoreTour";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BrandStory />
      <FeaturedCollections />
      <ServicesOverview />
      <PortfolioHighlights />

      <StoreTour />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
