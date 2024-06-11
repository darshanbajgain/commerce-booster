import { useState } from "react";
import arrowUp from "../../assets/footer_assets/keyboard_arrow_up.svg";
import arrowDown from "../../assets/footer_assets/keyboard_arrow_down.svg";

const HowToBuy = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="m-0 pb-6 border-gray-200 shadow-sm lg:mt-6 lg:shadow-none">
            <div
                className="m-4 flex flex-row justify-between items-center lg:mt-0"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3
                    className={`font-bold cursor-pointer lg:text-black text-[16px] lg:text-[20px] ${isOpen ? 'text-bgForOrderBtn' : 'text-black'}`}
                >
                    {title}
                </h3>
                <img className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`} src={arrowUp} alt="arrow up" />
                <img className={`lg:hidden ${isOpen ? 'hidden' : 'block'}`} src={arrowDown} alt="arrow down" />
            </div>
            {/* Always show the list on md and larger screens, toggle on smaller screens */}
            <ul className={`mx-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
                {children}
            </ul>
        </div>
    );
};

export default HowToBuy;
