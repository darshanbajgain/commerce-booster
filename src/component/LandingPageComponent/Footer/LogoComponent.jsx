import copyRightLogo from "/assets/footer_assets/logo/copyright.svg";
import fbLogo from "/assets/footer_assets/logo/facebook.svg";
import instaLogo from "/assets/footer_assets/logo/instagram.svg";
import ytLogo from "/assets/footer_assets/logo/youtube.svg";
import siteLogo from "/assets/footer_assets/logo/logotype.svg";

const LogoComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
      <div className="hidden lg:flex gap-x-2 items-center">
        <img className="w-5 h-5" alt="copyright" src={copyRightLogo} />
        <span className="text-[14px]  text-gray-700">2021 Divante S.A.</span>
      </div>
      <div className="flex flex-col  lg:flex-row  justify-center">
        <div className="flex items-center flex-col py-[40px] px-[73px] lg:flex-row lg:gap-x-8">
          <div className="flex gap-x-4 mb-4 lg:mb-0">
            <img src={fbLogo} />
            <img src={instaLogo} />
            <img src={ytLogo} />
          </div>
          <div className=" mt-4 flex justify-center lg:mt-0">
            <img src={siteLogo} />
          </div>
        </div>
      </div>
      <div className="lg:hidden flex gap-x-2 items-center justify-center p-1 ">
        <img className="w-5 h-5" alt="copyright" src={copyRightLogo} />
        <span className="text-[14px] mb-4 text-gray-700 mt-4">
          2021 Divante S.A.
        </span>
      </div>
    </div>
  );
};

export default LogoComponent;
