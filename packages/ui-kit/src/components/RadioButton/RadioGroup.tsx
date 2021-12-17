import React, { useEffect, useState } from "react"
import styled from "styled-components"

import RadioButton from "components/RadioButton"
import Icon from "components/Icon"

interface Props {
  children: typeof RadioButton[]
  direction?: "row" | "column"
  checked?: boolean
  onChange?: (value: any) => void
}

const RadioGroup: React.FC<Props> = (props) => {
  const { direction = "row", children } = props
  const childCount = React.Children.count(children)
  const array = new Array(childCount).fill(false)
  array[0] = true
  const [radioStatus, setRadioStatus] = useState(array)
  const newChild = React.Children.map(children, (child: any, index) => {
    return React.cloneElement(child, {
      checked: radioStatus[index],
      onChange: () => {
        const newStatus = new Array(childCount).fill(false)
        newStatus[index] = true
        setRadioStatus(newStatus)
      },
    })
  })
  return <Wrapper direction={direction}>{newChild}</Wrapper>
}

const Wrapper = styled.div<any>`
  display: flex;
  align-items: center;
  flex-direction: row;
`

export default React.memo(RadioGroup)
