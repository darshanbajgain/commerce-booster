import Cards from "./Cards"
import productImage1 from "../../assets/recommended_section/product-image-1.png";
import productImage2 from "../../assets/recommended_section/product-image-2.png";
// import pointRightArrow from "../../assets/recommended_section/rightarrow.svg"
import arrowForwarBlack from "../../assets/recommended_section/arrowforward.svg"
import CommonLink from "../CommonLink/CommonLink";
import { useEffect, useState } from "react";
const RecommenedProduct = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
        },

        {
            id: 3,
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
        },

        {
            id: 4,
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

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Determine the number of cards to display
    const cardsToDisplay = windowWidth < 1024 ? products.slice(0, 2) : products;


    //pass message
    const message = "Show all recommended products";

    return (
        <div className="flex flex-col lg:px-[88px] relative">

            <div className="hidden lg:block absolute right-24 top-2">
                <CommonLink message={message} />
            </div>
            <div className="hidden lg:flex flex-col justify-center items-center 
                 bg-bgForSeacrchBorder rounded-lg absolute top-96 right-16 w-8 h-8">
                <img src={arrowForwarBlack} className="w-[17.45px] h-[17.45px]" />
            </div>

            <h1 className="text-center lg:text-start pb-1 pt-6 text-[24px] lg:text-[28px] font-bold lg:mt-3 lg:mb-[34px]">Recommended products</h1>
            <div className="flex justify-between gap-[15px] p-[15px] lg:p-0 overflow-hidden">
                {
                    cardsToDisplay.map(
                        (product) => (
                            <Cards key={product.id} product={product} />
                        )
                    )
                }
            </div>
            <div className="relative">
                <div className="bg-bgForSeacrchBorder rounded-lg absolute -top-5 right-4 w-8 h-8
                flex flex-col justify-center items-center lg:hidden">
                    <img src={arrowForwarBlack} className="w-[17.45px] h-[17.45px]" />
                </div>
                <div className="lg:hidden">
                    <CommonLink message={message} />
                </div>
            </div>
        </div>

    )
}

export default RecommenedProduct