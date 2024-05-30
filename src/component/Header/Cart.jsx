import CartIcon from '../../assets/header_assets/cart.svg';

const Cart = () => {
    return (
        <button className="p-2 relative">
            <img src={CartIcon} alt="Cart" className=" w-5 h-5 text-indigo-600" />
            <span className="absolute w-[12px] h-[12px] top-1 right-0 inline-flex items-center justify-center px-2 py-2 text-xs
                     text-red-100 text-xss bg-bgForCartPop rounded-full">45</span>
        </button>
    )
}

export default Cart