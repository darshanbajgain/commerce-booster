import CompareIcon from "../../assets/header_assets/compare.svg";
import FavoritesIcon from "../../assets/header_assets/star.svg";
// import CartIcon from "../../assets/header_assets/cart.svg";
import Cart from "../CommonComponents/Cart";

const DesktopNavigationFeaturesLink = () => {
  return (
    <div className="flex items-center text-sm">
      <div className="flex flex-col items-center mr-8">
        <div className="relative">
          <img src={CompareIcon} alt="Compare" className="w-[18px] h-[18px]" />
          <span className="absolute -top-2 -right-3 text-[10px] bg-bgForCartPop w-[18px] h-[18px]  flex flex-col items-center rounded-full text-white ">
            <p className="leading-[14px] my-auto mx-auto">3</p>
          </span>
        </div>
        <span className=" text-PhoneColor mt-1 font-[600]">COMPARE</span>
      </div>
      <div className="flex flex-col items-center mr-5">
        <div className="relative">
          <img src={FavoritesIcon} alt="Favorites" className="w-[18px] h-[19px]" />
          <span className="absolute -top-2 -right-3 text-[10px] bg-bgForCartPop w-[18px] h-[18px] flex flex-col items-center rounded-full text-white ">
          <p className="leading-[14px] my-auto mx-auto">7</p>
          </span>
        </div>
        <span className=" text-PhoneColor mt-1 font-[600]">FAVORITES</span>
      </div>
      <div className="flex flex-col items-center w-[116px] relative">
        {/* <div className="relative">
          <img src={CartIcon} alt="Cart" className="w-[18px] h-[18px]" />
          <span className="absolute -top-2 -right-3 text-[10px] bg-bgForCartPop w-[18px] h-[18px] flex flex-col items-center rounded-full text-white ">
          <p className="leading-[14px] my-auto mx-auto">45</p>
          </span>
        </div> */}
        <Cart />
        <span className="text-PhoneColor mt-0 text-center font-[600]">
          CART
        </span>
        <span className="text-PhoneColor text-center absolute -bottom-4 right-1 text-[14px]">
          Add Cart Name
        </span>
      </div>
    </div>
  );
};

export default DesktopNavigationFeaturesLink;
