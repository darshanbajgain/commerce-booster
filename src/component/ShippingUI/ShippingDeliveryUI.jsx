import DPDImage from "../../assets/deliveryvan/dpdVan.png";

const ShippingDeliveryUI = () => {
    return (
        <div className="w-full bg-bgForSeacrchBorder px-4 py-8 flex flex-col items-center mt-[64px] lg:flex-row lg:justify-between lg:px-[90px]">
            <div className="flex flex-col items-center lg:items-start ">
                <h2 className="text-[28px] text-center lg:text-start font-bold mb-4 max-w-[515px] font-baiserCircle">DPD delivery already available!</h2>
                <p className="text-[16px] text-center lg:text-start mb-6 p-2 lg:p-0 max-w-[408px]">
                    Choose DPD for speed, ease and convenience.<br className="lg:hidden" />
                    Track your parcel in real time. This will help you plan your work while waiting for the parcel.
                </p>
                <button className="bg-blue-600 text-white text-[14px] lg:text-[16px] px-8 py-4 rounded-full hover:bg-blue-700 max-w-[149px]
                transform transition-transform duration-300 ease-in-out hover:scale-105">
                    Show more
                </button>
            </div>
            <div className="mt-6">
                <img src={DPDImage} alt="DPD Van" className="mx-auto" />
            </div>
        </div>
    );
};

export default ShippingDeliveryUI;