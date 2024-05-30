import SearchIcon from '../../assets/header_assets/search.svg';

const SearchBar = () => {
  return (
    <div className="flex gap-x-2.5 px-3 p-4 w-[343px] md:w-[360px] lg:w-[543px] h-12  items-center bg-white rounded-md border-[1px] border-bgForSeacrchBorder shadow-sm">
      <img src={SearchIcon} alt="Search" className="h-6 w-6 text-indigo-600" />
      <input
        type="text"
        placeholder="Search by product or SKU"
        className="bg-transparent outline-none w-full text-sm text-gray-700"
      />
    </div>
  );
};

export default SearchBar;
