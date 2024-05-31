import pointRightArrow from "../../assets/recommended_section/rightarrow.svg"

const CommonLink = ({message}) => {
    return (
        <p className=" w-full flex flex-row items-center justify-center text-[14px] text-PhoneColor mt-[20px]">
            {message}
            <span className="mx-[8px]">
                <img src={pointRightArrow} className="w-4 h-4" />
            </span>
        </p>
    )
}

export default CommonLink