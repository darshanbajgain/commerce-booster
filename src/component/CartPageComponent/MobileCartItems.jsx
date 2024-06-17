import delBtn from "/assets/cart_page_assets/delete-button-svgrepo-com.svg";

const MobileCartItems = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-md bg-white">
      <div className="flex items-center mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 rounded-md mr-4"
        />
        <div>
          <p className="font-bold text-lg line-clamp-2">{product.name}</p>
        </div>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-500">Price:</span>
        <span className="font-medium">${product.price}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-500">Quantity:</span>
        <div className="flex items-center">
          <button className="bg-gray-200 text-gray-600 rounded px-2  hover:bg-gray-300">-</button>
          <span className="px-4">{product.quantity}</span>
          <button className="bg-gray-200 text-gray-600 rounded px-2 hover:bg-gray-300">+</button>
        </div>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-500">Total:</span>
        <span className="font-medium">${product.price * product.quantity}</span>
      </div>
      <div className="flex justify-center">
        <button className=" text-white rounded-full p-2">
          <img src={delBtn} alt="Remove" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default MobileCartItems;
