import Cards from "./Cards"
import productImage1 from "../../assets/recommended_section/product-image-1.png";
import productImage2 from "../../assets/recommended_section/product-image-2.png";


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
        <section>

            <h1 className="text-center pb-1 pt-6 text-[24px] font-bold">Recommended products</h1>
            <div className="flex p-3">
                {
                    products.map((product) => (
                        <Cards key={product.id} product={product} />
                    ))
                }
            </div>
        </section>

    )
}

export default RecommenedProduct





















