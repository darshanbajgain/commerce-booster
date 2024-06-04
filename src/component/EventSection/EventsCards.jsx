
const EventsCards = ({ event }) => {
    return (
        <div className=" bg-white border border-gray-200 
        rounded-lg shadow-sm mt-4 flex flex-col">
            <img
                className="w-full h-48 object-cover md:w-1/3"
                src={event.image}
                alt={event.title}
            />
            <div className="flex flex-col justify-between">
                <div className="text-[16px]">
                    <h2 className=" mt-4 mx-2  font-bold mb-4">{event.title}</h2>
                    <p className="mx-2 text-blue-500 mb-4">{event.date_place}</p>
                    <p className="mx-2 text-gray-700 mb-4">
                        {event.desc}
                    </p>
                </div>
                <button className="mx-2 mb-[26px] text-[14px]  text-blue-600 px-7 py-3 border-blue-600 border-2 rounded-full self-start">
                    Know more
                </button>
            </div>
        </div>
    )
}

export default EventsCards