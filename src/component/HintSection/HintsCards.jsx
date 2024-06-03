import pointRightArrow from "../../assets/recommended_section/rightarrow.svg"


const HintsCards = ({hint}) => {

    const readlink = "Read more";
    
    return (
        <div className="mt-6 shadow-sm rounded-sm">
            <div className="flex flex-col">
                <img src={hint.image} />
                <div>
                    <h3 className="font-bold py-4 px-2">{hint.title}</h3>
                    <p className="px-2">{hint.description}</p>
                </div>
            </div>
            <p className=" w-full px-2 py-4 font-medium flex flex-row items-center jus text-[14px] text-PhoneColor mb-2">
                {readlink}
                <span className="mx-[8px]">
                    <img src={pointRightArrow} className="w-4 h-4" />
                </span>
            </p>
        </div>

    )
}

export default HintsCards