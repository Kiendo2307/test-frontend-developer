import CustomButton from "../custom/CustomButton";
import Search from "./Search"
import Image from "next/image";

const RightHeader = () => {
    return (
        <div className="flex gap-[8px] items-center">
            <Search />
            <CustomButton rounded="rounded-[8px]" text="Login" width="w-[71px]" height="h-[44px]" />
            <Image
                className="cursor-pointer"
                width={32}
                height={24}
                alt=""
                src="/assets/images/icon_america.png"
            />
        </div>
    )
}

export default RightHeader