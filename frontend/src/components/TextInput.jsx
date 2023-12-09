import React from "react";

const TextInput = ({ label, name, type = "text", ...others }) => {
  return (
    <div className="formControl">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} {...others} />
    </div>
  );
};

export default TextInput;
