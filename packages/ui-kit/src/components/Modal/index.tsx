import React from "react"
import styled, { css } from "styled-components"

interface Props {
  style?: React.CSSProperties
}

const Grid: React.FC<Props> = ({
	children,
  style,
}) => {
  return (
    <Wrapper
      style={{ ...style }}
    >
      {children}1234
    </Wrapper>
  )
}

const Wrapper = styled.div<any>`

`

export default Grid
