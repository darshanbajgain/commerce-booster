import CheckoutButton from "./CheckoutButton";

const OrderSummary = () => {
  const buttonText = "Checkout";

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="flex justify-start gap-x-2 mb-2">
        <span>Subtotal:</span>
        <span>$</span>
      </div>
      <div className="flex justify-start gap-x-2 mb-2">
        <span>Shipping:</span>
        <span>free</span>
      </div>
      <div className="flex justify-end items-center gap-x-10 mb-2">
        <div className="flex justify-around gap-x-2">
          <span>Total:</span>
          <span>$</span>
        </div>
        <CheckoutButton buttonText={buttonText} />
      </div>
    </div>
  );
};

export default OrderSummary;
