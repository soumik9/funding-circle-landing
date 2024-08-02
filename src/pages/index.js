import Footer from "@/components/shared/Footer";
import MiniHeader from "@/components/shared/MiniHeader";
import Offer from "@/views/Home/Offer";

export default function Home() {
  return (
    <>
      <header>
        <MiniHeader />
      </header>
      <Offer />
      <Footer />
    </>
  );
}
