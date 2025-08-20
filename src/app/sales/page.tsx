import BestSellers from "../components/bestSellers";
import RecentlyViewed from "../components/recentlyViewed";
import SaleBanner from "../components/saleBanner";
import SalesHero from "../components/salesHero";
import SalesMarquee from "../components/salesMarquee";
import ServiceFeatures from "../components/serviceFeatures";
import TopCollection from "../components/topCollection";
import TopOffers from "../components/topOffers";

export default function Sales() {
    return (
      <>
      <div>
        <SalesHero />
        <SalesMarquee />
        <TopOffers />
        <SaleBanner />
        <BestSellers />
        <ServiceFeatures />
      </div>
      </>
    );
  }
  