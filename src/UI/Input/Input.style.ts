import colors from "constants/styles";
import styled from "styled-components";

export default styled.input`
  border: 1px solid ${colors.inputBorder};
  font-size: 25px;
  padding: 36px 18px;

  :placeholder {
    color: ${colors.grey};
    font-size: 25px;
  }
`;
