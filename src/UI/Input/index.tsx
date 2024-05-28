import React, {
  InputHTMLAttributes,
  useCallback,
  useMemo,
  useState,
} from "react";
import InputStyle, { IconButton } from "./Input.style";
import Label from "UI/Label/index.style";
import Wrapper from "UI/Wrapper/index.style";

import { ReactComponent as ShowPass } from "images/showPass.svg";
import { ReactComponent as HidePass } from "images/hidePass.svg";

type Props = {
  label: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
};

function Input({ label, inputProps }: Props) {
  const [isShowPass, setIsShowPass] = useState(false);

  const toggleShowPass = useCallback(() => {
    setIsShowPass((prev) => !prev);
  }, []);

  const passIcon = useMemo(
    () =>
      isShowPass ? (
        <IconButton onClick={toggleShowPass} type="button">
          <ShowPass />
        </IconButton>
      ) : (
        <IconButton onClick={toggleShowPass} type="button">
          <HidePass />
        </IconButton>
      ),
    [isShowPass]
  );
  const isTypePassword = inputProps.type === "password";
  return (
    <div>
      <Label htmlFor={inputProps.name}>{label}</Label>
      <Wrapper>
        <InputStyle
          id={inputProps.name}
          className={isTypePassword ? "input--password" : ""}
          {...inputProps}
          type={(isTypePassword && isShowPass && "text") || inputProps.type}
        />
        {isTypePassword ? passIcon : null}
      </Wrapper>
    </div>
  );
}

export default Input;
