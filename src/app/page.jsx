import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Reviews from "@/components/Reviews";
import ClinicPhotos from "@/components/ClinicPhotos";
import Services from "@/components/Services";
import About from "@/components/About";
import ForWhom from "@/components/ForWhom";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import ScrollToHash from "@/components/ScrollToHash";

export default function Home() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Hero />
      <Stats />
      <Reviews />
      <ClinicPhotos />
      <Services />
      <About />
      <ForWhom />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWA />
      <CookieConsent />
      <AccessibilityWidget />
    </>
  );
}
