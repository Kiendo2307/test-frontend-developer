import PromoCard from "./PromoCard";

const Banner = () => {
  return (
    <div
      className="relative h-[659px] w-full flex flex-col justify-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url('/assets/images/bg_banner.png')`,
        marginTop: "72px",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      <div className="container relative z-10">
        <div className="text-[64px] text-[#D9D9D9] font-bold">
          Welcome to Apps Store
        </div>
      </div>

      <div className="relative z-10">
        <PromoCard />
      </div>
    </div>
  );
};

export default Banner;
