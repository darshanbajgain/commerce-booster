import AdBoxes from "./component/AdBoxes/AdBoxes";
import AdvertiseBox from "./component/AdvertiseBox/AdvertiseBox";
import AdvertiseMiddleBox from "./component/AdvertiseBoxMiddle/AdvertiseMiddleBox";
import EventsComponent from "./component/EventSection/EventsComponent";
import Header from "./component/Header/Header";
import HintSection from "./component/HintSection/HintSection";
import RecommendedCategory from "./component/RecommendedCategory/RecommendedCategory";
import RecommendedProduct from "./component/RecommendedProducts/RecommenedProduct";
import ShippingDeliveryUI from "./component/ShippingUI/ShippingDeliveryUI";

export default function App() {
  return (
    <div>
      <Header />
      <RecommendedProduct />
      <AdvertiseBox/>
      <RecommendedCategory />
      <HintSection />
      <AdvertiseMiddleBox />
      <AdBoxes />
      <ShippingDeliveryUI />
      <EventsComponent />

    </div>
  )
}