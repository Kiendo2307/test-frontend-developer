import BoxBorderLine from "../custom/BoxBorderLine";
import CardBorderLine from "../custom/CardBorderLine";
import Image from "next/image";

const vouchers = [
  {
    image: "/assets/images/mario.png",
    title: "VNG Games Sales",
    description: "Using Apps Store coin to buy VNG with half price",
    originalPrice: "$23",
    discountedPrice: "$12.44",
  },
  {
    image: "/assets/images/pokemon.png",
    title: "Pokemon Scarlet/Violet",
    description: "Receive Koraidon/Miraidon when buying by Apps Store",
    originalPrice: "$23",
    discountedPrice: "$12.44",
  },
  {
    image: "/assets/images/pokemon2.png",
    title: "Sleep Pokemon",
    description: "Using Apps Store coin to buy VNG with half price",
    originalPrice: "$23",
    discountedPrice: "$12.44",
  },
];

const VoucherCard = () => {
  return (
    <div className="flex gap-[24px]">
      {vouchers.map((voucher, index) => (
        <CardBorderLine
          key={index}
          width="369px"
          height="416px"
          backgroundImage="#240500F7"
          padding="21px 16px"
          borderRadius="16px"
          display="flex"
          alignItems="center"
        >
          <div className="flex flex-col gap-[8px]">
            <Image width={327} height={228} alt={voucher.title} src={voucher.image} />
            <div className="font-bold text-[20px] text-custom-text">{voucher.title}</div>
            <div className="font-light text-[20px] text-custom-white">{voucher.description}</div>
            <BoxBorderLine backgroundImage="#FF1E02" width="100%" height="44px">
              <div className="flex h-full items-center gap-2 text-center justify-center">
                <div className="text-[#D2CACA] font-semibold text-[16px] line-through">
                  {voucher.originalPrice}
                </div>
                <div className="text-custom-white font-semibold text-[16px]">
                  {voucher.discountedPrice}
                </div>
              </div>
            </BoxBorderLine>
          </div>
        </CardBorderLine>
      ))}
    </div>
  );
};

export default VoucherCard;
