import React from "react"
import styled from "styled-components"
import { Flex, QuickTable } from "ui-kit"
import Color from "../../assets/styles/color"
import components, { ItemProps } from "../../assets/components"

import Layout from "../../components/Layout"

interface Props {
  name: string
  hasTitle?: boolean
}

const PropsBox: React.FC<Props> = ({ name, hasTitle = false }) => {
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
      {hasPropsTable && hasTitle ? (
        <Layout.ComponentTitle>Props</Layout.ComponentTitle>
      ) : (
        <></>
      )}
      <Flex style={{ width: "100%", overflowX: "auto" }}>
        <Flex
          direction="column"
          align="flex-start"
          style={{ minWidth: "500px" }}
        >
          {hasPropsTable ? (
            <>
              <QuickTable
                ratio={[20, 23, 20, 37]}
                header={["Name", "Type", "Default", "Description"]}
                data={components[urlRemoveName].props}
                customRow={(item: ItemProps) => {
                  return [
                    <div>{item.name}</div>,
                    <div>{typeOfButtonProps(item.type)}</div>,
                    <div>{item.default || "-"}</div>,
                    <div>{item.description}</div>,
                  ]
                }}
              />
            </>
          ) : (
            <></>
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
  font-size: 12px;
  user-select: none;
`

export default PropsBox
