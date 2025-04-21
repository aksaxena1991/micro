import { Fragment } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const GenericTextEditor = ({ field, form, ...props }) => {
  const { setFieldValue, setFieldTouched } = form;

  const viewModules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  return (
    <Fragment>
      <ReactQuill
        theme="snow"
        value={field.value}
        style={{ height: "250px", paddingBottom: "60px" }}
        modules={viewModules}
        onChange={(data) => {
          setFieldValue(field.name, data);
        }}
        onBlur={() => {
          setFieldTouched(field.name, true);
        }}
        {...props}
      />
    </Fragment>
  );
};
export default GenericTextEditor;
