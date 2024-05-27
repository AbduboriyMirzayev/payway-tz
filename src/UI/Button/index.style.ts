import styled from "styled-components";
import colors from "constants/styles";

type ButtonProps = {
  margin?: string;
  mediaMargin?: string;
};

const Button = styled.button<ButtonProps>`
  padding: 32px;
  background-color: ${colors.btnBlue};
  border: 1px solid ${colors.btnBlue};
  margin: ${({ margin }) => margin || "0px"}
  font-size: 30px;
  font-weight: 600;
  
  @media screen and (max-width: 375px) {
      font-size: 20px;
      padding: 20px;
      margin: ${({ margin, mediaMargin }) => mediaMargin || margin || "0px"}
  }
`;

export default Button;
