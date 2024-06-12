import DropDownLogo from "../../assets/header_assets/arrowdown.svg";

const DropDown = () => {
  return (
    <div className="flex gap-x-4 text-bodycolor">
      <div className="flex items-center text-sm">
        <select className="appearance-none bg-transparent text-sm text-bodycolor">
          <option>Country: Sweden</option>
        </select>
        <img
          src={DropDownLogo}
          alt="Dropdown Arrow"
          className="mx-[6px] my-[8px] w-[12px] h-[7.41px]"
        />
      </div>

      <div className="flex items-center text-sm">
        <select className="appearance-none bg-transparent text-sm text-bodycolor">
          <option>Language: Svenska</option>
        </select>
        <img
          src={DropDownLogo}
          alt="Dropdown Arrow"
          className="mx-[6px] my-[8px] w-[12px] h-[7.41px]"
        />
      </div>

      <div className="flex items-center text-sm">
        <select className="appearance-none bg-transparent text-sm text-bodycolor">
          <option>Currency: $</option>
        </select>
        <img
          src={DropDownLogo}
          alt="Dropdown Arrow"
          className="mx-[6px] my-[8px] w-[12px] h-[7.41px]"
        />
      </div>
    </div>
  );
};

export default DropDown;
