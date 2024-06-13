import EventsCards from "./EventsCards"
import CommonLink from "../CommonComponents/CommonLink"
import ecCourse from "../../../assets/events_assets/electriancourse.png"
import interiorDesign from "../../../assets/events_assets/interiordesign.png"
import paveEng from "../../../assets/events_assets/paveengineering.png"
import autoCAD from "../../../assets/events_assets/autocad.png"

const EventsComponent = () => {

    const messageLinkName = "Show all events"

    const events = [
        {
            id: 1,
            title: "Electrician course for electricians with SEP licence",
            date_place: "23.05.2021 | London, UK",
            desc: "This course is conducted in the form of lectures via the Internet and ends with an examination, also online and testing overlfow text three dots shown",
            image: ecCourse
        },
        {
            id: 2,
            title: "Interior design and decoration",
            date_place: "04-06.11.2021 | London, UK",
            desc: "This course is conducted in the form of lectures via the Internet and ends with an examination, also online",
            image: interiorDesign
        },

        {
            id: 3,
            title: "AutoCAD 2d basic level",
            date_place: "23.05.2021 | London, UK",
            desc: "This course is conducted in the form of lectures via the Internet and ends with an examination, also online",
            image: autoCAD
        },
        {
            id: 4,
            title: "Paving engineer with a road construction machine licence",
            date_place: "23.05.2021 | London, UK",
            desc: "This course is conducted in the form of lectures via the Internet and ends with an examination, also online",
            image: paveEng
        },
    ]

    return (
        <div className="mt-16 relative">
            <div className="hidden lg:block absolute right-20 -top-4">
                <CommonLink message={messageLinkName} />
            </div>

            <h1 className="text-2xl font-baiserCircle font-bold text-center lg:text-start lg:px-20">Events for you</h1>
            <div className="grid grid-cols-1 gap-4 px-4 lg:px-20 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {
                    events.map(event => (
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
