import CustomButton from "../custom/CustomButton";

const sections = [
  {
    title: "ORDER",
    items: ["Return & Refund Policy", "Cancellation/Order Change", "DMCA"],
  },
  {
    title: "RESOURCES",
    items: ["Privacy Policy", "Terms of Services", "About Us", "FAQs"],
  },
  {
    title: "CUSTOMERS",
    items: ["Case Studies", "Store Examples"],
  },
];

const socialLinks = ["X", "Facebook", "Linkedln", "Youtube", "Pinterest", "Instagram"];

const FooterTop = () => {
  const sectionClass = "flex flex-col gap-2";
  const titleClass = "font-bold text-[24px] text-custom-white";
  const itemClass = "font-normal text-[20px] text-custom-white";
  const socialItemClass = "font-normal text-[16px] text-custom-white";

  return (
    <div
      style={{ paddingTop: "40px", paddingBottom: "20px" }}
      className="container flex justify-between w-full h-[272px]"
    >
      {sections.map((section) => (
        <div key={section.title} className={sectionClass}>
          <div className={titleClass}>{section.title}</div>
          {section.items.map((item) => (
            <div key={item} className={itemClass}>
              {item}
            </div>
          ))}
        </div>
      ))}

      <div className="flex flex-col gap-4">
        <CustomButton text="CONTACT US" width="w-[126px]" height="h-[44px]" />
        <div className="flex flex-col gap-1">
          {socialLinks.map((item) => (
            <div key={item} className={socialItemClass}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
