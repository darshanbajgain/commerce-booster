import mainLogo from "../../assets/header_assets/logotype.svg";
import MenuIcon from "../../assets/header_assets/menu.svg";
import Cart from "../CommonComponents/Cart";
import SearchBar from "./SearchBar";

import DropDown from "./DropDown";
import Details from "./Details";
import MenuBarDesktop from "./MenuBarDesktop";

const Header = () => {
  return (
    <header className="flex flex-col bg-bgForHeader">
      <div className="hidden lg:flex justify-between items-center py-2 lg:px-[44px] xl:px-[88px] text-sm ">
        <DropDown />
        <Details />
      </div>

      <div className="bg-white lg:px-[44px] lg:h-20  xl:px-[88px] px-4 py-4 lg:py-0 flex justify-between lg:gap-x-24 xl:gap-x-24 items-center">
        <button className="md:hidden">
          <img src={MenuIcon} alt="Menu" className="w-6 h-7" />
        </button>
        <div className="flex items-center lg:my-6">
          <img
            src={mainLogo}
            alt="Logo"
            className=" w-[195px] h-[25px] lg:w-[228px] lg:h-[28px]"
          />
        </div>
        <div className="hidden lg:flex lg:flex-row lg:justify-center lg:my-4">
          <SearchBar />
        </div>
        <div
          className="hidden font-[500] lg:flex justify-center items-center hover:bg-white hover:text-bgForOrderBtn my-4 bg-bgForOrderBtn hover:border border-bgForOrderBtn rounded-full 
                 text-center text-white h-[48px] text-[16px] leading-4  py-4 px-8"
        >
          Quick Order Form
        </div>
        <div className="lg:hidden">
          <Cart />
        </div>
      </div>
      <div className="flex flex-row justify-center lg:hidden p-4">
        <SearchBar />
      </div>
      <MenuBarDesktop />
    </header>
  );
};

export default Header;
