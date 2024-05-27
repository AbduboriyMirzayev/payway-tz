import React, { InputHTMLAttributes } from "react";
import InputStyle from "./Input.style";
import Label from "UI/Label/index.style";

type Props = {
  label: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
};

function Input({ label, inputProps }: Props) {
  return (
    <>
      <Label>{label}</Label>
      <InputStyle {...inputProps} />
    </>
  );
}

export default Input;
