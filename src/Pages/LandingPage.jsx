import AdBoxes from "../component/LandingPageComponent/AdBoxes/AdBoxes";
import AdvertiseBox from "../component/LandingPageComponent/AdvertiseBox/AdvertiseBox";
import AdvertiseMiddleBox from "../component/LandingPageComponent/AdvertiseBoxMiddle/AdvertiseMiddleBox";
import EventsComponent from "../component/LandingPageComponent/EventSection/EventsComponent";
import Footer from "../component/LandingPageComponent/Footer/Footer";
import Header from "../component/LandingPageComponent/Header/Header";
import HintSection from "../component/LandingPageComponent/HintSection/HintSection";
import RecommendedCategory from "../component/LandingPageComponent/RecommendedCategory/RecommendedCategory";
import RecommendedProduct from "../component/LandingPageComponent/RecommendedProducts/RecommenedProduct";
import ShippingDeliveryUI from "../component/LandingPageComponent/ShippingUI/ShippingDeliveryUI";

const LandingPage = () => {
  return (
    <div className="font-baiserSquare font-normal text-bodycolor">
      <Header />
      <RecommendedProduct />
      <AdvertiseBox />
      <RecommendedCategory />
      <HintSection />
      <AdvertiseMiddleBox />
      <AdBoxes />
      <ShippingDeliveryUI />
      <EventsComponent />
      <Footer />
    </div>
  )
}

export default LandingPage