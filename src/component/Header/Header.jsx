// import Logo from '../../assets/header_assets/logo.svg';
import mainLogo from "../../assets/header_assets/icon/logo.svg";
import secondaryLogo from "../../assets/header_assets/icon/commercebooster.svg";
import MenuIcon from '../../assets/header_assets/menu.svg';
import Cart from './Cart';
import SearchBar from './SearchBar';

import DropDown from './DropDown';
import Details from './Details';
import MenuBarDesktop from './MenuBarDesktop';



const Header = () => {

    return (
        <header className='flex-col bg-bgForHeader'>
                <div className="hidden md:flex justify-around items-center bg-gray-100 p-2 text-sm">
                    <DropDown />
                    <Details />
                </div>

            <div className="bg-white px-[16px] pt-[33px] pb-[16px] md:py-1 flex justify-between md:justify-around items-center">
                <button className="md:hidden">
                    <img src={MenuIcon} alt="Menu" className="w-[24px] h-[24px]" />
                </button>
                <div className="flex justify-center items-center">
                    {/* <img src={Logo} alt="CommerceBooster Logo" className="h-6 w-auto md:w-[228px] md:h-[28px]" /> */}
                    <img src={mainLogo} alt="Logo" className="h-6 w-[29.11px] md:w-[228px] md:h-[28px]" />
                    <img src={secondaryLogo} alt="CommerceBooster" className="h-[12.03px] w-[160.84px] md:w-[228px] md:h-[28px]" />

                </div>
                <div className="hidden md:flex md:flex-row md:justify-center md:p-4">
                    <SearchBar />
                </div>
                <div className="hidden font-bold md:flex hover:bg-white hover:text-bgForOrderBtn bg-bgForOrderBtn hover:border-[1px] border-bgForOrderBtn rounded-[30px] md:w-[198px] text-center text-white text-sm py-[16px] px-[32px]">
                    Quick Order Form
                </div>
                <div className="md:hidden lg:hidden">
                    <Cart />
                </div>
            </div>
            <div className="flex flex-row justify-center md:hidden p-4">
                <SearchBar />
            </div>
            <MenuBarDesktop />

        </header>

    );
};


export default Header;

