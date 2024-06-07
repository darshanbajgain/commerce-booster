import arrowUp from "../../assets/footer_assets/keyboard_arrow_down.svg";

const OtherDropDowns = ({ title, children }) => {

    return (
        <div className=" m-0 p-4  border-gray-200 shadow-sm lg:mt-2 lg:shadow-none">
            <div className=" flex flex-row justify-between items-center">
                <h3
                    className="font-bold cursor-pointer text-[16px]  lg:text-[20px]"
                >
                    {title}
                </h3>
                <img className="lg:hidden" src={arrowUp} />
            </div>
            <ul className="hidden lg:block lg:mx-0 lg:mt-4">{children}</ul>
        </div>
    )
}

export default OtherDropDowns;
