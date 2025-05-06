import VoucherBanner from "./VoucherBanner";
import VoucherCard from "./VoucherCard";

const Voucher = () => {
  return (
    <div
      className="relative h-[659px] w-full flex flex-col justify-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url('/assets/images/bg_rock_no_shadow.png')`,
        marginTop:"-100px"
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0" />
      <div className="text-[48px] text-center text-[#D9D9D9] relative z-10 font-bold">
        Voucher
      </div>
      <div  className="flex flex-col relative z-10 items-center gap-6">
        <VoucherBanner />
        <VoucherCard />
      </div>
    </div>
  );
};

export default Voucher;
