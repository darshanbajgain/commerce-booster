import Cards from "./Cards"
import productImage1 from "../../assets/recommended_section/product-image-1.png";
import productImage2 from "../../assets/recommended_section/product-image-2.png";
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
            name: "Connection with a handle Omnire round, best product, best buy example text long example text to test dot dot feature",
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
            partNumber: "GoodHome | Part No. 2123532",
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
            partNumber: "GoodHome | Part No. 2123532",
            name: "Perforated Simpson tape 25 x 2500 x 2 mm",
            feat1: "Basin width : 45 cm",
            feat2: "Basin height: 12 cm",
            feat3: "Basin depth: 35 cm",
            price: "51.00",
            originalPrice: "64.00",
            image: productImage1
        },

        {
            id: 4,
            discount: "-30%",
            stockStatus: "In stock",
            expiry: "Exp. delivery on Jun 14, 2022",
            partNumber: "Omnires | Part No. 2123532",
            name: "AMBER DECOR Bulb 60W,   E27 590",
            feat1: "Basin width : 45 cm",
            feat2: "Basin height: 12 cm",
            feat3: "Basin depth: 35 cm",
            price: "51.00",
            originalPrice: "64.00",
            image: productImage1
        }


    ];

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Determine the number of cards to display accroding to device size
    let cardsToDisplay;
    if (windowWidth < 1024) {
        cardsToDisplay = products.slice(0, 2);
    } else if (windowWidth < 1400) {
        cardsToDisplay = products.slice(0, 3);
    } else {
        cardsToDisplay = products;
    }


    //pass message
    const message = "Show all recommended products";

    return (
        <div className="flex flex-col items-center lg:grid grid-cols-1  relative lg:mx-[88px] ">

            <div className="hidden lg:block absolute -right-8 top-2">
                <CommonLink message={message} />
            </div>

            {/*slider  fo large device */}
            <div className="hidden lg:flex flex-col justify-center items-center z-10 hover:bg-gray-500 
                 bg-bgForSeacrchBorder rounded-lg absolute top-96 -right-6 w-8 h-8">
                <img src={arrowForwarBlack} className="w-[17.45px] h-[17.45px]" />
            </div>

            <h1 className="lg:text-left font-baiserCircle font-[700] text-center pb-1 pt-6 text-[24px] lg:text-[28px] lg:mt-3 lg:mb-[34px]">Recommended products</h1>

            <div className="container flex flex-col lg:h-[716px]">

                <div className="flex justify-around gap-[15px] p-[15px] lg:p-0 ">
                    {
                        cardsToDisplay.map(
                            (product) => (
                                <Cards key={product.id} product={product} />
                            )
                        )
                    }
                </div>
            </div>

            <div className="relative">
                {/*slider fo mobile device */}
                <div className="bg-bgForSeacrchBorder rounded-lg absolute bottom-4 -right-12 md:-right-20 w-8 h-8
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