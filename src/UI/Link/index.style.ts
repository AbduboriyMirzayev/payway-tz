import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "styles/constants";

type CustomLinkProps = {
  color?: string;
  size?: number;
  mediaSize?: number;
};

const CustomLink = styled(Link)<CustomLinkProps>`
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color || colors.white};

  @media screen and (max-width: 375px) {
    font-size: ${({ size, mediaSize }) =>
      mediaSize + "px" || size + "px" || "16px"};
  }
`;

export default CustomLink;
