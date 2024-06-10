import camPhone from "../../assets/advertisement_assests/camephone.png";
import screwDrvie from "../../assets/advertisement_assests/screwdrive.png";
import windMill from "../../assets/advertisement_assests/windmill.png";
import { AdCard } from "./AdCard";



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
        <div className="flex flex-col items-center justify-center mt-[64px]  md:grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:mx-[88px] gap-x-5">

            {
                adObjects.map(ad => (
                    <AdCard key={ad.id} ad={ad} />
                ))
            }



        </div>
    )
}

export default AdBoxes