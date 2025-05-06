// components/FooterTop.tsx
import CustomButton from "../custom/CustomButton";

const FooterTop = () => {
  return (
    <div
      style={{ paddingTop: "40px", paddingBottom: "20px" }}
      className="container flex justify-between w-full h-[272px]"
    >
      <div className="flex flex-col gap-2">
        <div className="font-bold text-[24px] text-[#FFFFFF]">ORDER</div>
        <div className="font-normal text-[20px] text-[#FFFFFF]">Return & Refund Policy</div>
        <div className="font-normal text-[20px] text-[#FFFFFF]">Cancellation/Order Change</div>
        <div className="font-normal text-[20px] text-[#FFFFFF]">DMCA</div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="font-bold text-[24px] text-[#FFFFFF]">RESOURCES</div>
        <div className="font-normal text-[20px] text-[#FFFFFF]">Privacy Policy</div>
        <div className="font-normal text-[20px] text-[#FFFFFF]">Terms of Services</div>
        <div className="font-normal text-[20px] text-[#FFFFFF]">About Us</div>
        <div className="font-normal text-[20px] text-[#FFFFFF]">FAQs</div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="font-bold text-[24px] text-[#FFFFFF]">CUSTOMERS</div>
        <div className="font-normal text-[20px] text-[#FFFFFF]">Case Studies</div>
        <div className="font-normal text-[20px] text-[#FFFFFF]">Store Examples</div>
      </div>

      <div className="flex flex-col gap-4">
        <CustomButton text="CONTAST US" width="w-[126px]" height="h-[44px]" />
        <div className="flex flex-col gap-1">
          {["X", "Facebook", "Linkedln", "Youtube", "Pinterest", "Instagram"].map((item) => (
            <div key={item} className="font-normal text-[16px] text-[#FFFFFF]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
