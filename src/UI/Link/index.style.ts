import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "styles/constants";

type CustomLinkProps = {
  color?: string;
  size?: number;
  font?: "Montserrat" | "Inter";
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
};

const StyledLink = styled(Link)<CustomLinkProps>`
  display: inline-block;
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color || colors.white};
  font-family: ${({ font = "Inter" }) => font}, sans-serif;
  margin-top: ${({ mt = 0 }) => mt}px;
  margin-bottom: ${({ mb = 0 }) => mb}px;
  margin-left: ${({ ml = 0 }) => ml}px;
  margin-right: ${({ mr = 0 }) => mr}px;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

export default StyledLink;
