import styled from "styled-components";
import colors from "styles/constants";

const Label = styled.label`
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 15px;
  color: ${colors.label};

  @media screen and (max-width: 600px) {
    font-size: 19px;
    margin-bottom: 9px;
  }
`;

export default Label;
