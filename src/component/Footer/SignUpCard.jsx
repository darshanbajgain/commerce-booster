const SignUpCard = () => {
    return (
        <div className="max-w-sm mx-auto lg:mx-0  lg:border-none shadow-sm lg:mt-6 lg:shadow-none">
            <h2 className="text-[16px] lg:text-[20px] font-bold mx-4 mt-6 lg:mt-0 ">Sign up for news</h2>
            <p className="text-[14px] m-4">
                Keep up to date with the latest product launches and news. Find out more about our brands and get special promo codes.
            </p>
            <div className="m-4">
                <input
                    type="email"
                    placeholder="Your e-mail address"
                    className="w-full text-[14px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                />
            </div>
            <div className="flex flex-col items-center">

                <button className=" w-[343px] text-[14px] rounded-full bg-bgForOrderBtn text-white px-8 py-4 hover:bg-blue-900 mx-4">
                    Sign up for newsletter
                </button>

            </div>
            <div className="mt-4 mx-4 mb-6 flex items-center flex-row ">
                <input
                    type="checkbox"
                    id="data-management"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="data-management" className="ml-2 text-[14px] text-gray-700">
                    I accept <a href="#" className="text-blue-500 hover:underline">the personal data management.</a>
                </label>
            </div>
        </div>
    );
};

export default SignUpCard;