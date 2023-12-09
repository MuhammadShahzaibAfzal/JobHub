import React from "react";

const TextArea = ({ label, name, ...others }) => {
  return (
    <div className="formControl">
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} cols="30" rows="3" {...others}></textarea>
    </div>
  );
};

export default TextArea;
