import Cards from "./Cards"
import productImage1 from "../../assets/recommended_section/product-image-1.png";
import productImage2 from "../../assets/recommended_section/product-image-2.png";
import pointRightArrow from "../../assets/recommended_section/rightarrow.svg"
import arrowForwarBlack from "../../assets/recommended_section/arrowforward.svg"
const RecommenedProduct = () => {

    const products = [

        {
            id: 1,
            discount: "-30%",
            stockStatus: "In stock",
            partNumber: "Omnires | Part No. 2123532",
            name: "Connection with a handle Omnire round",
            price: "45.00",
            originalPrice: "55.00",
            image: productImage1
        },

        {
            id: 2,
            discount: "-30%",
            stockStatus: "In stock",
            partNumber: "Omnires | Part No. 2123532",
            name: "Countertop washbasin GoodHome Tekapo",
            price: "51.00",
            originalPrice: "64.00",
            image: productImage2
        }

    ];

    return (
        <div>

            <h1 className="text-center pb-1 pt-4 text-[24px] font-bold">Recommended products</h1>
            <div className="flex gap-[15px] p-[15px] ">
                {
                    products.map((product) => (
                        <Cards key={product.id} product={product} />
                    ))
                }
            </div>
            <div className="relative">
                <div className="bg-bgForSeacrchBorder rounded-lg absolute -top-5 right-4 w-8 h-8
                flex flex-col justify-center items-center">
                    <img src={arrowForwarBlack} className="w-[17.45px] h-[17.45px]" />
                </div>
                <p className=" w-full flex flex-row items-center justify-center text-[14px] text-PhoneColor mt-[20px]">
                    Show all recommended products 
                    <span className="mx-[8px]">
                        <img src={pointRightArrow} className="w-4 h-4" />
                    </span>
                </p>
            </div>
        </div>

    )
}

export default RecommenedProduct