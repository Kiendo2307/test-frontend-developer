import BoxBorderLine from "../custom/BoxBorderLine";
import CardBorderLine from "../custom/CardBorderLine";
import Image from "next/image";

const DirectCard = () => {
  const cardData = [
    {
      imgSrc: "/assets/images/img_pack.png",
      title: "Small Pack",
      gemAmount: 20,
      price: "$9.99",
      icon: "/assets/icons/icon_ruby.svg",
      globalIcon: "/assets/icons/icon_global.svg",
    },
    {
      imgSrc: "/assets/images/img_pack2.png",
      title: "Medium Pack",
      gemAmount: 20,
      price: "$9.99",
      icon: "/assets/icons/icon_ruby.svg",
      globalIcon: "/assets/icons/icon_global.svg",
    },
    {
      imgSrc: "/assets/images/img_pack3.png",
      title: "Giant Pack",
      gemAmount: 20,
      price: "$9.99",
      icon: "/assets/icons/icon_ruby.svg",
      globalIcon: "/assets/icons/icon_global.svg",
    },
    {
      imgSrc: "/assets/images/img_pack4.png",
      title: "Enormous Pack",
      gemAmount: 20,
      price: "$9.99",
      icon: "/assets/icons/icon_ruby.svg",
      globalIcon: "/assets/icons/icon_global.svg",
    },
  ];

  return (
    <div className="flex gap-6">
      {cardData.map((card, index) => (
        <CardBorderLine
          key={index}
          backgroundImage="#240500F7"
          borderRadius="16px"
          padding="0 20px 16px 20px"
        >
          <div className="flex flex-col gap-2">
            <Image
              width={228}
              height={228}
              alt={card.title}
              src={card.imgSrc}
            />
            <div className="font-bold text-[20px] text-[#D9D9D9]">{card.title}</div>
            <div
              style={{ padding: "0 12px" }}
              className="w-[228px] h-[44px] flex justify-between items-center bg-[#482929]"
            >
              <div className="flex gap-[10px]">
                <Image
                  width={20}
                  height={20}
                  alt="Gem Icon"
                  src={card.icon}
                />
                <div className="font-semibold text-[FFFFFF] text-[16px]">Gem</div>
              </div>
              <div className="font-semibold text-[FFFFFF] text-[16px]">{card.gemAmount}</div>
            </div>
            <div className="flex gap-2">
              <BoxBorderLine backgroundImage="#FF1E02" width="176px" height="44px">
                <div className="text-[16px] justify-center h-full items-center flex font-semibold text-[#FFFFFF]">
                  {card.price}
                </div>
              </BoxBorderLine>
              <BoxBorderLine backgroundImage="#FF1E02" width="44px" height="44px">
                <div className="text-[16px] justify-center h-full items-center flex font-semibold text-[#FFFFFF]">
                  <Image
                    width={20}
                    height={20}
                    alt="Global Icon"
                    src={card.globalIcon}
                  />
                </div>
              </BoxBorderLine>
            </div>
          </div>
        </CardBorderLine>
      ))}
    </div>
  );
};

export default DirectCard;
