

import rawimage from "../../assets/advertisement_assests/rawmaterials.png";

const AdvertiseMiddleBox = () => {
    return (
        <div className="flex flex-col px-4 gap-y-2 mt-[64px] md:flex-row md:mx-[40px] lg:mx-[88px] md:gap-x-3 lg:gap-x-5 md:max-h-[300px] lg:max-h-[350px]">
            <div className="flex justify-center md:w-1/2">
                <img className="w-full object-cover" src={rawimage} alt="Advertisement" />
            </div>
            <div className="bg-bgForOrderBtn flex flex-col px-4 py-10 gap-[10px] justify-center rounded-md md:w-1/2 md:mx-0 lg:mx-0">
                <div className="flex justify-center md:justify-start text-[24px] md:text-[26px] lg:text-[28px] text-white font-bold md:mx-8 lg:mx-16">
                    Buy this bundle and save $100!
                </div>
                <p className="text-white text-[18px] md:text-[19px] lg:text-[20px] md:mx-8 lg:mx-16 md:max-w-[300px] lg:max-w-[344px]">
                    Longer sentence, for just two lines and it could be very very long
                </p>
                <div className="mt-[24px] flex justify-center md:justify-start lg:justify-start">
                    <button className="bg-white px-[32px] py-[16px] rounded-full text-[14px] md:text-[15px] lg:text-[16px] font-medium text-bgForOrderBtn md:mx-8 lg:mx-16">
                        Buy this bundle
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdvertiseMiddleBox;
