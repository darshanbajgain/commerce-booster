import MailLogo from "../../assets/header_assets/mail.svg";
import UserLogo from "../../assets/header_assets/user.svg";
import PhoneLogo from "../../assets/header_assets/phone.svg";
import DropDownLogo from "../../assets/header_assets/arrowdown.svg";

const Details = () => {
    return (
        <div className="flex gap-x-4">
            <div className='flex items-center'>
                <img src={PhoneLogo} alt="Phone" className="w-4 h-4 mr-[5px]" />
                <span className='text-PhoneColor font-bold'>+32 (0) 16 29 76 67</span>
            </div>
            <div className="flex items-center">
                <span className=" border-l border-black h-[28px]"></span>
                <div className="relative py-2 px-4">
                    <img src={MailLogo} alt="Messages" className="w-6 h-6" />
                    <span className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center text-white 
                            text-xs font-bold bg-bgForMessageNotifaction rounded-full px-2 py-2">12</span>
                </div>
                <span>Messages</span>
            </div>

            <div className="flex items-center">
                <span className=" border-l border-black h-[28px]"></span>
                <div className="flex items-center text-sm">
                    <img src={UserLogo} alt="User" className="w-6 h-6 ml-4 my-[6px] mr-1" />
                    <select className="appearance-none bg-transparent text-sm">
                        <option>Username Surname</option>
                    </select>
                    <img src={DropDownLogo} alt="Dropdown Arrow" className="mx-[6px] my-[8px] w-[12px] h-[7.41px]" />
                </div>
            </div>
        </div>
    )
}

export default Details