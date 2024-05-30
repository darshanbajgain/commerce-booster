import CartIcon from "../../assets/header_assets/Vector.svg";
import CompareIcon from "../../assets/header_assets/compare.svg";
import FavoritesIcon from "../../assets/header_assets/star.svg";

const DesktopNavigationFeaturesLink = () => {
    return (
        <div className="flex space-x-6 items-center">
            <div className="flex flex-col items-center">
                <div className="relative">
                    <img src={CompareIcon} alt="Compare" className="w-6 h-6" />
                    <span className="absolute -top-1 -right-2 text-xs bg-bgForCartPop w-[18px] h-[18px] flex flex-col items-center rounded-full text-white ">3</span>
                </div>
                <span className=" text-PhoneColor mt-1">COMPARE</span>
            </div>
            <div className="flex flex-col items-center">
                <div className="relative">
                    <img src={FavoritesIcon} alt="Favorites" className="w-6 h-6" />
                    <span className="absolute -top-1 -right-2 text-xs bg-bgForCartPop w-[18px] h-[18px] flex flex-col items-center rounded-full text-white ">3</span>
                </div>
                <span className=" text-PhoneColor mt-1">FAVORITES</span>
            </div>
            <div className="flex flex-col items-center py-2 mt-6">
                <div className="relative">
                    <img src={CartIcon} alt="Cart" className="w-6 h-6" />
                    <span className="absolute -top-1 -right-2 text-xs bg-bgForCartPop w-[18px] h-[18px] flex flex-col items-center rounded-full text-white ">3</span>
                </div>
                <span className="text-PhoneColor mt-1 text-center">CART</span>
                <span className="text-PhoneColor mt-1 text-center">Add Cart Name</span>
            </div>
        </div>
    )
}

export default DesktopNavigationFeaturesLink