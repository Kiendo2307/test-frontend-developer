interface BoxBorderLineProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  backgroundImage?: string;
}

const BoxBorderLine = ({
  children,
  width ,
  height,
  padding,
  borderRadius,
  backgroundImage,
}: BoxBorderLineProps) => {
  return (
    <div className="container-box">
      <div
        className="border-box"
        style={{ width, height, borderRadius }}
      >
        <div
          className="inner-box"
          style={{ padding, borderRadius,backgroundImage: backgroundImage?.startsWith("linear-gradient")
            ? backgroundImage
            : undefined,
          backgroundColor: !backgroundImage?.startsWith("linear-gradient")
            ? backgroundImage
            : undefined, }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default BoxBorderLine;
