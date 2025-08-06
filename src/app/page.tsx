import BestSellers from "./components/bestSellers";
import BlackFriday from "./components/blackFriday";
import CollectionHighlightSection from "./components/collectionHighlightSection";
import Hero from "./components/hero";
import MarqueeText from "./components/marqueeText";
import PhilosophySection from "./components/philosophySection";
import ShopByGram from "./components/shopByGram";
import Testimonials from "./components/testimonial";
import TopCollection from "./components/topCollection";
import TrendingOutfitsSection from "./components/trendingOutfitsSection";

export default function Home() {
  return (
    <>
    <div>
      <Hero />
      <TopCollection />
      <PhilosophySection />
      <BestSellers />
      <CollectionHighlightSection />
      <TrendingOutfitsSection />
      <BlackFriday />
      <MarqueeText />
      <Testimonials />
      <ShopByGram />
    </div>
    </>
  );
}
