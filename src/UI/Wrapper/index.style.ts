import styled from "styled-components";

type WrapperProps = {
  direction?: "row" | "column";
  gap?: number;
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
  gap: ${({ gap = 0 }) => gap}px;
  justify-content: ${({ justify }) => justify || "flex-start"};
  position: relative;
`;

export default Wrapper;
