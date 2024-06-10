
import { useState } from "react";
import favIcon from "../../assets/recommended_section/star.svg";
import compareIcon from "../../assets/recommended_section/compare.svg";
import shareIcon from "../../assets/recommended_section/share.svg";
import checkIcon from "../../assets/recommended_section/check.svg";
import checkBlueIcon from "../../assets/recommended_section/check-blue.svg";
import cautionRed from "../../assets/recommended_section/cautionred.png";
import arrowDown from "../../assets/recommended_section/arrowdown.svg";
import arrowDownBlue from "../../assets/recommended_section/arrowndownblue.svg";
import blueArrowDown from "../../assets/recommended_section/bluevarrow.svg";

const Cards = ({ product }) => {

    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const handleAddToCart = () => {
        if (!product.expiry) {
            setIsAddedToCart(true);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm w-full max-w-[301px]  transform transition-transform duration-300 ease-in-out hover:scale-105 ">
            <div className=" md:w-full md:h-auto relative">
                <img src={product.image} alt="Product" className="w-full" />
                <span className="absolute top-2 left-0 bg-cardDiscountColor text-white text-[10px] font-bold p-[4px] flex items-center justify-center">
                    {product.discount}
                </span>
                <span className="absolute top-2 right-2 bg-cardStarColor rounded-full px-1 py-1">
                    <img src={favIcon} className="   w-[12px] h-[12px] lg:w-[21px] lg:h-[21px]" />
                </span>
                <span className="absolute bottom-[31px] right-2 px-1 py-1">
                    <img className="w-[13.5px] h-[16.5px] lg:w-[18px] lg:h-[22px]" src={compareIcon} />
                </span>
                <span className="absolute bottom-2 right-2 px-1 py-1">
                    <img className="w-[14px] h-[15px] lg:w-[18px] lg:h-[19px]" src={shareIcon} />
                </span>
                <div className={`absolute bg-white bottom-2 left-2 text-[10px] lg:text-[14px] mt-1 shadow-sm px-[8px] py-[2px] rounded-md ${product.expiry ? 'text-red-500' : 'text-instock'}`}>
                    <div className="flex w-full flex-row space-x-1 items-center justify-between">
                        <span>
                            <img className={`w-[6.67px] h-[7.11] lg:w-[13.3px] lg:h-[13.3px] ${product.expiry ? 'hidden' : 'block'}`} src={checkIcon} />
                            <img className={`w-[6.67px] h-[7.11] lg:w-[13.3px] lg:h-[13.3px] ${product.expiry ? 'inline-block' : 'hidden'}`} src={cautionRed} />
                        </span>
                        <span>{product.expiry ? product.expiry : product.stockStatus}</span>
                    </div>
                </div>
            </div>
            <div className="text-gray-500 m-[8px] text-[14px] ">
                {product.partNumber}
            </div>
            <div className="text-wrap m-[8px] w-[148px] h-[63px] lg:h-[52px] lg:w-[285px]">
                <h3 className="card-name text-[16px] lg:text-[20px] font-bold"
                    style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        lineHeight: '1.2em',
                    }}
                >
                    {product.name}
                </h3>
                <style jsx>{`
        @media (min-width: 728px) {
             .card-name {
                -webkit-line-clamp: 2; /* Number of lines to show before truncating */
                max-height: 52px; /* For desktop, 2 lines assuming line-height is 1.2em */
             
            }
        }
          @media (max-width: 728px) {
             .card-name {
                -webkit-line-clamp: 3; /* Number of lines to show before truncating */
                max-height: 63px; /* For desktop, 2 lines assuming line-height is 1.2em */
             
            }
        }
    `}</style>
            </div>

            <ul className="hidden my-3 mx-2 md:flex flex-col">
                <li className="mb-1">{product.feat1}</li>
                <li className="mb-1">{product.feat2}</li>
                <li className="mb-1">{product.feat3}</li>
            </ul>

            <div>
                <p className="m-[8px] space-x-2 text-sm font-[600] text-bgForOrderBtn inline-block">
                    your price <span className="text-[20px] m-1 font-[600]">${product.price}</span> net
                    <span className="hidden font-[400] lg:inline-block text-cardDiscountColor line-through mx-[8px] mt-[4px]">${product.originalPrice} net</span>
                </p>
                <span className="lg:hidden font-[400] text-cardDiscountColor line-through mx-[8px] mt-[4px] lg:text-[16px]">${product.originalPrice} net</span>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex mt-[8px] items-center space-x-2 w-full">
                    <div className="bg-white border border-gray-300 rounded-lg flex items-center justify-center w-[47px] lg:w-[106px] px-[16px] py-[12px]">
                        <span className="text-[14px]">1</span>
                    </div>
                    <div className="relative">
                        <div className="bg-white border border-gray-300 rounded-lg flex items-center justify-between cursor-pointer px-[16px] py-[12px]">
                            <span className="text-[14px] lg:w-[171px]">Item</span>
                            <div className="px-[8px] py-[6px] ml-[8px]">
                                <img src={blueArrowDown} alt="Arrow Down" className="w-[12px] h-[7.41px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className={`mt-[8px] mb-2 text-sm font-[500] px-6 rounded-3xl w-full
                    flex-row items-center justify-center  space-x-1 
                    ${isAddedToCart ? 'hidden' : 'flex'}
                    ${product.expiry ? 'bg-white text-addToCartBtn border-addToCartBtn border-2 py-2' : 'bg-addToCartBtn text-white hover:bg-blue-400 py-2 '}`}
                    onClick={handleAddToCart}
                >
                    <span className="p-1 text-[14px]">Add to cart</span>
                    <span className="p-1">
                        <img className={`${product.expiry ? 'hidden' : 'block'}`} src={arrowDown} />
                        <img className={`${product.expiry ? 'block' : 'hidden'}`} src={arrowDownBlue} />
                    </span>
                </button>
                <button
                    className={`mt-[8px] mb-2 text-sm font-[500] px-6 py-2 bg-addToCartBtn text-white rounded-3xl w-full flex flex-row items-center justify-center hover:bg-blue-400 space-x-1 ${isAddedToCart ? 'block' : 'hidden'}`}
                >
                    <span className="p-1 text-[14px]">Update Cart</span>
                    <span className="p-1"><img className="text-white" src={arrowDown} /></span>
                </button>
            </div>
            <div className={`bg-blue-100 rounded-b-lg py-2 w-full flex-row gap-x-1 m-0 justify-center items-center ${isAddedToCart ? 'flex' : 'hidden'}`}>
                <img className="w-[13.3px h-[13.3px]" src={checkBlueIcon} />
                <span className="text-blue-500 text-[14px] my-1">Added to cart</span>
            </div>
        </div>
    );
};

export default Cards;
