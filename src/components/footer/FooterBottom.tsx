
import useFetchData from "@/src/hooks/useFetchData";
import Image from "next/image";
import { useEffect, useState } from "react";

const FooterBottom = () => {
  const { data } = useFetchData("/api/year");
  const [year, setYear] = useState(null);

  useEffect(() => {
    if (data && data.year && year === null) {
      setYear(data.year);
    }
  }, [data, year]);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between container h-[98px]">
      <div className="flex items-center">
        <Image
          className="cursor-pointer"
          width={268}
          height={76}
          alt="Store Logo"
          src="/assets/images/logo_footer.png"
        />
      </div>
      <div className="text-[#616161] text-[16px] flex flex-col lg:flex-row gap-1 lg:gap-4 text-normal">
        <div>© {year} HABBYY PTE. LTD. All Rights Reserved.</div>
        <div>
          <a className="cursor-pointer underline">Privacy Policy</a> |{" "}
          <a className="cursor-pointer underline">Cookie Settings</a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
