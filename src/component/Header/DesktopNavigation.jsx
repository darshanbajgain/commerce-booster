import DropDownLogo from "../../assets/header_assets/arrowdown.svg";

const DesktopNavigation = () => {
    return (
        <div className="flex space-x-8 font-bold">

            <div className="flex items-center border-none focus:outline-none text-sm p-1 pr-2">
                <select className="appearance-none uppercase bg-transparent border-none focus:outline-none text-sm p-1 pr-4">
                    <option>HOME & GARDEN</option>
                </select>
                <img src={DropDownLogo} alt="Dropdown Arrow" className="w-4 h-4" />
            </div>
            <div className="flex items-center border-none focus:outline-none text-sm p-1 pr-2">
                <select className="appearance-none uppercase bg-transparent border-none focus:outline-none text-sm p-1 pr-4">
                    <option>MOTORS</option>
                </select>
                <img src={DropDownLogo} alt="Dropdown Arrow" className="w-4 h-4" />
            </div>
            {/* <div className="flex items-center">
                <span className="mr-1">MOTORS</span>
                <img src="../../assets/header_assets/arrowdown.svg" alt="Dropdown" className="w-3 h-3" />
            </div> */}
            <div className="flex items-center">
                <span>ELECTRONICS</span>
            </div>
            <div className="flex items-center">
                <span>OFFICE EQUIPMENT</span>
            </div>
        </div>
    )
}

export default DesktopNavigation