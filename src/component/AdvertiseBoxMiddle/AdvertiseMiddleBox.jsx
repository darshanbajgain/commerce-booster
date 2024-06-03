import rawimage from "../../assets/advertisement_assests/rawmaterials.png";
const AdvertiseMiddleBox = () => {
    return (
        <div className="flex flex-col px-4 gap-y-2 mt-[64px]">
            <div className="flex justify-center">
                <img className="w-full object-cover" src={rawimage} />
            </div>
            <div className="bg-bgForOrderBtn flex flex-col px-4 py-10 gap-[10px] items-center justify-center rounded-md">
                <div className="flex justify-center text-[24px] text-white font-bold">
                    Buy this bundle and save $100!
                </div>
                <p className="text-white text-[18px]">
                    Longer sentence, for just two lines and it could be very very long
                </p>
                <div className="mt-[24px] flex justify-center">
                    <button className="bg-white px-[32px] py-[16px] rounded-full text-[14px] font-medium text-bgForOrderBtn">Bundle this buy</button>
                </div>
            </div>

        </div>
    )
}

export default AdvertiseMiddleBox