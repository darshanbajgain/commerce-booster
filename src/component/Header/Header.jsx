import Logo from '../../assets/header_assets/logo.svg';
import CartIcon from '../../assets/header_assets/cart.svg';
import MenuIcon from '../../assets/header_assets/menu.svg';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <header className='flex-col bg-bgForHeader'>
            <div className="bg-white p-4 pt-6 flex justify-between items-center">
                <button className="p-2">
                    <img src={MenuIcon} alt="Menu" className="w-6 h-6" />
                </button>
                <div className="flex justify-center">
                    <img src={Logo} alt="CommerceBooster Logo" className="h-6 w-auto" />
                </div>
                <button className="p-2 relative">
                    <img src={CartIcon} alt="Cart" className=" w-5 h-5 text-indigo-600" />
                    <span className="absolute w-[12px] h-[12px] top-1 right-0 inline-flex items-center justify-center px-2 py-2 text-xs
                     text-red-100 text-xss bg-bgForCartPop rounded-full">45</span>
                </button>
            </div>
            <div className="flex flex-row justify-center p-4">
                <SearchBar />
            </div>
        </header>

    );
};


export default Header;
