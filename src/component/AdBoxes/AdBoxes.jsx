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
        <div className="flex w-full flex-col items-center justify-center mt-[64px]">

            {
                adObjects.map(ad => (
                    <div key={ad.id} className="flex bg-orange-500 flex-row mx-[16px] mt-[8px] rounded-lg">
                        <div className=" px-[24px] py-[64px] flex flex-col items-center">
                            <div className=" text-white w-[124px] h-[62px] text-[16px] flex flex-col justify-center font-bold  ">
                                <p>{ad.toolbarname}</p>
                            </div>
                        </div>
                        <img src={ad.image} className="w-[171px] h-[193px]" />
                    </div>
                ))
            }



        </div>
    )
}

export default AdBoxes