
import DesktopNavigation from "./DesktopNavigation";
import DesktopNavigationFeaturesLink from "./DesktopNavigationFeaturesLink";


const MenuBarDesktop = () => {
    return (
        <div className=" hidden md:flex justify-around items-center bg-bgForHeader py-2 ">
            <DesktopNavigation />
            <DesktopNavigationFeaturesLink />
        </div>
    );
}

export default MenuBarDesktop;