import CartIcon from "../../assets/header_assets/Vector.svg";
import CompareIcon from "../../assets/header_assets/compare.svg";
import FavoritesIcon from "../../assets/header_assets/star.svg";

const DesktopNavigationFeaturesLink = () => {
    return (
        <div className="flex space-x-6 items-center">
            <div className="flex flex-col items-center">
                <img src={CompareIcon} alt="Compare" className="w-6 h-6" />
                <span className=" text-PhoneColor mt-1">COMPARE</span>
            </div>
            <div className="flex flex-col items-center">
                <img src={FavoritesIcon} alt="Favorites" className="w-6 h-6" />
                <span className=" text-PhoneColor mt-1">FAVORITES</span>
            </div>
            <div className="flex flex-col items-center py-2">
                <img src={CartIcon} alt="Cart" className="w-6 h-6" />
                <span className="text-PhoneColor mt-1">CART</span>
                <div className="text-PhoneColor">
                    <span>Active Cart Name</span>
                </div>
            </div>
        </div>
    )
}

export default DesktopNavigationFeaturesLink