import CompareIcon from "../../assets/header_assets/compare.svg";

const Compare = () => {
  return (
    <div className="relative">
      <img src={CompareIcon} alt="Compare" className="w-[18px] h-[18px]" />
      <span className="absolute -top-2 -right-3 text-[10px] bg-bgForCartPop w-[18px] h-[18px]  flex flex-col items-center rounded-full text-white ">
        <p className="leading-[14px] my-auto mx-auto">3</p>
      </span>
    </div>
  );
};

export default Compare;
