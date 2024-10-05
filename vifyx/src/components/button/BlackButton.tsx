import React from "react";
import classNames from "classnames";


interface IBlackButton {
  text: string;
  btnWidth?: string;
  btnHight?: string;
  btnRounded?: "sm" | "md" | "lg" | "xl" | "2xl" | string;
  textClassName?: string;
  className?: string;
  textSize?: string;
  onClick: () => void;
}

export default function BlackButton({
  text,
  onClick,
  btnWidth = "212px", // Значение по умолчанию
  btnHight = "45px", // Значение по умолчанию
  btnRounded = "6px", // Значение по умолчанию
  textClassName,
  className,
  textSize = "11px"
}: IBlackButton) {
  // let btnClassNameString = `block w-[${btnWidth}] h-[${btnHight}] bg-[#252A3D] active:bg-[#B4B4B4] hover:bg-slate-600`;

  // if (["sm", "md", "lg", "xl", "2xl"].includes(String(btnRounded))) {
  //   btnClassNameString += ` rounded-${btnRounded}`;
  // } else {
  //   btnClassNameString += ` rounded-[${btnRounded}]`;
  // }

  // let btnCombinedBtnClassName: string;
  // if (className){
  //   btnCombinedBtnClassName = classNames(btnClassNameString, className);
  // } else {
  //   btnCombinedBtnClassName = btnClassNameString;
  // }

  // const textClassNameString = `font-[Inter] text-[${textSize}] font-bold text-white`;

  // const textCombinedClassName = classNames(textClassNameString, textClassName);
  const btnClassNameDefault = "block w-[212px] h-[45px] bg-[#252A3D] active:bg-[#B4B4B4] hover:bg-slate-600 rounded-[6px]"
  const btnCombinedClassName = classNames(btnClassNameDefault, className);

  const textClassNameDefault = "font-[Inter] text-[11px] font-bold text-white"
  const textCombinedClassName = classNames(textClassNameDefault, textClassName);

  return (
    <button className={btnCombinedClassName} onClick={onClick}>
      <span className={textCombinedClassName}>{text}</span>
    </button>
  );
}
