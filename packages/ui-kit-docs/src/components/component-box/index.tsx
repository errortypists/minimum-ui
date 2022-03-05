import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Grid } from "ui-kit"
import styled from "styled-components"

import Color, { BaseColor } from "../../assets/styles/color"
import components, { ComponentProps } from "../../assets/components"
import useStatus from "../../hooks/useStatus"

const sortedComponents = (() => {
  const names = Object.keys(components)
  names.sort()
  let newComponentSet: ComponentProps = {}
  names.forEach((name) => {
    newComponentSet[name] = components[name]
  })
  return newComponentSet
})()

const ComponentBox: React.FC = () => {
  const names = Object.keys(sortedComponents)
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
            data-selected={isSelected}
          >
            {`<${sortedComponents[menuName].displayName}/>`}
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

  border: 1px solid ${Color.GRAY[4]};
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: ${BaseColor.font};
  border-radius: 4px;
  font-family: Kanit;
  font-weight: 100;

  &:hover {
    font-weight: 200;
  }

  &[data-selected="true"] {
    font-weight: 200;
    border-color: ${BaseColor.alert.information.border};
    background-color: ${BaseColor.alert.information.background};
  }
`

export default ComponentBox
