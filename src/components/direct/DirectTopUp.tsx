import VoucherBanner from "../voucher/VoucherBanner";
import DirectCard from "./DirectCard";


const DirectTopUp = () => {
  return (
    <div
      className="relative h-[659px] w-full flex flex-col justify-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url('/assets/images/bg_rock_no_shadow.png')`,
      }}
    >
      <div className="text-[48px] text-center text-[#D9D9D9] font-bold">
        DirectTop-Up
      </div>
      <div style={{marginTop:"36px"}} className="flex flex-col items-center gap-6">
        <VoucherBanner/>
        <DirectCard/>
      </div>
    </div>
  );
};

export default DirectTopUp;
