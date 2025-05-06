import Image from "next/image";
import BoxBorderLine from "../custom/BoxBorderLine";
import CustomButton from "../custom/CustomButton";

const PromoCard = () => {
  return (
    <div className="container relative">
      <BoxBorderLine width="1155px" height="268px" padding="32px" backgroundImage="#2F0700" borderRadius="36px">
        <div className="flex flex-col gap-3">
          <h2 className="text-[48px] font-bold text-[#D9D9D9]">
            Get +20% more!
          </h2>
          <p className="text-[20px] text-[#D9D9D9]">
            Offer extra discount to players on Web Shop purchases.
          </p>
          <div className="flex gap-2">
            {[
              "Official Store",
              "Secure Payments",
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-1">
                <Image
                  width={24}
                  height={24}
                  alt=""
                  src="/assets/icons/charm_shield_tick.svg"
                />
                <span className="text-[20px] font-semibold text-[#D9D9D9]">
                  {text}
                </span>
              </div>
            ))}
          </div>
          <CustomButton rounded="rounded-[8px]" text="VIEW OFFERS" width="w-[269px]" height="h-[44px]" />
        </div>
      </BoxBorderLine>

      <Image
        src="/assets/images/spell.png"
        alt=""
        width={192}
        height={376}
        className="absolute top-[-30%] right-[15%] z-[10]"
        style={{
          height: "376px",
          width: "auto",
          imageRendering: "auto",
        }}
      />
    </div>
  );
};

export default PromoCard;
