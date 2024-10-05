import React, { ChangeEvent, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

interface ICustomContentEditor {
    value: string;
    onChange: (event: EEventHandler<"init">) => null;
}

export default function CustomContentEditor({ value, onChange }: ICustomContentEditor) {

  return (
    <>
      <Editor
        onInit={onChange}
        initialValue={value}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount"
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
      />
    </>
  );
}
