import MailLogo from "/assets/header_assets/mail.svg";
import UserLogo from "/assets/header_assets/user.svg";
import PhoneLogo from "/assets/header_assets/phone.svg";
import DropDownLogo from "/assets/header_assets/arrowdown.svg";

const Details = () => {
  return (
    <div className="flex gap-x-4">
      <div className="flex items-center">
        <img src={PhoneLogo} alt="Phone" className="w-4 h-4 mr-[5px]" />
        <span className="text-phoneColor font-bold">+32 (0) 16 29 76 67</span>
      </div>
      <div className="flex items-center">
        <span className=" border-l border-bodycolor h-[28px]"></span>
        <div className="relative py-2 px-4">
          <img src={MailLogo} alt="Messages" className="w-6 h-6" />
          <span
            className="absolute top-0 right-2 w-[18px] h-[18px] flex items-center justify-center text-white 
                            text-[10px] font-[400] bg-bgForMessageNotifaction rounded-full px-1 py-1"
          >
            12
          </span>
        </div>
        <span className="text-bodycolor">Messages</span>
      </div>

      <div className="flex items-center">
        <span className=" border-l border-bodycolor h-[28px]"></span>
        <div className="flex items-center text-sm">
          <img
            src={UserLogo}
            alt="User"
            className="w-6 h-6 ml-4 my-[6px] mr-1"
          />
          <select className="text-bodycolor appearance-none bg-transparent text-sm">
            <option>Username Surname</option>
          </select>
          <img
            src={DropDownLogo}
            alt="Dropdown Arrow"
            className="mx-[6px] my-[8px] w-[12px] h-[7.41px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
