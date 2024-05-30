import MailLogo from "../../assets/header_assets/mail.svg";
import UserLogo from "../../assets/header_assets/user.svg";
import PhoneLogo from "../../assets/header_assets/phone.svg";
import DropDownLogo from "../../assets/header_assets/arrowdown.svg";

const Details = () => {
    return (
        <div className="flex space-x-4">
            <div className='flex items-center space-x-1'>
                <img src={PhoneLogo} alt="Phone" className="w-4 h-4" />
                <span className='text-PhoneColor font-bold'>+32 (0) 16 29 76 67</span>
            </div>
            <div className="flex items-center space-x-1 ">
                <span className=" border-l border-black h-[28px]"></span>
                <div className="relative py-2 px-4">
                    <img src={MailLogo} alt="Messages" className="w-6 h-6" />
                    <span className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center text-white 
                            text-xs font-bold bg-bgForMessageNotifaction rounded-full px-2 py-2">12</span>
                </div>
                <span>Messages</span>
            </div>

            <div className="flex items-center space-x-1">
                <span className=" border-l border-black h-[28px]"></span>
                <div className="flex items-center bg-gray-100 border-none focus:outline-none text-sm py-2 px-4">
                    <img src={UserLogo} alt="User" className="w-6 h-6" />
                    <select className="appearance-none bg-transparent border-none focus:outline-none text-sm p-1 pr-2">
                        <option>Username Surname</option>
                    </select>
                    <img src={DropDownLogo} alt="Dropdown Arrow" className="w-4 h-4" />
                </div>
            </div>
        </div>
    )
}

export default Details