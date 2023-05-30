import PromoOffer from "../../components/home/PromoOffer";
import Recommended from "../../components/home/Recommended";
import Place from "../../components/home/Place";
import Platform from "../../components/home/Platform";
import Review from "../../components/home/Review";
import Slider from "../../components/home/Slider";

function Home() {
  return (
    <>
      <Slider />
      <PromoOffer />
      <Recommended />
      <Place />
      <Platform />
      <Review />
    </>
  );
}

export default Home;
