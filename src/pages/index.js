import Footer from "@/components/shared/Footer";
import MiniHeader from "@/components/shared/MiniHeader";
import Faq from "@/views/Home/Faq";
import Offer from "@/views/Home/Offer";
import WhoWeAre from "@/views/Home/WhoWeAre";
import WhyChooseUs from "@/views/Home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <header>
        <MiniHeader />
      </header>
      <Offer />
      <WhyChooseUs />
      <WhoWeAre />
      <Faq />
      <Footer />
    </>
  );
}
