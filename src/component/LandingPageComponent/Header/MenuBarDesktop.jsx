import DesktopNavigation from "./DesktopNavigation";
import DesktopNavigationFeaturesLink from "./DesktopNavigationFeaturesLink";

const MenuBarDesktop = () => {
  return (
    <div className=" hidden lg:flex h-[82px] px-[88px] lg:px-[44px] xl:px-[88px] justify-between items-center bg-bgForHeader">
      <DesktopNavigation />
      <DesktopNavigationFeaturesLink />
    </div>
  );
};

export default MenuBarDesktop;
