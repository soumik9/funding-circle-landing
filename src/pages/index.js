import Footer from "@/components/shared/Footer";
import MiniHeader from "@/components/shared/MiniHeader";
import Navbar from "@/components/shared/Navbar";
import Estimate from "@/views/Home/Estimate";
import Faq from "@/views/Home/Faq";
import Finding from "@/views/Home/Finding";
import Hero from "@/views/Home/Hero";
import HowItWorks from "@/views/Home/HowItWorks";
import HowWeHelp from "@/views/Home/HowWeHelp";
import Offer from "@/views/Home/Offer";
import Sponsers from "@/views/Home/Sponsers";
import WhoWeAre from "@/views/Home/WhoWeAre";
import WhyChooseUs from "@/views/Home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 bg-white z-50 shadow">
        <MiniHeader />
        <Navbar />
      </header>
      <Hero />
      <Offer />
      <WhyChooseUs />
      <Estimate />
      <HowItWorks />
      <HowWeHelp />
      <WhoWeAre />
      <Faq />
      <Finding />
      <Sponsers />
      <Footer />
    </>
  );
}
