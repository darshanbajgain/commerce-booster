import EventsCards from "./EventsCards"

import eventsData from "../../../utils/EventsData.json"
import CommonLink from "../SharedComponents/CommonLink"

const EventsComponent = () => {

    const messageLinkName = "Show all events"


    return (
        <div className="mt-16 relative">
            <div className="hidden lg:block absolute right-20 -top-4">
                <CommonLink message={messageLinkName} />
            </div>

            <h1 className="text-2xl font-baiserCircle font-bold text-center lg:text-start lg:px-20">Events for you</h1>
            <div className="grid grid-cols-1 gap-4 px-4 lg:px-20 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {
                    eventsData.map(event => (
                        <EventsCards event={event} key={event.id} />
                    ))
                }
            </div>
            <div className="mt-1 lg:hidden">
                <CommonLink message={messageLinkName} />
            </div>
        </div>
    )
}

export default EventsComponent
