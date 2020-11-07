import React from "react";
import "./index.scss";

interface IInputProps {
  value: string;
  onChange(term: string): void;
}

const Input = ({ value, onChange }: IInputProps) => {
  return (
    <input
      type="text"
      name="search-field"
      className="input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    ></input>
  );
};

export default Input;
