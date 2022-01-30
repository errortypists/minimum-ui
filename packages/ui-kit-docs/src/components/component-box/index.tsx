import { Grid } from "ui-kit"
import styled from "styled-components"
import BaseStyle from "../../assets/styles/base"
import Color, { BaseColor } from "../../assets/styles/color"
import component from "../../assets/json/component.json"
import { useEffect, useState } from "react"

const ComponentBox: React.FC = () => {
  const names = Object.keys(component)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const updateWindowDimensions = () => {
      const currentWidth = window.innerWidth
      setWidth(currentWidth)
    }

    window.addEventListener("resize", updateWindowDimensions)

    return () => window.removeEventListener("resize", updateWindowDimensions)
  }, [])

  return (
    <Grid gap={10} col={width > 1050 ? 4 : 3} style={{ marginBottom: "50px" }}>
      {names.map((name: string) => (
        <BoxWrapper
          key={name}
          onClick={() => console.log(name.toLowerCase())}
        >{`<${name} />`}</BoxWrapper>
      ))}
    </Grid>
  )
}

const BoxWrapper = styled.div`
  border: 1px solid ${BaseColor.border};
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${BaseStyle.fontSize};
  color: ${BaseColor.font};
  box-shadow: 5px 5px 5px ${BaseColor.border};

  &:hover {
    border-color: ${Color.GRAY[0]};
    cursor: pointer;
    background: ${Color.GRAY[0]};
    font-weight: bold;
    border-radius: ${BaseStyle.radius};
  }
`

export default ComponentBox
