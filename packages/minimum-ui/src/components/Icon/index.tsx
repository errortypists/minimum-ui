import React from "react"
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Cancel,
  Confirm,
  Check,
} from "icons"
import { Flex } from "index"

interface IconProps {
  name:
    | "arrowLeft"
    | "arrowRight"
    | "arrowUp"
    | "arrowDown"
    | "cancel"
    | "confirm"
    | "check"
  color?: string
  size?: number
  style?: React.CSSProperties
}

const Icon: React.FC<IconProps> = ({ name, color, size, style }) => {
  const ICON_TYPES = {
    arrowLeft: <ArrowLeft fill={color} />,
    arrowRight: <ArrowRight fill={color} />,
    arrowUp: <ArrowUp fill={color} />,
    arrowDown: <ArrowDown fill={color} />,
    cancel: <Cancel fill={color} />,
    confirm: <Confirm fill={color} />,
    check: <Check fill={color} />,
  }
  // const iconStyle = {
  //   width: "100%",
  //   height: "100%",
  //   ...style,
  // }
  // if (size !== undefined && size > 0) {
  //   iconStyle.width = `${size}px`
  //   iconStyle.height = `${size}px`
  // }
  // return <div style={iconStyle}>{ICON_TYPES[name]}</div>
  return (
    <Flex
      align="center"
      justify="center"
      style={{
        width: size ? `${size}px` : "100%",
        height: size ? `${size}px` : "100%",
      }}
    >
      {ICON_TYPES[name]}
    </Flex>
  )
}

export default Icon
