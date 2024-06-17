import BasicCommonButton from "../SharedComponents/BasicCommonButton";
import drillMachine from "/assets/advertisement_assests/drill.png";

const AdvertiseBox = () => {
  const buttonText = "Check offer";
  console.log("this is a button text from ad component" + buttonText);
  return (
    <div className="bg-adBox mt-[64px] px-[16px] py-[24px] lg:py-[16px] lg:px-[88px] flex lg:flex-row lg:justify-between flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex items-center justify-center">
          <img
            className="w-[64px] h-[80px] lg:w-[113px] lg:h-[140px]"
            src={drillMachine}
          />
        </div>
        <div className="flex font-baiserCircle lg:ml-[40px] items-center justify-center text-[48px] lg:text-[80px] text-white font-bold">
          -20%
        </div>
        <div className="flex font-baiserCircle text-[36px] lg:text-[46px] lg:ml-[16px] text-white font-bold justify-center">
          on power tools
        </div>
      </div>
      <div className="mt-[24px] lg:mt-0">
       
        <BasicCommonButton buttonText={buttonText} />
      </div>
    </div>
  );
};

export default AdvertiseBox;
