import EventsCards from "./EventsCards"
import ecCourse from "../../assets/events_assets/electriancourse.png"
import interiorDesign from "../../assets/events_assets/interiordesign.png"
import paveEng from "../../assets/events_assets/paveengineering.png"
import autoCAD from "../../assets/events_assets/autocad.png"


const EventsComponent = () => {

    const events = [
        {
            id: 1,
            title: "Electrician course for electricians with SEP licence",
            date_place: "23.05.2021 | London, UK",
            desc: "This course is conducted in the form of lectures via the Internet and ends with an examination, also online...",
            image: ecCourse
        },
        {
            id: 2,
            title: "Interior design and decoration",
            date_place: "04-06.11.2021 | London, UK",
            desc: "This course is conducted in the form of lectures via the Internet and ends with an examination, also online...",
            image: interiorDesign
        },
    
        {
            id: 3,
            title: "AutoCAD 2d basic level",
            date_place: "23.05.2021 | London, UK",
            desc: "This course is conducted in the form of lectures via the Internet and ends with an examination, also online...",
            image: autoCAD
        },
        {
            id: 4,
            title: "Paving engineer with a road construction machine licence",
            date_place: "23.05.2021 | London, UK",
            desc: "This course is conducted in the form of lectures via the Internet and ends with an examination, also online...",
            image: paveEng 
        },
    ]

  return (
    <div className="mt-[64px]">
        <h1 className="text-[24px] font-bold text-center">Events for you</h1>
        <div className="flex flex-col px-4">
            {
                events.map(event => (
                    < EventsCards event={event} key={event.id} />
                ))
            }
        </div>
    </div>
  )
}

export default EventsComponent