
export const AdCard = ({ad}) => {
    return (
        <div  className="flex bg-orange-500 flex-row mx-[16px] mt-[8px] rounded-lg  md:w-[343px] lg:w-full">
            <div className=" px-[24px] py-[64px] flex flex-col items-center  lg:w-1/2">
                <div className=" text-white w-[124px] h-[62px] lg:w-[156px] xl:text-[20px] text-[16px] flex flex-col justify-center font-bold  ">
                    <p>{ad.toolbarname}</p>
                </div>
            </div>
            <img src={ad.image} className="w-[171px] h-[193px]  lg:w-1/2" />
        </div>
    )
}
