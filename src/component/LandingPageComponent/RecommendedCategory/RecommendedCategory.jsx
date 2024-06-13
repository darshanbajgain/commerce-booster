// import images
// import solarPanel from "/assets/recommended_category/solar.png";
// import bulb from "/assets/recommended_category/bulb.png";
// import cellPhone from "/assets/recommended_category/cellphone.png";
// import fan from "/assets/recommended_category/fan.png";
// import json data  for this category product section
import electricProducts from "../../../utils/RecommendedCategory.json";

import CommonLink from "../SharedComponents/CommonLink";

const RecommendedCategory = () => {
  const linkmessage = "Show all categories";

  // const electricProducts = [
  //   {
  //     id: "1",
  //     name: "Photovoltaics",
  //     image: solarPanel
  //   },
  //   {
  //     id: "2",
  //     name: "Electronics",
  //     image: cellPhone
  //   },
  //   {
  //     id: "3",
  //     name: "Light Sources",
  //     image: bulb
  //   },
  //   {
  //     id: "4",
  //     name: "Ventilation and Heating",
  //     image: fan
  //   }
  // ]
  return (
    <div className="flex flex-col  mt-16 relative">
      <div className="hidden lg:block absolute right-20 top-0">
        <CommonLink message={linkmessage} />
      </div>
      <h1 className="md:mx-[88px] font-baiserCircle font-bold text-center text-[24px] lg:text-[28px] mb-6 lg:text-left">Recommended categories</h1>
      <div className="md:mx-[88px] grid grid-cols-2 lg:grid-cols-4 gap-4 mx-[16px]">
        {
          electricProducts.map((product) => (
            <div key={product.id} className="flex max-w-[301px] max-h-[375px] justify-center flex-col items-center shadow-sm rounded-lg bg-bgForOrderBtn
            transform transition-transform duration-300 ease-in-out hover:scale-105 ">
              <img src={product.image} alt={product.name} className="w-full object-center " />
              <div className="w-full h-14 flex flex-col items-center justify-center">
                <span className="font-bold xl:text-[20px] lg:text-[16px] md:text-[16px] font-baiserCircle text-white text-center">{product.name}</span>
              </div>
            </div>
          ))
        }
      </div>
      <div className="mt-1 lg:hidden">
        <CommonLink message={linkmessage} />
      </div>
    </div>
  )

}

export default RecommendedCategory