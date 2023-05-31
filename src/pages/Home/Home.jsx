import PromoOffer from "../../components/home/PromoOffer";
import Recommended from "../../components/home/Recommended";
import Place from "../../components/home/Place";
import Platform from "../../components/home/Platform";
import Review from "../../components/home/Review";
import Slider from "../../components/home/Slider";
import Categories from "../../components/home/Categories";

function Home() {
  return (
    <>
      <Slider />
      <Categories />
      <PromoOffer />
      <Recommended />
      <Place />
      <Platform />
      <Review />
    </>
  );
}

export default Home;
