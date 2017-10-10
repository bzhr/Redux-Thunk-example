import React from "react";

const Button = ({ disabled, onClick, className, content, name, value }) => (
  <button
    type="button"
    disabled={disabled}
    className={className}
    name={name}
    value={value}
    onClick={event => {
      onClick();
    }}
  >
    {content}
  </button>
);

export default Button;
