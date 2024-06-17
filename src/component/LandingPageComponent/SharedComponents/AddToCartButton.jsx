import arrowDown from "/assets/recommended_section/arrowdown.svg";
import arrowDownBlue from "/assets/recommended_section/arrowndownblue.svg";

const AddToCartButton = ({ handleAddToCart, product, isAddedToCart }) => {
  return (
    <button
      className={`mt-[8px] mb-2 text-sm font-[500] px-6 rounded-3xl w-full font-baiserSquare
                    flex-row items-center justify-center  space-x-1 
                    ${isAddedToCart ? "hidden" : "flex"}
                    ${
                      product.expiry
                        ? "bg-white text-addToCartBtn border-addToCartBtn border-2 py-2 font-[400]"
                        : "bg-addToCartBtn text-white hover:bg-blue-400 py-2 "
                    }`}
      onClick={handleAddToCart}
    >
      <span className="p-1 text-[14px]  lg:text-[16px] font-baiserSquare leading-4 ">
        Add to cart
      </span>
      <span className="p-1">
        <img
          className={`${product.expiry ? "hidden" : "block"}`}
          src={arrowDown}
        />
        <img
          className={`${product.expiry ? "block" : "hidden"}`}
          src={arrowDownBlue}
        />
      </span>
    </button>
  );
};

export default AddToCartButton;
