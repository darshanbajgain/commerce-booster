import AdvertiseBox from "./component/AdvertiseBox/AdvertiseBox";
import Header from "./component/Header/Header";
import RecommendedCategory from "./component/RecommendedCategory/RecommendedCategory";
import RecommendedProduct from "./component/RecommendedProducts/RecommenedProduct";

export default function App() {
  return (
    <div>
      <Header />
      <RecommendedProduct />
      <AdvertiseBox/>
      <RecommendedCategory />
    </div>
  )
}