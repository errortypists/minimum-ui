import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Grid } from "ui-kit"
import styled from "styled-components"

import BaseStyle from "../../assets/styles/base"
import Color, { BaseColor } from "../../assets/styles/color"
import components from "../../assets/components"
import useStatus from "../../hooks/useStatus"

const ComponentBox: React.FC = () => {
  const names = Object.keys(components)
  const [width, setWidth] = useState(window.innerWidth)
  const { selectedMenu, setSelectedMenu } = useStatus()

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
      {names.map((menuName, index) => {
        const id = `cb-${index}`
        const url = `/${menuName}`
        const isSelected = selectedMenu?.url === url
        return (
          <BoxWrapper
            key={id}
            to={url}
            onClick={() => {
              setSelectedMenu({
                id: menuName,
                url: url,
              })
            }}
          >
            <div
              style={{ fontWeight: isSelected ? "bold" : 400 }}
            >{`<${components[menuName].displayName} />`}</div>
          </BoxWrapper>
        )
      })}
    </Grid>
  )
}

const BoxWrapper = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

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
