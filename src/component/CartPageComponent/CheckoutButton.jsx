const CheckoutButton = ({ buttonText }) => {

    return (
    <button
      className=" text-white px-[16px] py-[8px] font-baiserSquare text-[12px] lg:text-[14px] font-medium bg-bgForOrderBtn
  transform transition-transform duration-300 ease-in-out hover:scale-105 leading-4 "
    >
      {buttonText}
    </button>
  );
};

export default CheckoutButton;
