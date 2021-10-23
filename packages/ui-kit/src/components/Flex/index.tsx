import React from "react"
import styled from "styled-components"

// NOTE gap 값의 기본 높이 정해야 함

interface Props {
  align?: "center" | "flex-start" | "flex-end"
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
  direction?: "row" | "column"
  wrap?: "nowrap" | "wrap" | "wrap-reverse" | "inherit"
  gap?: number
  style?: React.CSSProperties
}

const Flex: React.FC<Props> = ({
  children,
  align = "center",
  justify = "flex-start",
  direction = "row",
  wrap = "nowrap",
  gap = 8,
  style,
}) => {
  return (
    <Wrapper
      style={{
        alignItems: align,
        justifyContents: justify,
        flexWrap: wrap,
        gap,
        ...style,
      }}
      data-direction={direction}
      gap={gap}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div<any>`
  width: 100%;
  display: flex;
  align-self: stretch;
  flex-wrap: wrap;
  flex: 1;
  box-sizing: border-box;
  text-align: left;

  &[data-direction="column"] {
    flex-direction: column;
  }
`

export default Flex
