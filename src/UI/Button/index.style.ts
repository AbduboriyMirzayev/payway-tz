import styled from "styled-components";
import colors from "styles/constants";

type ButtonProps = {
  margin?: string;
  mediaMargin?: string;
};

const Button = styled.button<ButtonProps>`
  display: block;
  width: 100%;
  padding: 32px;
  background-color: ${colors.btnBlue};
  border: 1px solid ${colors.btnBlue};
  margin: ${({ margin }) => margin || "0px"};
  font-size: 30px;
  font-weight: 600;
  color: ${colors.white};
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
    padding: 20px;
    margin: ${({ margin, mediaMargin }) => mediaMargin || margin || "0px"};
  }
`;

export default Button;
