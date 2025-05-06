import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-[#0C0A09] h-[72px] flex items-center">
            <div className="container flex items-center justify-between">
                <LeftHeader />
                <RightHeader />
            </div>
        </div>
    )
}


export default Header;
