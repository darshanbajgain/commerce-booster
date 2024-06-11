
import rawimage from "../../assets/advertisement_assests/rawmaterials.png";

const AdvertiseMiddleBox = () => {
    return (
        <div className="flex flex-col px-4 lg:px-0 lg gap-y-2 mt-[64px] sm:mt-[32px] sm:flex-row sm:gap-y-4 md:mx-[40px] lg:mx-[88px] sm:gap-x-3 lg:gap-x-5  md:max-h-[300px] lg:max-h-[350px]">
            <div className="flex justify-center md:w-1/2">
                <img className="w-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-105" src={rawimage} alt="Advertisement" />
            </div>
            <div className="bg-bgForOrderBtn flex flex-col px-4 py-10 gap-[10px] justify-center rounded-md md:w-1/2 md:mx-0 lg:mx-0 sm:px-6 sm:py-8">
                <div className=" mx-0 lg:mx-[64px]">
                    <div className="flex justify-start text-[24px] sm:text-[25px] md:text-[26px] lg:text-[28px] text-white font-baiserCircle font-bold mb-4">
                        Buy this bundle and save $100!
                    </div>
                    <p className="text-white text-[18px] sm:text-[18.5px] md:text-[19px] lg:text-[20px]  md:max-w-[300px] lg:max-w-[344px]">
                        Longer sentence, for just two lines and it could be very very long
                    </p>
                    <div className="mt-[24px] flex justify-center md:justify-start lg:justify-start  transform transition-transform duration-300 ease-in-out hover:scale-105  ">
                        <button className="bg-white px-[32px] py-[16px] rounded-full text-[14px] leading-4 sm:text-[14px] md:text-[14px] lg:text-[16px] font-medium text-bgForOrderBtn">
                            Buy this bundle
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvertiseMiddleBox;
