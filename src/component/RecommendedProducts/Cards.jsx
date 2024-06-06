import favIcon from "../../assets/recommended_section/star.svg";
import compareIcon from "../../assets/recommended_section/compare.svg";
import shareIcon from "../../assets/recommended_section/share.svg"
import checkIcon from "../../assets/recommended_section/check.svg";
import arrowDown from "../../assets/recommended_section/arrowdown.svg";
import blueArrowDown from "../../assets/recommended_section/bluevarrow.svg"


const Cards = ({ product }) => {

    return (

        <div className="bg-white rounded-lg shadow-sm w-full max-w-[301px]">
            <div className=" min-[450px]:w-[164px] min-[450px]:h-[134px] md:w-full md:h-auto relative">
                <img src={product.image} alt="Product" className="w-full" />
                <span className="absolute top-2 left-0 bg-orange-400 text-white text-[10px] font-bold p-[4px] flex items-center justify-center ">{product.discount}</span>
                <span className="absolute top-2 right-2 bg-gray-300 rounded-full px-1 py-1 ">
                    <img src={favIcon} className="w-[12px] h-[12px] lg:w-[21px] lg:h-[21px]" />
                </span>
                <span className="absolute bottom-[31px] right-2 px-1 py-1 ">
                    <img className="w-[13.5px] h-[16.5px] lg:w-[18px] lg:h-[22px]" src={compareIcon} />
                </span>
                <span className="absolute bottom-2 right-2 px-1 py-1 ">
                    <img className="w-[14px] h-[15px] lg:w-[18px] lg:h-[19px]" src={shareIcon} />
                </span>
                <div className="absolute bottom-2 left-2 text-[10px] lg:text-[14px] mt-1 text-green-500">
                    <div className="flex flex-row space-x-1 items-center justify-between">
                        <span><img className="w-[6.67px] h-[7.11] lg:w-[13.3px] lg:h-[13.3px]" src={checkIcon} /></span><span>{product.stockStatus}</span>
                    </div>
                </div>
            </div>
            <div className="text-gray-500 m-[8px] text-[14px]">
                {product.partNumber}
            </div>
            <div className="text-wrap m-[8px]">
                <h3 className="text-[16px] lg:text-[20px] font-bold">{product.name}</h3>
            </div>
            <ul className="hidden my-3 mx-2 md:flex flex-col">
                <li className="mb-1">{product.feat1}</li>
                <li className="mb-1">{product.feat2}</li>
                <li className="mb-1">{product.feat3}</li>
            </ul>
            <div>
                <p className="m-[8px] space-x-2 text-sm font-bold text-bgForOrderBtn inline-block">
                    your price <span className="text-[20px] m-1 font-bold">${product.price}</span> net
                    <span className="hidden lg:inline-block text-orange-400 line-through mx-[8px] mt-[4px]">${product.originalPrice} net</span>
                </p>
                <span className="lg:hidden text-orange-400 line-through mx-[8px] mt-[4px] lg:text-[16px]">${product.originalPrice} net</span>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex mt-[8px] items-center space-x-2 w-full">
                    <div className="bg-white border border-gray-300 rounded-lg flex items-center justify-center w-[47px] lg:w-[106px] px-[16px] py-[12px]">
                        <span className="text-[14px]">1</span>
                    </div>
                    <div className="relative">
                        <div className="bg-white border border-gray-300 rounded-lg  flex items-center justify-between cursor-pointer px-[16px] py-[12px]">
                            <span className="text-[14px] lg:w-[171px] ">Item</span>
                            <div className="px-[8px] py-[6px] ml-[8px] ">
                                <img src={blueArrowDown} alt="Arrow Down" className="w-[12px] h-[7.41px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="mt-[8px] mb-2 font-sm px-6 py-2 bg-blue-500 text-white rounded-3xl
                                 w-full flex flex-row items-center justify-center space-x-1">
                    <span className="p-1 text-[14px]" >Add to cart</span>
                    <span className="p-1 "><img className="text-white" src={arrowDown} /></span>
                </button>
            </div>

        </div>
    )
}

export default Cards