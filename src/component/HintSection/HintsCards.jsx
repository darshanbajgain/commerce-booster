import pointRightArrow from "../../assets/recommended_section/rightarrow.svg";

const HintsCards = ({ hint }) => {
  const readlink = "Read more";

  return (
    <div className="mt-6 shadow-sm rounded-sm transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="flex flex-col">
        <img src={hint.image} />
        <div>
          <h3 className="font-bold font-baiserCircle py-4 px-2">
            {hint.title}
          </h3>
          <p
            className="px-2 text-wrap"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3 /* Number of lines to show before truncating */,
              WebkitBoxOrient: "vertical",
            }}
          >
            {hint.description}
          </p>
        </div>
      </div>
      <p
        className=" w-full px-2 py-4 font-medium flex flex-row items-center jus text-[14px] text-PhoneColor mb-2
             hover:text-gray-500 cursor-pointer"
      >
        {readlink}
        <span className="mx-[8px]">
          <img src={pointRightArrow} className="w-4 h-4" />
        </span>
      </p>
    </div>
  );
};

export default HintsCards;
