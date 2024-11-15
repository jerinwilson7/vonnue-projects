import React from "react";

type input = {
  type: "text" | "checkbox";
  className?: string ;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  onBlur?: () => void;
};

function Input({ type, inputValue, setInputValue, className }: input) {
  return (
    <input
      className={`${className}`}
      type={type}
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />
  );
}

export default Input;
