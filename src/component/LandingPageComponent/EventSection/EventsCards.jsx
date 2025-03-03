
const EventsCards = ({ event }) => {
    return (
        <div className=" bg-white border border-gray-200  lg:border-none
        rounded-lg shadow-sm mt-4 flex flex-col transform transition-transform duration-300 ease-in-out hover:scale-105">
            <img
                className="w-full h-48 object-cover"
                src={event.image}
                alt={event.title}
            />
            <div className="flex flex-col justify-between">
                <div className="text-[16px] ">
                    <h2 className=" mt-4 mx-2 font-baiserCircle  font-bold mb-4 lg:text-[20px]">{event.title}</h2>
                    <p className="mx-2 text-bgForOrderBtn mb-4 text-[14px]">{event.date_place}</p>
                    <p className="mx-2 line-clamp-3  text-gray-900 mb-4 w-[285px] h-auto">
                        {event.desc}
                    </p>
                </div>
                <button className="mx-2 mb-[26px] text-[14px] lg:text-[16px] leading-4 font-[500]  text-bgForOrderBtn px-7 py-3 border-bgForOrderBtn hover:text-gray-500 hover:border-gray-500 border-2 rounded-full self-start">
                    Know more
                </button>
            </div>
        </div>
    )
}

export default EventsCards