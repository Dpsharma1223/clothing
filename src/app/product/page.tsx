import Items from "../components/items";
import ProductDetails from "../components/productDetails";
import RecentlyViewed from "../components/recentlyViewed";

export default function Product() {
    return (
      <>
      <div>
        <Items />
        <ProductDetails />
        <RecentlyViewed />
      </div>
      </>
    );
  }
  