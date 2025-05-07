import Image from "next/image";

const menuItems = [
    { icon: "/assets/icons/icon_cam.svg", label: "Direct Top up" },
    { icon: "/assets/icons/icon_voucher.svg", label: "Voucher" },
    { icon: "/assets/icons/icon_support.svg", label: "Support" },
];

const LeftHeader = () => {
    return (
        <div className="flex items-center gap-[12px]">
            <Image
                className="cursor-pointer"
                width={151}
                height={44}
                alt="Store Logo"
                src="/assets/images/store_logo_nav.png"
            />
            {menuItems.map((item, index) => (
                <div key={index} className="flex items-center gap-[10px] cursor-pointer">
                    <Image width={20} height={20} alt={item.label} src={item.icon} />
                    <div className="text-[16px] text-custom-white font-semibold">{item.label}</div>
                </div>
            ))}
        </div>
    );
};

export default LeftHeader;
