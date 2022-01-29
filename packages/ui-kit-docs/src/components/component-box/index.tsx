import { Grid } from "ui-kit"
import { Link } from "react-router-dom"
import styled from "styled-components"

import BaseStyle from "../../assets/styles/base"
import Color, { BaseColor } from "../../assets/styles/color"
import component from "../../assets/json/component.json"
import useStatus from "../../hooks/useStatus"

const ComponentBox: React.FC = () => {
  const names = Object.keys(component)
  const { menu, setMenu } = useStatus()
  return (
    <Grid gap={10} col={4} style={{ marginBottom: "50px" }}>
      {names.map((menuName, index) => {
        const id = `cb-${index}`
        const lowerMenuName = menuName.toLocaleLowerCase()
        const url = `/${lowerMenuName}`
        console.log(menu, url)
        const isSelected = menu?.url === url
        return (
          <BoxWrapper
            key={id}
            to={url}
            onClick={() => {
              setMenu({
                displayName: menuName,
                url: url,
              })
            }}
          >
            <div
              style={{ fontWeight: isSelected ? "bold" : 400 }}
            >{`<${menuName} />`}</div>
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
