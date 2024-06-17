import arrowDown from "/assets/recommended_section/arrowdown.svg";

const UpdateCartButton = ({ isAddedToCart }) => {
  return (
    <button
      className={`mt-[8px] mb-2 text-sm lg:text-[16px] font-[500] font-baiserSquare px-6 py-2 bg-addToCartBtn text-white rounded-3xl w-full flex flex-row items-center justify-center hover:bg-blue-400 space-x-1 ${
        isAddedToCart ? "block" : "hidden"
      }`}
    >
      <span className="p-1 text-[14px]  lg:text-[16px] leading-4 ">
        Update Cart
      </span>
      <span className="p-1">
        <img className="text-white" src={arrowDown} />
      </span>
    </button>
  );
};

export default UpdateCartButton;
