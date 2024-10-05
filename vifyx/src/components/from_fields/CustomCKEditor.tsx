import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./ckeditor-tailwind.css";
import classNames from "classnames";

interface ICKEditorComponentProps {
  value: string;
  onChange: (data: string) => void;
  wrapperClassName?: string;
  label_text: string;
  labelClassName?: string;
  description?: string;
  descriptionClassName?: string;
}

export default function CustomCKEditor(props: ICKEditorComponentProps) {
  const defaultConfig = {
    toolbar: [
      "heading",
      "|",
      "alignment",
      "bold",
      "italic",
      "strikethrough",
      "underline",
      "code",
      "|",
      "link",
      "bulletedList",
      "numberedList",
      "todoList",
      "blockQuote",
      "|",
      "imageUpload",
      "insertTable",
      "mediaEmbed",
      "|",
      "fontSize",
      "fontFamily",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "highlight",
      "horizontalLine",
      "pageBreak",
      "|",
      "codeBlock",
      "htmlEmbed",
      "|",
      "removeFormat",
      "undo",
      "redo"
    ],
    image: {
      toolbar: ["imageTextAlternative", "imageStyle:full", "imageStyle:side", "|", "linkImage"]
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells", "|", "tableProperties", "tableCellProperties"]
    }
  };

  const wrapperClassNameDefault = "space-y-[15px] text-lg";
  const wrapperCombinedClassName = classNames(wrapperClassNameDefault, props.wrapperClassName);

  const labelClassNameDefault = "";
  const labelCombinedClassName = classNames(labelClassNameDefault, props.labelClassName);

  const descriptionClassNameDefault = "font-medium text-[26px] text-[#909090]";
  const descriptionCombinedClassName = classNames(descriptionClassNameDefault, props.descriptionClassName);

  return (
    <div className={wrapperCombinedClassName}>
      <div className={labelCombinedClassName}>{props.label_text}</div>
      {props.description && <div className={descriptionCombinedClassName}>{props.description}</div>}

      <CKEditor
        editor={ClassicEditor}
        data={props.value}
        onChange={(_, editor) => {
          const data = editor.getData();
          props.onChange(data);
        }}
        onReady={() => {
          document.documentElement.style.setProperty("--ck-border-radius", "12px");
        }}
        config={defaultConfig}
      />
    </div>
  );
}
