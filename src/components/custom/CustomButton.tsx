import React from "react";

interface CustomButtonProps {
    text: string;
    width?: string;
    height?: string;
    className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    text,
    width = "w-[200px]",
    height = "h-[44px]",
    className = "",
}) => {
    return (
        <button
            className={`bg-[#FF1E02] cursor-pointer text-white text-[16px] font-semibold text-[16px] font-semibold rounded-[8px] ${width} ${height} ${className}`}
        >
            {text}
        </button>
    );
};

export default CustomButton;
