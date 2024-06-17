const BasicCommonButton = ({ buttonText }) => {

    return (
    <button
      className=" bg-white px-[32px] py-[16px] rounded-full font-baiserSquare text-[14px] lg:text-[16px] font-medium text-bgForOrderBtn
  transform transition-transform duration-300 ease-in-out hover:scale-105 leading-4 "
    >
      {buttonText}
    </button>
  );
};

export default BasicCommonButton;
