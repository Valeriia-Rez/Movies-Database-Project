import React from "react";
import "./index.scss";

interface IInputProps {
  value: string;
  onChange(term: string): void;
  onKeyPress(e: any): void;
}

const Input = ({ value, onChange, onKeyPress }: IInputProps) => {
  return (
    <input
      type="text"
      name="search-field"
      className="input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={(e) => onKeyPress(e)}
    ></input>
  );
};

export default Input;
