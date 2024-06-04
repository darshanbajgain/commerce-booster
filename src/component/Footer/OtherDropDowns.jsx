import arrowUp from "../../assets/footer_assets/keyboard_arrow_down.svg";

const OtherDropDowns = ({title}) => {

    return (
        <div className=" m-0 p-4  border-gray-200 shadow-sm">
            <div className="flex flex-row justify-between items-center">
                <h3
                    className="font-bold cursor-pointer text-[16px]"
                >
                    {title}
                </h3>
                <img src={arrowUp} />
            </div>
        </div>
    )
}

export default OtherDropDowns;
