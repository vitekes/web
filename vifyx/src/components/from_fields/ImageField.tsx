import classNames from "classnames";
import React from "react";

interface IImageSize {
  width: string;
  hight: string;
}

interface IImageField {
  label_text: string;
  id: string;
  name: string;
  value: string;
  imageSize?: IImageSize;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  wrapperClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  description?: string;
  descriptionClassName?: string;
  message?: Array<string>;
  message_type?: "error" | "help";
}

export default function ImageField({ required = true, ...props }: IImageField) {
  const wrapperClassNameDefault = "space-y-[15px] text-lg";
  const wrapperCombinedClassName = classNames(wrapperClassNameDefault, props.wrapperClassName);

  const inputClassNameDefault = "h-11 w-full rounded-md border p-1";
  const inputCombinedClassName = classNames(inputClassNameDefault, props.inputClassName);

  const labelClassNameDefault = "";
  const labelCombinedClassName = classNames(labelClassNameDefault, props.labelClassName);

  const descriptionClassNameDefault = "font-medium text-[26px] text-[#909090]";
  const descriptionCombinedClassName = classNames(descriptionClassNameDefault, props.descriptionClassName);

  const imageClassNameDefault = `w-[200px] h-[120px] rounded-lg bg-[]`;
  let imageCombinedClassName = imageClassNameDefault;
  if (props.imageSize) {
    imageCombinedClassName = classNames(imageClassNameDefault, `w-[${props.imageSize?.width}] h-[${props.imageSize?.hight}]`);
  }

  return (
    <div className={wrapperCombinedClassName}>
      <label htmlFor={props.id} className={labelCombinedClassName}>
        {props.label_text}
      </label>
      <div>
        <div className={descriptionCombinedClassName}>{props.description}</div>
        <div className={imageCombinedClassName}>
          <img src="" alt="upload image" className={imageCombinedClassName} />
          <input
            type="file"
            id={props.id}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            required={required}
            autoComplete={props.autoComplete}
            className={inputCombinedClassName}
          />
        </div>
        <div className="text-[14px] font-bold">
          <ul className={props.message_type === "help" ? "text-[#909090]" : "text-red-600"}>
            {props.message?.map(item => <li>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
