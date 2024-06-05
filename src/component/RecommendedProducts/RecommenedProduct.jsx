import MobileCards from "./MobileCards"
import productImage1 from "../../assets/recommended_section/product-image-1.png";
import productImage2 from "../../assets/recommended_section/product-image-2.png";
// import pointRightArrow from "../../assets/recommended_section/rightarrow.svg"
import arrowForwarBlack from "../../assets/recommended_section/arrowforward.svg"
import CommonLink from "../CommonLink/CommonLink";
const RecommenedProduct = () => {

    //pass products
    const products = [

        {
            id: 1,
            discount: "-30%",
            stockStatus: "In stock",
            partNumber: "Omnires | Part No. 2123532",
            name: "Connection with a handle Omnire round",
            feat1: "Material of execution: brass",
            feat2: "Manufacturer`s color: chrome",
            feat3: "Guarantee: 5 years",
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
            feat1: "Basin width : 45 cm",
            feat2: "Basin height: 12 cm",
            feat3: "Basin depth: 35 cm",
            price: "51.00",
            originalPrice: "64.00",
            image: productImage2
        }

    ];

    //pass message
    const message = "Show all recommended products";

    return (
        <div className="lg:px-[84px]">

            <h1 className="text-center lg:text-left pb-1 pt-6 text-[24px] font-bold lg:mb-[34px]">Recommended products</h1>
            <div className="flex justify-between gap-[15px] p-[15px] lg:p-0 ">
                {
                    products.map((product) => (
                        <MobileCards key={product.id} product={product} />
                    ))
                }
            </div>
            <div className="relative">
                <div className="bg-bgForSeacrchBorder rounded-lg absolute -top-5 right-4 w-8 h-8
                flex flex-col justify-center items-center">
                    <img src={arrowForwarBlack} className="w-[17.45px] h-[17.45px]" />
                </div>
                <CommonLink message={message} />
            </div>
        </div>

    )
}

export default RecommenedProduct