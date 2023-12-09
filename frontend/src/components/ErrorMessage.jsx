import React from "react";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return;
  return <span className="text-red-600">{error}</span>;
};

export default ErrorMessage;
