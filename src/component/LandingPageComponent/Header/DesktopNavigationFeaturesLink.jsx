import Cart from "../SharedComponents/Cart";
import Compare from "../SharedComponents/Compare";
import Favourite from "../SharedComponents/Favourite";

const DesktopNavigationFeaturesLink = () => {
  return (
    <div className="flex items-center text-sm">
      <div className="flex flex-col items-center mr-8">
        <Compare />
        <span className=" text-PhoneColor mt-1 font-[600]">COMPARE</span>
      </div>
      <div className="flex flex-col items-center mr-5">
        <Favourite />
        <span className=" text-PhoneColor mt-1 font-[600]">FAVORITES</span>
      </div>
      <div className="flex flex-col items-center w-[116px] relative">
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
