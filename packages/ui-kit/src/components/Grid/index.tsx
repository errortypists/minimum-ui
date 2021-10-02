import React from "react";
import styled, { css } from "styled-components";

interface Props {
  size?: [number, number];
  align?: "center" | "flex-start" | "flex-end";
  justify?: "center" | "flex-start" | "flex-end" | "stretch";
  gap?: number;
  style?: React.CSSProperties;
}

const Grid: React.FC<Props> = ({
  size = [undefined, undefined],
  children,
  align = "center",
  justify = "center",
  gap = 0,
  style,
}) => {
  const [col, row] = size;
  return (
    <Wrapper
      style={{ alignItems: align, justifyItems: justify, ...style }}
      gap={gap}
      col={col || 1}
      row={row || 1}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<any>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.col}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.col}, 1fr)`};
  justify-items: center;

  ${(props) =>
    props.gap > 0 &&
    css`
      grid-gap: ${props.gap}px;
    `}
`;

export default Grid;
