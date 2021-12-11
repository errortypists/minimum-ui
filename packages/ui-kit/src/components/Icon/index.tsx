import React from "react"
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Cancel,
  Confirm,
} from "icons"

interface IconProps {
  name:
    | "arrowLeft"
    | "arrowRight"
    | "arrowUp"
    | "arrowDown"
    | "cancel"
    | "confirm"
  color?: string
  size?: number
}

const Icon: React.FC<IconProps> = ({ name, color, size }) => {
  const ICON_TYPES = {
    arrowLeft: <ArrowLeft fill={color} />,
    arrowRight: <ArrowRight fill={color} />,
    arrowUp: <ArrowUp fill={color} />,
    arrowDown: <ArrowDown fill={color} />,
    cancel: <Cancel fill={color} />,
    confirm: <Confirm fill={color} />,
  }
  return (
    <div
      style={{
        width: size ? `${size}px` : "100%",
        height: size ? `${size}px` : "100%",
      }}
    >
      {ICON_TYPES[name]}
    </div>
  )
}

export default Icon
