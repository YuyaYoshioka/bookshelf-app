import * as React from "react";

type ButtonProps = {
  buttonText: string,
  onClick: () => void,
}

export const Button: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
  return (
    <button onClick={onClick}>{buttonText}</button>
  )
}
