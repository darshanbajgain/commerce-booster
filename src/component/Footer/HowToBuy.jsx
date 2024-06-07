import arrowUp from "../../assets/footer_assets/keyboard_arrow_up.svg";

const HowToBuy = ({ title, children }) => {

    return (
        <div className=" m-0 pb-6 border-gray-200 shadow-sm lg:mt-6 lg:shadow-none">
            <div className="m-4 flex flex-row justify-between items-center  lg:mt-0">
                <h3
                    className="font-bold cursor-pointer text-bgForOrderBtn text-[16px] lg:text-[20px] lg:text-black"
                >
                    {title}
                </h3>
                <img className="lg:hidden" src={arrowUp} />
            </div>
            <ul className="mx-4">{children}</ul>
        </div>
    );
};

export default HowToBuy;
