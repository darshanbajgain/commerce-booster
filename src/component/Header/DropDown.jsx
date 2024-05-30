import DropDownLogo from "../../assets/header_assets/arrowdown.svg";

const DropDown = () => {
    return (
        <div className="flex space-x-4">

        <div className="flex items-center bg-gray-100 border-none focus:outline-none text-sm p-1 pr-2">
            <select className="appearance-none bg-transparent border-none focus:outline-none text-sm p-1 pr-4">
                <option>Country: Sweden</option>
            </select>
            <img src={DropDownLogo} alt="Dropdown Arrow" className="w-4 h-4" />
        </div>
        <div className="flex items-center bg-gray-100 border-none focus:outline-none text-sm p-1 pr-2">
            <select className="appearance-none bg-transparent border-none focus:outline-none text-sm p-1 pr-4">
                <option>Language: Svenska</option>
            </select>
            <img src={DropDownLogo} alt="Dropdown Arrow" className="w-4 h-4" />
        </div>
        <div className="flex items-center bg-gray-100 border-none focus:outline-none text-sm p-1 pr-2">
            <select className="appearance-none bg-transparent border-none focus:outline-none text-sm p-1 pr-4">
                <option>Currency: $</option>
            </select>
            <img src={DropDownLogo} alt="Dropdown Arrow" className="w-4 h-4" />
        </div>


    </div>
    )
}

export default DropDown