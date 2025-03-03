export const AdCard = ({ ad }) => {
  return (
    <div
      className="flex bg-orange-500 flex-row mx-[16px] mt-[8px] rounded-lg lg:mx-0  md:w-[343px] lg:w-full
        transform transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <div className=" px-[24px] py-[64px] flex flex-col items-center  lg:w-1/2">
        <div className=" text-white w-[124px] h-[62px] lg:h-full lg:w-[156px] xl:text-[20px] lg:text-[18px] text-[16px] flex flex-col justify-center font-bold font-baiserCircle ">
          <p>{ad.toolbarname}</p>
        </div>
      </div>
      <img
        src={ad.image}
        className="w-[171px] h-[193px] lg:h-[230px]  lg:w-1/2"
      />
    </div>
  );
};
