import React, { useEffect, useState } from "react"
import styled from "styled-components"

import Radio from "components/Radio"
import Icon from "components/Icon"

interface Props {
  children: typeof Radio[]
  defaultIndex?: number
  direction?: "row" | "column"
  checked?: boolean
  onChange?: (value?: any, index?: number) => void
}

const RadioGroup: React.FC<Props> = (props) => {
  const { direction = "row", children, defaultIndex = 0, onChange } = props
  const childCount = React.Children.count(children)
  const array = new Array(childCount).fill(false)
  array[defaultIndex] = true
  const [radioStatus, setRadioStatus] = useState(array)
  const newChild = React.Children.map(children, (child: any, index) => {
    return React.cloneElement(child, {
      checked: radioStatus[index],
      onChange: (item) => {
        const newStatus = new Array(childCount).fill(false)
        newStatus[index] = true
        setRadioStatus(newStatus)
        if (onChange) onChange(item, index)
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
