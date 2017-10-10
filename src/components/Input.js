import React from "react";

const Input = props => {
  const {
    className,
    id,
    type,
    name,
    placeholder,
    value,
    required,
    onChange,
    disabled
  } = props;
  return (
    <input
      type={type}
      className={className}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value || ""}
      required={required}
      onChange={event => {
        onChange(event);
      }}
      disabled={disabled}
    />
  );
};

export default Input;
