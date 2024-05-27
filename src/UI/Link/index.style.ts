import colors from "constants/styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

type CustomLinkProps = {
  color?: string;
  size?: "lg";
};

const CustomLink = styled(Link)<CustomLinkProps>`
  font-size: ${({ size }) => (size === "lg" ? "22px" : "17px")};
  color: ${({ color }) => color || colors.white};
`;

export default CustomLink;
