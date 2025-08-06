import ProductsList from "../components/productsList";
import ShopHero from "../components/shopHero";
import ShopOptions from "../components/shopOptions";

export default function Shop() {
    return (
      <>
      <div>
        <ShopHero />
        <ShopOptions />
        <ProductsList />
      </div>
      </>
    );
  }
  