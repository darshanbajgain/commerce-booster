import DPDImage from "../../assets/deliveryvan/dpdVan.png";

const ShippingDeliveryUI = () => {
    return (
        <div className="w-full bg-bgForSeacrchBorder px-4 py-8 flex flex-col items-center mt-[64px]">
            <h2 className="text-[28px] text-center font-bold mb-4">DPD delivery already available!</h2>
            <p className="text-[16px] text-center mb-6 p-2">
                Choose DPD for speed, ease and convenience.<br/>
                Track your parcel in real time. This will help you plan your work while waiting for the parcel.
            </p>
            <button className="bg-blue-600 text-white text-[14px] px-8 py-4 rounded-full hover:bg-blue-700">
                Show more
            </button>
            <div className="mt-6">
                <img src={DPDImage} alt="DPD Van" className="mx-auto" />
            </div>
        </div>
    );
};

export default ShippingDeliveryUI;