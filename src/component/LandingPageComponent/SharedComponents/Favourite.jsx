import FavoritesIcon from "/assets/header_assets/star.svg";

const Favourite = () => {
  return (
    <div className="relative">
      <img src={FavoritesIcon} alt="Favorites" className="w-[18px] h-[19px]" />
      <span className="absolute -top-2 -right-3 text-[10px] bg-bgForCartPop w-[18px] h-[18px] flex flex-col items-center rounded-full text-white ">
        <p className="leading-[14px] my-auto mx-auto">7</p>
      </span>
    </div>
  );
};

export default Favourite;
