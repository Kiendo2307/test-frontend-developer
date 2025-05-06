interface CardBorderLineProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  backgroundImage?: string;
}

const CardBorderLine = ({
  children,
  width ,
  height,
  padding,
  borderRadius,
  backgroundImage,
}: CardBorderLineProps) => {
  return (
    <div className="container-box">
      <div
        className="border-card"
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

export default CardBorderLine;
