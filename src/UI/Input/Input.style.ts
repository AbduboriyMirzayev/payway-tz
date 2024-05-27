import styled from "styled-components";
import colors from "styles/constants";

type InputProps = {
  size?: number;
};

export default styled.input<InputProps>`
  border: 1px solid ${colors.inputBorder};
  font-size: ${({ size }) => size || "16px"};
  padding: 36px 18px;

  :placeholder {
    color: ${colors.grey};
    font-size: ${({ size }) => size || "16px"};
  }

  @media screen and (max-width: 375px) {
    font-size: ${({ size }) => size || "16px"};

    :placeholder {
      font-size: ${({ size }) => size || "16px"};
    }
  }
`;
