import SignUpCard from "./SignUpCard"
import FooterItem from "./FooterItem";
import HowToBuy from "./HowToBuy";
import OtherDropDowns from "./OtherDropDowns";
import LogoComponent from "./LogoComponent";


const Footer = () => {

    return (
        <div className="mt-[64px] bg-bgForSeacrchBorder">
            <SignUpCard />
            <HowToBuy title="How to buy">
                <FooterItem text="Payment methods" />
                <FooterItem text="Order and pick up" />
                <FooterItem text="Order with delivery" />
                <FooterItem text="Shopping over the phone" />
                <FooterItem text="Returns" />
            </HowToBuy>
            <OtherDropDowns title="Help" />
            <OtherDropDowns title="Services" />
            <OtherDropDowns title="About" />
            <LogoComponent />
            <div className="h-[259px] bg-white">
                {/* {empty div} */}
            </div>

        </div>
    )
}

export default Footer