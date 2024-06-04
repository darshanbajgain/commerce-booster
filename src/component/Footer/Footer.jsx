import SignUpCard from "./SignUpCard"
import FooterItem from "./FooterItem";
import HowToBuy from "./HowToBuy";
import OtherDropDowns from "./OtherDropDowns";


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
            <OtherDropDowns title="Service" />
            <OtherDropDowns title="About" />
            
        </div>
    )
}

export default Footer