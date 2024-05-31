import favIcon from "../../assets/recommended_section/star.svg";
import compareIcon from "../../assets/recommended_section/compare.svg";
import shareIcon from "../../assets/recommended_section/share.svg"
import checkIcon from "../../assets/recommended_section/check.svg";
import arrowDown from "../../assets/recommended_section/arrowdown.svg";
import blueArrowDown from "../../assets/recommended_section/bluevarrow.svg"


const Cards = ({product}) => {
    return (

            <div className="bg-white rounded-lg shadow-sm w-full max-w-xs mx-auto">
                <div className="relative mb-4">
                    <img src={product.image} alt="Product" className="w-full h-auto" />
                    <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-bold px-2 py-1 ">{product.discount}</span>
                    <span className="absolute top-2 right-2 bg-gray-300 rounded-full px-1 py-1 ">
                        <img src={favIcon} />
                    </span>
                    <span className="absolute bottom-[70px] right-2 px-1 py-1 ">
                        <img className="w-5 h-5" src={compareIcon} />
                    </span>
                    <span className="absolute bottom-2 right-2 px-1 py-1 ">
                        <img className="w-5 h-5" src={shareIcon} />
                    </span>
                    <p className="absolute bottom-2 left-2 text-sm mt-1 text-green-500">
                        <div className="flex flex-row space-x-1 items-center justify-between">
                            <span><img className="w-2 h-2" src={checkIcon} /></span><span>{product.stockStatus}</span>
                        </div>
                    </p>
                </div>
                <div className="text-gray-500">
                    {product.partNumber}
                </div>
                <div className="text-wrap">
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                </div>
                <div>
                    <p className=" space-x-2 text-sm font-bold text-bgForOrderBtn">
                        your price <span className="text-lg font-bold">${product.price}</span> net
                    </p>
                    <span className="text-orange-400 line-through">${product.originalPrice} net</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center space-x-2">
                        <div className="bg-white border border-gray-300 rounded-lg p-2 flex items-center justify-center w-12">
                            <span>1</span>
                        </div>
                        <div className="relative">
                            <div className="bg-white border border-gray-300 rounded-lg p-2 flex items-center justify-between cursor-pointer">
                                <span className="px-2">Item</span>
                                <img src={blueArrowDown} alt="Arrow Down" className="w-4 h-4 ml-2 mr-2" />
                            </div>
                        </div>
                    </div>
                    <button className="mt-4 mb-2 font-sm px-6 py-2 bg-blue-500 text-white rounded-3xl
             flex flex-row items-center justify-center space-x-1">
                        <span className="p-1" >Add to cart</span>
                        <span className="p-1 "><img className="text-white" src={arrowDown} /></span>
                    </button>
                </div>

            </div>
    )
}

export default Cards
