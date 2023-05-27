import React from "react";

export default function FormInput({
  id,
  label,
  type = "text",
  value,
  onValueChange,
  className,
}) {
  const handleOnInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    onValueChange(key, value);
  };
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={handleOnInput}
        className={className}
      />
    </>
  );
}
