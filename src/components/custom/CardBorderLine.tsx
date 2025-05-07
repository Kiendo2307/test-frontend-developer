interface CardBorderLineProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  backgroundImage?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
}

const CardBorderLine = ({
  children,
  width,
  height,
  padding,
  borderRadius,
  display,
  alignItems,
  justifyContent,
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
          style={{
            display,
            alignItems,
            justifyContent,
            padding, borderRadius, backgroundImage: backgroundImage?.startsWith("linear-gradient")
              ? backgroundImage
              : undefined,
            backgroundColor: !backgroundImage?.startsWith("linear-gradient")
              ? backgroundImage
              : undefined,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardBorderLine;
