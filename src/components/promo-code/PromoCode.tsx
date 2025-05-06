import BoxBorderLine from "../custom/BoxBorderLine";
import PromoCodeInner from "./PromoCodeInner";

const PromoCode = () => {
  return (
    <div
      className="relative h-[659px] w-full flex flex-col justify-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url('/assets/images/bg_rock_no_shadow.png')`,
        marginTop:"-100px"
      }}
    >
       <div className="absolute inset-0 bg-black opacity-50 z-0" />
      <div className="flex relative z-10 justify-center">
        <BoxBorderLine
          width="1152px"
          height="372px"
          borderRadius="36px"
          padding="32px"
          backgroundImage="linear-gradient(90deg, #422B98 0%, #6E48FE 100%)"
        >
          <PromoCodeInner />
        </BoxBorderLine>
      </div>
    </div>
  );
};

export default PromoCode;
