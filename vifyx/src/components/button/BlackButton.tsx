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
  textClassName,
  className,
}: IBlackButton) {
  
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
