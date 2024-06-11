
import CommonLink from "../CommonLink/CommonLink"
import HintsCards from "./HintsCards";
import img1 from "../../assets/hints_assests/image.png";
import img2 from "../../assets/hints_assests/image-1.png";
import img3 from "../../assets/hints_assests/image-2.png";
import img4 from "../../assets/hints_assests/image-3.png";

const HintSection = () => {

    const messageLink = "Show all hints";

    const hints = [
        {
            id: 1,
            title: "How much does it cost to finish an apartment?",
            description: "Are you standing on the threshold of your own \"M\", to which you have just picked up the keys, and with the eye hy hello how are you what to do in this bla bla testing ellipisi",
            image: img1
        },
        {
            id: 2,
            title: "Demolition of the load-bearing wall",
            description: "Are you planning a home renovation or renovation? Your vision is limited by the load-bearing wall, which you",
            image: img2
        },
        {
            id: 3,
            title: "What color to paint a hall in a block of flats?",
            description: "Matching the right paint is a real challenge. If you are wondering what color to paint your hall with, you can",
            image: img3
        },
        {
            id: 4,
            title: "How does a concrete pump work?",
            description: "A concrete pump is currently one of the most common equipment used on construction sites. Its operation",
            image: img4
        },
    ]

    return (
        <div className="flex flex-col mt-16 relative">
            <div className="hidden lg:block absolute right-20 -top-2">
                <CommonLink message={messageLink} /> 
            </div>
            <h1 className="lg:mx-20 font-baiserCircle font-bold text-[24px] lg:text-[28px]  text-center lg:text-left">Hints for you</h1>
            <div className="grid grid-cols-1 gap-4 px-4 lg:px-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-1">
                {
                    hints.map((hint) => (
                        <HintsCards key={hint.id} hint={hint} />
                    ))
                }
            </div>
            <div className="lg:hidden text-left px-4">
                <CommonLink message={messageLink} />
            </div>
        </div>
    )
}

export default HintSection;
