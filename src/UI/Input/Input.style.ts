import styled from "styled-components";
import colors from "styles/constants";

type InputProps = {
  size?: number;
};

export default styled.input<InputProps>`
  display: block;
  width: 100%;
  border: 1px solid ${colors.inputBorder};
  font-size: ${({ size }) => size || 16}px;
  padding: 36px 18px;
  background: transparent;
  color: ${colors.white};

  &.input--password {
    padding: 36px 36px 36px 18px;
  }

  &:placeholder {
    color: ${colors.grey};
    font-size: ${({ size }) => size || 16}px;
  }

  @media screen and (max-width: 600px) {
    font-size: 15px;
    padding: 16px 9px;
    &.input--password {
      padding: 16px 36px 16px 9px;
    }
    &:placeholder {
      font-size: 15px;
    }
  }
`;

export const IconButton = styled.button`
  position: absolute;
  top: 50%;
  right: 9px;
  transform: translateY(-50%);
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;

  @media screen and (max-width: 600px) {
    & > svg {
      width: 17px;
    }
  }
`;
