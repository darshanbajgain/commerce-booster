import DropDownLogo from "../../../assets/header_assets/arrowdown.svg";

const DesktopNavigation = () => {
  return (
    <div className="flex space-x-8 font-[600]">
      <div className="flex items-center text-sm">
        <select className="appearance-none bg-transparent text-sm">
          <option>HOME & GARDEN</option>
        </select>
        <img
          src={DropDownLogo}
          alt="Dropdown Arrow"
          className="mx-[6px] my-[8px] w-[12px] h-[7.41px]"
        />
      </div>

      <div className="flex items-center text-sm">
        <select className="appearance-none bg-transparent text-sm">
          <option>MOTORS</option>
        </select>
        <img
          src={DropDownLogo}
          alt="Dropdown Arrow"
          className="mx-[6px] my-[8px] w-[12px] h-[7.41px]"
        />
      </div>

      <div className="flex items-center text-sm">
        <span>ELECTRONICS</span>
      </div>
      <div className="flex items-center text-sm">
        <span>OFFICE EQUIPMENT</span>
      </div>
    </div>
  );
};

export default DesktopNavigation;
