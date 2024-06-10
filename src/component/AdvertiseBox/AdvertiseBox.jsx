import drillMachine from "../../assets/advertisement_assests/drill.png";
const AdvertiseBox = () => {
  return (
    <div className="bg-adBox mt-[64px] px-[16px] py-[24px] lg:py-[16px] lg:px-[88px] flex lg:flex-row lg:justify-between flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex items-center justify-center">
          <img className="w-[64px] h-[80px] lg:w-[113px] lg:h-[140px]" src={drillMachine} />
        </div>
        <div className="flex lg:ml-[40px] items-center justify-center text-[48px] lg:text-[80px] text-white font-bold">
          -20%
        </div>
        <div className="flex text-[36px] lg:text-[46px] lg:ml-[16px] text-white font-bold justify-center">
          on power tools
        </div>
      </div>
      <div className="mt-[24px] lg:mt-0">
        <button className=" bg-white px-[32px] py-[16px] rounded-full text-[14px] font-medium text-bgForOrderBtn
        transform transition-transform duration-300 ease-in-out hover:scale-105 ">Check offer</button>
      </div>
    </div>
  )
}

export default AdvertiseBox