import solarPanel from "../../assets/recommended_category/solar.png";
import bulb from "../../assets/recommended_category/bulb.png";
import cellPhone from "../../assets/recommended_category/cellphone.png";
import fan from "../../assets/recommended_category/fan.png";
import CommonLink from "../CommonLink/CommonLink";

const RecommendedCategory = () => {
  const linkmessage = "Show all categories";
  
  const electricProducts = [
    {
      id: "1",
      name: "Photovoltaics",
      image: solarPanel
    },
    {
      id: "2",
      name: "Electronics",
      image: cellPhone
    },
    {
      id: "3",
      name: "Light Sources",
      image: bulb
    },
    {
      id: "4",
      name: "Ventilation and Heating",
      image: fan
    }
  ]
  return (
    <div className="flex flex-col items-center mt-16">
      <h1 className="font-bold text-[24px] mb-6">Recommended categories</h1>
      <div className="grid grid-cols-2 gap-4 mx-[16px]">
        {
          electricProducts.map((product) => (
            <div key={product.id} className="flex justify-center flex-col items-center rounded-lg shadow-lg bg-bgForOrderBtn">
              <img src={product.image} alt={product.name} className="w-[164px] h-[164px] object-center " />
              <div className="w-full h-14 flex flex-col items-center justify-center">
                <span className="font-bold text-white text-center">{product.name}</span>
              </div>
            </div>
          ))
        }
      </div>
      <div className="mt-1">
        <CommonLink message={linkmessage} />
      </div>
    </div>
  )

}

export default RecommendedCategory