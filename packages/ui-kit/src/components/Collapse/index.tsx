import React, {useRef, useState, useEffect} from "react"
import styled, {css} from "styled-components"

interface Props {
  style?: React.CSSProperties
  isOpen?: boolean
  speed?: number
}

const Collapse: React.FC<Props> = (props) => {
  const [childHeight, setChildHeight] = useState("auto")
  const {children, isOpen = false, speed = 200} = props
  const childRef = useRef<HTMLDivElement>(null)
  
  useEffect(()=>{
    setChildHeight(`${childRef.current?.clientHeight || 0}px`)
  }, [])
  return (
    <Wrapper isOpen={isOpen} childHeight={childHeight} speed={speed}>
      <div ref={childRef}>
        {children}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div<any>`
  ${(props) => props.isOpen ?
    css`
      height: ${props.childHeight};
    `:css`
      height: 0px;
    `}
  overflow: hidden;
  transition: height ${(props) => `${props.speed}ms`} ease-out;
`

export default Collapse
