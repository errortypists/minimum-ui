import React from "react"
import styled from "styled-components"
import { Flex, QuickTable } from "ui-kit"
import Color from "../../assets/styles/color"
import JsonData from "../../assets/json/component.json"

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
  // if (name !== "" && !!components[name]) {
  //   return <></>
  // }
  console.log("ytim", name, components[name], components)
  const hasPropsTable = name !== "" && !!components[name]

  return (
    <Flex gap={0} direction="column" align="flex-start">
      <p>{name}</p>
      <Flex style={{ width: "100%", overflowX: "auto" }}>
        <Flex style={{ minWidth: "500px" }}>
          {hasPropsTable ? (
            <QuickTable
              ratio={[20, 20, 20, 40]}
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
          ) : (
            <p>not found props item</p>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}

const PropsTypeBox = styled.span`
  border-radius: 2px;
  background: ${Color.GRAY[2]};
  padding: 2px 4px;
  font-size: 13px;
  user-select: none;
`

export default PropsBox
