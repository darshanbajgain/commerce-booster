import CartIcon from '../../assets/header_assets/cart.svg';

const Cart = () => {
    return (
        // <button className="relative">
        //     <img src={CartIcon} alt="Cart" className=" w-[24px] h-[24px] text-indigo-600" />
        //     <span className="absolute w-[16px] h-[16px] -top-2 -right-2 inline-flex items-center justify-center px-2 py-2 text-[10px]
        //              text-red-100 bg-bgForCartPop rounded-full">45</span>
        // </button>
        <button className="relative">
            <img src={CartIcon} alt="Cart" className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 text-[10px] bg-bgForCartPop w-[16px] h-[16px] flex flex-col items-center  rounded-full text-white ">45</span>
        </button>
    )
}

export default Cart