interface BoxBorderLineProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  backgroundImage?: string;
  padding?: string;
  borderRadius?: string;
}

const BoxBorderLine = ({
  children,
  width,
  height,
  padding,
  backgroundImage,
  borderRadius,
}: BoxBorderLineProps) => {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width, height, borderRadius: borderRadius }}
    >
      <div
        className="absolute inset-0 rounded-[36px] p-[0.7px] pointer-events-none"
        style={{
          background:
            "linear-gradient(96.75deg, #C9C9C9 -2.49%, #000000 51.75%, #C9C9C9 102.95%)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "destination-out",
        }}
      ></div>

      <div
        style={{
          padding: padding,
          backgroundImage: backgroundImage?.startsWith("linear-gradient")
            ? backgroundImage
            : undefined,
          backgroundColor: !backgroundImage?.startsWith("linear-gradient")
            ? backgroundImage
            : undefined,
           
        }}
        className="relative z-10 w-full h-full text-white"
      >
        {children}
      </div>
    </div>
  );
};

export default BoxBorderLine;
