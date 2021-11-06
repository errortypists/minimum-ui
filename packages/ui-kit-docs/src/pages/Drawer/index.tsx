import { useState } from "react"
import styled from "styled-components"
import { Drawer } from "ui-kit"

const DividerPage: React.FC = () => {
  const [isOpen1, setOpen1] = useState(false)
  const [isOpen2, setOpen2] = useState(false)
  const [isOpen3, setOpen3] = useState(false)
  const [isOpen4, setOpen4] = useState(false)

  return (
    <Wrapper>
      <button onClick={() => setOpen1(!isOpen1)}>
        {isOpen1 ? "닫기" : "기본 열기"}
      </button>

      <button onClick={() => setOpen2(!isOpen2)}>
        {isOpen2 ? "닫기" : "오른쪽 열기"}
      </button>

      <button onClick={() => setOpen3(!isOpen3)}>
        {isOpen3 ? "닫기" : "탑 열기"}
      </button>

      <button onClick={() => setOpen4(!isOpen4)}>
        {isOpen4 ? "닫기" : "바텀 열기"}
      </button>

      <Drawer
        isOpen={isOpen1}
        onClickOutside={() => setOpen1(false)}
        direction={"left"}
        size={document.querySelector("html")?.clientWidth}
      >
        <div style={{ width: "70px", height: "200px", background: "white" }}>
          하이
        </div>
      </Drawer>
      <Drawer
        isOpen={isOpen2}
        onClickOutside={() => setOpen2(false)}
        direction={"right"}
      >
        <div style={{ width: "200px", height: "200px", background: "white" }}>
          하이
        </div>
      </Drawer>
      <Drawer
        isOpen={isOpen3}
        onClickOutside={() => setOpen3(false)}
        direction={"top"}
      >
        <div style={{ width: "200px", height: "200px", background: "white" }}>
          하이
        </div>
      </Drawer>
      <Drawer
        isOpen={isOpen4}
        onClickOutside={() => setOpen4(false)}
        direction={"bottom"}
        size={50}
      >
        <div style={{ width: "200px", height: "200px", background: "white" }}>
          하이
        </div>
      </Drawer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 500px;
`

export default DividerPage
