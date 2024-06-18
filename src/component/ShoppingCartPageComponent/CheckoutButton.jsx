const CheckoutButton = ({ buttonText }) => {
  return (
    <button className="rounded-full w-full max-w-[200px] py-4 text-center justify-center items-center  bg-bgForOrderBtn 
    font-[500] text-lg text-white flex transition-all duration-500 hover:bg-indigo-600">
      {buttonText}

      <svg
        className="ml-2"
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none"
      >
        <path
          d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default CheckoutButton;
