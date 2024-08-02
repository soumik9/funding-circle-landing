import Footer from "@/components/shared/Footer";
import MiniHeader from "@/components/shared/MiniHeader";
import Offer from "@/views/Home/Offer";
import WhyChooseUs from "@/views/Home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <header>
        <MiniHeader />
      </header>
      <Offer />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
