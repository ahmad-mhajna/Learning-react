import React from "react";

const Input = ({ value, onInput, label }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="number" value={value} onInput={onInput} name={label} />
    </div>
  );
};
export default Input;
