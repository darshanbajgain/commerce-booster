import arrowUp from "../../assets/footer_assets/keyboard_arrow_up.svg";

const HowToBuy = ({ title, children }) => {

    return (
        <div className=" m-0 pb-6 border-gray-200 border shadow-sm">
            <div className="m-4 flex flex-row justify-between items-center">
                <h3
                    className="font-bold cursor-pointer text-bgForOrderBtn text-[16px]"
                >
                    {title}
                </h3>
                <img src={arrowUp} />
            </div>
            <ul className="mx-4">{children}</ul>
        </div>
    );
};

export default HowToBuy;
