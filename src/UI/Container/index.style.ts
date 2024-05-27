import styled from "styled-components";

type ContainerPropsType = {
  size?: "lg";
};

const Container = styled.div<ContainerPropsType>`
  width: min(${({ size }) => (size === "lg" ? "1230px" : "730px")}, 100%);
  padding: 0 15px;
  margin: 0 auto;
`;

export default Container;
