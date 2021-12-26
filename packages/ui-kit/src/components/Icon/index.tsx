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
  const iconStyle = {
    width: "100%",
    height: "100%",
    ...style,
  }
  if (size !== undefined && size > 0) {
    iconStyle.width = `${size}px`
    iconStyle.height = `${size}px`
  }
  return <div style={iconStyle}>{ICON_TYPES[name]}</div>
}

export default Icon
