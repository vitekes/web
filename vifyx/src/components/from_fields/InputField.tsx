import classNames from "classnames";
import React from "react";

interface IInputField {
  label_text: string;
  id: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: React.HTMLInputTypeAttribute;
  required?: boolean;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  wrapperClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
}
export default function InputField({ required = true, ...props }: IInputField) {
  const wrapperClassNameDefault = "space-y-[15px] text-lg";
  const wrapperCombinedClassName = classNames(wrapperClassNameDefault, props.wrapperClassName);

  const inputClassNameDefault = "h-11 w-full rounded-md border p-1";
  const inputCombinedClassName = classNames(inputClassNameDefault, props.inputClassName);

  const labelClassNameDefault = "";
  const labelCombinedClassName = classNames(labelClassNameDefault, props.labelClassName);

  return (
    <div className={wrapperCombinedClassName}>
      <label htmlFor={props.id} className={labelCombinedClassName}>
        {props.label_text}
      </label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required={required}
        autoComplete={props.autoComplete}
        className={inputCombinedClassName}
      />
    </div>
  );
}
