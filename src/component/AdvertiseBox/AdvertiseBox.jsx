import drillMachine from "../../assets/advertisement_assests/drill.png";
const AdvertiseBox = () => {
  return (
    <div className="bg-bgForOrderBtn mt-[64px] px-[16px] py-[24px] flex flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <img className="w-[64px] h-[80px]" src={drillMachine} />
        </div>
        <div className="flex items-center justify-center text-[48px] text-white font-bold">
          -20%
        </div>
      </div>
      <div className="flex text-[36px] text-white font-bold justify-center">
        on power tools
      </div>
      <div className="mt-[24px]">
        <button className=" bg-white px-[32px] py-[16px] rounded-full text-[14px] font-medium text-bgForOrderBtn">Check offer</button>
      </div>
    </div>
  )
}

export default AdvertiseBox