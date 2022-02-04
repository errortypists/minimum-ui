import React from "react"
import styled from "styled-components"
import { Flex, QuickTable } from "ui-kit"
import Color from "../../assets/styles/color"
import components, { ItemProps } from "../../assets/components"

interface Props {
  name: string
}

const PropsBox: React.FC<Props> = ({ name }) => {
  const urlRemoveName = name ? name.toLocaleLowerCase() : ""
  const typeOfButtonProps = (arr: string[]) => {
    return arr.map((_: string, index: number) => (
      <React.Fragment key={index}>
        <PropsTypeBox>{_}</PropsTypeBox>
        {index !== arr.length - 1 && <div />}
      </React.Fragment>
    ))
  }

  const hasPropsTable = urlRemoveName !== "" && !!components[urlRemoveName]

  return (
    <Flex gap={0} direction="column" align="flex-start">
      <Flex style={{ width: "100%", overflowX: "auto" }}>
        <Flex style={{ minWidth: "500px" }}>
          {hasPropsTable ? (
            <QuickTable
              ratio={[20, 20, 20, 40]}
              header={["Name", "Type", "Default", "Description"]}
              data={components[urlRemoveName].props}
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
            <>
              <p>{urlRemoveName}</p>
              <br />
              <p>not found props item</p>
            </>
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
