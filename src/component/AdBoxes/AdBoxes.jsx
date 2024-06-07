import camPhone from "../../assets/advertisement_assests/camephone.png";
import screwDrvie from "../../assets/advertisement_assests/screwdrive.png";
import windMill from "../../assets/advertisement_assests/windmill.png";



const AdBoxes = () => {

    const adObjects = [
        {
            id: 1,
            toolbarname: "New tool kits!",
            image: screwDrvie
        },
        {
            id: 2,
            toolbarname: "New rules for wind farms!",
            image: windMill
        },
        {
            id: 3,
            toolbarname: "New iPhone now available!",
            image: camPhone
        }
    ]
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center mt-[64px] md:mx-[40px] lg:mx-[44px] xl:mx-[88px]">

            {
                adObjects.map(ad => (
                    <div key={ad.id} className="flex bg-orange-500 flex-row mx-[16px] mt-[8px] rounded-lg lg:w-full">
                        <div className=" px-[24px] py-[64px] flex flex-col items-center  lg:w-1/2">
                            <div className=" text-white w-[124px] h-[62px] lg:w-[156px] xl:text-[20px] text-[16px] flex flex-col justify-center font-bold  ">
                                <p>{ad.toolbarname}</p>
                            </div>
                        </div>
                        <img src={ad.image} className="w-[171px] h-[193px]  lg:w-1/2" />
                    </div>
                ))
            }



        </div>
    )
}

export default AdBoxes