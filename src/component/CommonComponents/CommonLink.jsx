import pointRightArrow from "../../assets/recommended_section/rightarrow.svg";

const CommonLink = ({ message }) => {
  return (
    <p
      className=" w-full flex flex-row font-medium items-center justify-center text-[14px] lg:text-[16px] text-PhoneColor mt-[20px] 
        transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
    >
      {message}
      <span className="mx-[8px]">
        <img src={pointRightArrow} className="w-4 h-4" />
      </span>
    </p>
  );
};

export default CommonLink;
