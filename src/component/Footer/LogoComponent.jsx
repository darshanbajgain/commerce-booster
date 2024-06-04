import copyRightLogo from "../../assets/footer_assets/logo/copyright.svg";
import fbLogo from "../../assets/footer_assets/logo/facebook.svg";
import instaLogo from "../../assets/footer_assets/logo/instagram.svg";
import ytLogo from "../../assets/footer_assets/logo/youtube.svg";
import siteLogo from "../../assets/footer_assets/logo/logotype.svg";


const LogoComponent = () => {

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center flex-col py-[40px] px-[73px">
                    <div className="flex gap-x-4 mb-4">
                        <img src={fbLogo} />
                        <img src={instaLogo} />
                        <img src={ytLogo} />
                    </div>
                    <div className=" mt-4 flex justify-center">
                        <img src={siteLogo} />
                    </div>
                </div>
            </div>
            <div className="flex gap-x-2 item-center justify-center p-1">
                <img className="w-5 h-5" alt="copyright" src={copyRightLogo} />
                <span className="text-[14px] mb-4 text-gray-700">
                    2021 Divante S.A.
                </span>
            </div>
        </div>
    )
}

export default LogoComponent