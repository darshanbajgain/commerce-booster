import SignUpCard from "./SignUpCard"
import FooterItem from "./FooterItem";
import HowToBuy from "./HowToBuy";
import OtherDropDowns from "./OtherDropDowns";
import LogoComponent from "./LogoComponent";


const Footer = () => {

    return (
        
        <div className="mt-[64px] bg-bgForFooter lg:px-[88px] pt-[8px]">
            <div className="flex flex-col lg:flex-row gap-x-16">
                <SignUpCard />
                <div className="lg:grid lg:grid-cols-2 xl:grid-cols-4">
                    <HowToBuy title="How to buy">
                        <FooterItem text="Payment methods" />
                        <FooterItem text="Order and pick up" />
                        <FooterItem text="Order with delivery" />
                        <FooterItem text="Shopping over the phone" />
                        <FooterItem text="Returns" />
                    </HowToBuy>
                    <OtherDropDowns title="Help" >
                        <FooterItem text="Contact" />
                        <FooterItem text="Online Help" />
                        <FooterItem text="Our Commitments" />
                        <FooterItem text="Give Feedback" />
                    </OtherDropDowns>
                    <OtherDropDowns title="Services" >
                        <FooterItem text="Transport" />
                        <FooterItem text="Design Service" />
                        <FooterItem text="Paint a plaster mixing service" />
                        <FooterItem text="Dimension adn assembly service" />
                        <FooterItem text="Return of used equipment" />
                        <FooterItem text="Additional services" />
                    </OtherDropDowns>
                    <OtherDropDowns title="About" >
                        <FooterItem text="About us" />
                        <FooterItem text="Press Office" />
                        <FooterItem text="For suppliers" />
                        <FooterItem text="Regulations" />
                        <FooterItem text="Privacy Policy" />
                        <FooterItem text="Cookies" />
                        <FooterItem text="Personal Data Request" />
                    </OtherDropDowns>
                </div>

            </div>

            <div className="hidden lg:block border-t border-footerBorder px-[88px]  mt-5">

            </div>

            <LogoComponent />


            <div className="h-[259px] bg-white lg:hidden">
                {/* {empty div} */}
            </div>

        </div>
    )
}

export default Footer