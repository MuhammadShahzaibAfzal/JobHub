import React from "react";
import icon from "../assets/cv.svg";

const FileInput = ({ name, label, ...others }) => {
  return (
    <div className="formControl w-60">
      <label
        htmlFor={name}
        className="cursor-pointer shadow-md border-2 border-primary rounded-md px-3 py-3 flex items-center gap-4"
      >
        <img src={icon} alt="" /> {label}
      </label>
      <input type="file" className="hidden" id={name} name={name} {...others} />
    </div>
  );
};

export default FileInput;
