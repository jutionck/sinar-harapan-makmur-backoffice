import React from "react";

export default function FormButton({
  label,
  onClick,
  disabled = false,
  className,
  type,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={className}
      type={type}
    >
      {label}
    </button>
  );
}
