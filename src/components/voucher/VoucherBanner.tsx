import BoxBorderLine from "../custom/BoxBorderLine";

const VoucherBanner = () => {
  return (
    <BoxBorderLine
      width="395px"
      height="64px"
      backgroundImage="linear-gradient(90deg, #C71A04 0%, #FF1E02 29.81%, #C71A04 63.46%, #FF1E02 100%)"
      borderRadius="16px"
    >
      <div className="flex h-full justify-center items-center gap-2">
        <div className="w-[57px] h-[24px] bg-[#FFFFFF] text-center text-[#333333] text-[12px] font-bold rounded-[16px] flex items-center justify-center">
          +200%
        </div>
        <div className="text-[#FFFFFF] text-[16px] font-bold">
          Triple the value of the first purchase!
        </div>
      </div>
    </BoxBorderLine>
  );
};

export default VoucherBanner;
