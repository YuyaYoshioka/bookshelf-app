import * as React from "react";

type TextInputProps = {
  value: string,
  onChange: (value: string) => void,
  titleText: string,
}

export const TextInput: React.FC<TextInputProps> = ({ value, onChange, titleText }) => {
  return (
    <>
      {titleText}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
