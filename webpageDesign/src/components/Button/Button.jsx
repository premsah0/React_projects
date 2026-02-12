import React from "react";

const Button = ({ isOutline, fullWidth, icon, text, ...rest }) => {
  if (!text) return null
  // Size Styles
  const sizeStyle = fullWidth ? "w-[472px] h-[44px]" : "w-[220px] h-[44px]";

  // Common Layout
  const layoutStyle =
    "flex items-center justify-center gap-[10px] px-[18px] py-[10px] rounded-[5px] transition";

  // Color Styles
  const primaryStyle = "bg-black text-white hover:bg-gray-900";

  const outlineStyle =
    "border border-black text-black bg-white ";

  return (
    <button
      {...rest}
      className={`${sizeStyle} ${layoutStyle} ${
        isOutline ? outlineStyle : primaryStyle
      }`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
