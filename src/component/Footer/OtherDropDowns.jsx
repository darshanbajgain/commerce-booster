import { useState } from "react";
import arrowUp from "../../assets/footer_assets/keyboard_arrow_up.svg";
import arrowDown from "../../assets/footer_assets/keyboard_arrow_down.svg";

const OtherDropDowns = ({ title, children }) => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className=" m-0 p-4  border-gray-200 shadow-sm lg:mt-2 lg:shadow-none">
            <div className=" flex flex-row justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}>
                <h3
                    className="font-bold cursor-pointer text-[16px]  lg:text-[20px]"
                >
                    {title}
                </h3>
                <img className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`} src={arrowUp} alt="arrow up" />
                <img className={`lg:hidden ${isOpen ? 'hidden' : 'block'}`} src={arrowDown} alt="arrow down" />
            </div>
            <ul className={`lg:mx-0 mt-4 ${isOpen ? 'block' : 'hidden'} md:block`}>{children}</ul>
        </div>
    )
}

export default OtherDropDowns;
