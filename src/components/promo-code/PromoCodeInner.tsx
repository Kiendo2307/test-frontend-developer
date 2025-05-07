import CustomButton from "../custom/CustomButton";
import Image from "next/image";

const PromoCodeInner = () => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-4">
        <div className="font-bold text-[20px] text-custom-white">Redeem code</div>
        <div className="font-bold text-[40px] text-custom-white">
          Grant discounts and in-game bonuses to your players
        </div>
        <div className="flex flex-col gap-[14px]">
          <div
            style={{ padding: "0px 20px" }}
            className="flex border border-[#CDCDCD] w-[324px] h-[44px] bg-[#F6F6F69E] justify-between"
          >
            <input
              type="text"
              placeholder="Enter promo code"
              spellCheck={false}
              className="px-4 py-2 text-black outline-none placeholder:text-semibold placeholder:text-[#727272] placeholder:text-[16px] placeholder:opacity-50 cursor-default bg-transparent w-full"
            />
          </div>
          <CustomButton text="Redeem code" width="w-[324px]" height="h-[44px]" />
        </div>
      </div>
      <Image
        width={447}
        height={308}
        alt="Gif"
        src="/assets/images/img_gif.png"
        className="w-[447px] h-[308px]"
      />
    </div>
  );
};

export default PromoCodeInner;
