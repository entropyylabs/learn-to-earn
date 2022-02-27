import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function AddContent() {
  const [value, setValue] = useState("");
  const editorRef = useRef(null);
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const printVal = () => {
    console.log(value);
  };
  return (
    <div>
      <ReactQuill
        ref={editorRef}
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
      />
    </div>
  );
}

export default AddContent;
