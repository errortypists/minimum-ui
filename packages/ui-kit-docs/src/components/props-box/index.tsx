import React from "react"
import styled from "styled-components"
import { Flex, QuickTable, Typography } from "ui-kit"
import Color from "../../assets/styles/color"
import JsonData from "../../assets/json/component.json"

const { SubTitle } = Typography

interface Props {
  name: string
}

interface ItemProps {
  name: string
  type: string[]
  default: string
  description: string
}

interface ComponentProps {
  [key: string]: { props: ItemProps[] }
}

const PropsBox: React.FC<Props> = ({ name }) => {
  const components: ComponentProps = JsonData
  const typeOfButtonProps = (arr: string[]) => {
    return arr.map((_: string, index: number) => (
      <React.Fragment key={index}>
        <PropsTypeBox>{_}</PropsTypeBox>
        {index !== arr.length - 1 && <div />}
      </React.Fragment>
    ))
  }

  return (
    <Flex gap={0} direction="column" align="flex-start">
      <SubTitle>Props</SubTitle>
      <Flex style={{ width: "100%", overflowX: "auto" }}>
        <Flex style={{ minWidth: "500px" }}>
          <QuickTable
            ratio={[20, 15, 15, 50]}
            header={["Name", "Type", "Default", "Description"]}
            data={components[name].props}
            createRow={(item: ItemProps) => {
              return [
                <div>{item.name}</div>,
                <div>{typeOfButtonProps(item.type)}</div>,
                <div>{item.default || "-"}</div>,
                <div>{item.description}</div>,
              ]
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

const PropsTypeBox = styled.span`
  border-radius: 4px;
  background: ${Color.GRAY[2]};
  padding: 2px 4px;
  font-size: 13px;
  user-select: none;
`

export default PropsBox
