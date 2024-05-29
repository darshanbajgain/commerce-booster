import SearchIcon from '../../assets/header_assets/mobile_search_input.svg';

const SearchBar = () => {
  return (
    <div className="flex w-[343px] h-12 items-center bg-white rounded-md shadow-sm">
      <img src={SearchIcon} alt="Search" className=" text-indigo-600" />
      <input
        type="text"
        placeholder="Search by product or SKU"
        className="bg-transparent outline-none w-full text-sm text-gray-700"
      />
    </div>
  );
};

export default SearchBar;
