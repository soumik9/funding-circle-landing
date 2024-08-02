import Footer from "@/components/shared/Footer";
import MiniHeader from "@/components/shared/MiniHeader";
import Navbar from "@/components/shared/Navbar";
import Faq from "@/views/Home/Faq";
import Finding from "@/views/Home/Finding";
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
      <Offer />
      <WhyChooseUs />
      <WhoWeAre />
      <Faq />
      <Finding />
      <Sponsers />
      <Footer />
    </>
  );
}
