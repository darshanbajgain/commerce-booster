import productImage1 from "../../assets/recommended_section/product-image-1.png";
import productImage2 from "../../assets/recommended_section/product-image-2.png";

const RecommenedProduct = () => {
    return (
        <div className="flex">
            <div className="bg-white p-4 rounded-lg shadow-sm w-full max-w-xs mx-auto">
                <div className="relative mb-4">
                    <img src={productImage1} alt="Product" className="w-full h-auto rounded-lg" />
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">-30%</span>
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-medium mb-2">Connection with a handle Omnire round</h3>
                    <p className="text-lg font-semibold">$45.00 <span className="text-gray-500 line-through">$65.00</span></p>
                    <p className="text-sm mt-1 text-green-500">In stock</p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Add to cart</button>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm w-full max-w-xs mx-auto">
                <div className="relative mb-4">
                    <img src={productImage2} alt="Product" className="w-full h-auto rounded-lg" />
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">-30%</span>
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-medium mb-2">Connection with a handle Omnire round</h3>
                    <p className="text-lg font-semibold">$45.00 <span className="text-gray-500 line-through">$65.00</span></p>
                    <p className="text-sm mt-1 text-green-500">In stock</p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default RecommenedProduct






















// const RecommendedProduct = () => {
// const products = [
//     {
//       discount: '-30%',
//       title: 'Connection with a handle Omnire round',
//       price: '$45.00',
//       oldPrice: '$65.00',
//       availability: 'In stock',
//       image: 'path/to/image1.jpg'
//     },
//     {
//       discount: '-15%',
//       title: 'Countertop washbasin GoodHome Tekapo',
//       price: '$51.00',
//       oldPrice: '$64.00',
//       availability: 'In stock',
//       image: 'path/to/image2.jpg'
//     },
//     {
//       discount: '-15%',
//       title: 'Perforated Simpson tape 25 x 2500 x 2 mm',
//       price: '$51.00',
//       oldPrice: '$64.00',
//       availability: 'In stock',
//       image: 'path/to/image3.jpg'
//     },
//     {
//       discount: '-15%',
//       title: 'AMBER DECOR Bulb 60W, E27 590',
//       price: '$51.00',
//       oldPrice: '$64.00',
//       availability: 'Exp. delivery on Jun 14, 2022',
//       image: 'path/to/image4.jpg'
//     },
//   ];

//   return (
//     <section className="recommended-products">
//       <h2 className="section-title">Recommended Products</h2>
//       <div className="products-container">
//         {products.map((product, index) => (
//           <div key={index} className="product-card">
//             <div className="product-discount">{product.discount}</div>
//             <img src={product.image} alt={product.title} className="product-image" />
//             <div className="product-details">
//               <h3 className="product-title">{product.title}</h3>
//               <p className="product-price">{product.price} <span className="old-price">{product.oldPrice}</span></p>
//               <p className={`availability ${product.availability.includes('Exp.') ? 'exp-delivery' : ''}`}>
//                 {product.availability}
//               </p>
//               <button className="add-to-cart">Add to cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="show-more">
//         <a href="#">Show all recommended products</a>
//       </div>
//     </section>
//   );
// };

// export default RecommendedProduct;
