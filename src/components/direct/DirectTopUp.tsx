import VoucherBanner from "../voucher/VoucherBanner";
import DirectCard from "./DirectCard";


const DirectTopUp = () => {
  return (
    <div
      className="relative h-[803px] w-full flex flex-col justify-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url('/assets/images/bg_direct.png')`,
        marginTop:"-100px"
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0" />
      <div className="text-[48px] text-center relative z-10 text-[#D9D9D9] font-bold">
        DirectTop-Up
      </div>
      <div  className="flex relative z-10 flex-col items-center gap-6">
        <VoucherBanner/>
        <DirectCard/>
      </div>
    </div>
  );
};

export default DirectTopUp;
