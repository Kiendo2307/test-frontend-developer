import React from "react";

interface CustomButtonProps {
    text: string;
    width?: string;
    height?: string;
    className?: string;
    rounded?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    text,
    width ,
    height,
    className,
    rounded,
}) => {
    return (
        <button
            className={`bg-[#FF1E02] cursor-pointer text-white text-[16px] font-semibold ${rounded} ${width} ${height} ${className}`}
        >
            {text}
        </button>
    );
};

export default CustomButton;
