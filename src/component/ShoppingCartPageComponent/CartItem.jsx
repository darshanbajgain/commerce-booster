const CartItem = ({ item, removeFromCart, updateQuantity }) => {
    const increaseQuantity = () => updateQuantity(item.id, item.quantity + 1);
    const decreaseQuantity = () => updateQuantity(item.id, item.quantity - 1);
  
    return (
      <div className="border-t border-gray-200 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center justify-center lg:justify-start flex-shrink-0">
            <img src={item.image} alt={item.name} className="w-32 lg:w-44 mx-auto lg:mx-0" />
          </div>
          <div className="text-center lg:text-left flex-1">
            <h5 className="font-semibold text-lg lg:text-xl leading-4 text-[#0C0C0C] font-baiserCircle">
              {item.name}
            </h5>
            <h6 className="font-medium text-sm lg:text-lg mt-2 leading-4 text-phoneColor font-baiserSquare">
              ${parseFloat(item.price).toFixed(2)}
            </h6>
          </div>
          <div className="flex items-center justify-center gap-2 mb-4 lg:mb-0">
            <button
              onClick={decreaseQuantity}
              className="group rounded-lg px-2 w-8 h-8 border border-gray-200 text-[#0C0C0C] flex items-center justify-center transition-all duration-500 hover:border-gray-300 hover:bg-gray-50"
            >
              -
            </button>
            <input
              type="text"
              className="border rounded-lg border-gray-200 w-8 h-8 outline-none text-[#0C0C0C] font-[400] text-[14px] text-center bg-transparent"
              value={item.quantity}
              readOnly
            />
            <button
              onClick={increaseQuantity}
              className="group rounded-lg px-2 w-8 h-8 border border-gray-200 text-[#0C0C0C] flex items-center justify-center transition-all duration-500 hover:border-gray-300 hover:bg-gray-50"
            >
              +
            </button>
          </div>
          <div className="flex flex-col items-center lg:items-end flex-1">
            <h6 className="text-indigo-600 font-baiserSquare font-bold text-sm lg:text-xl leading-4">
              ${(parseFloat(item.price) * item.quantity).toFixed(2)}
            </h6>
            <button
              className="text-red-600 font-baiserSquare font-bold text-sm lg:text-lg leading-4 mt-2"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CartItem;
  