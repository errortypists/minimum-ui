import { useState } from "react"
import styled from "styled-components"
import { Modal } from "ui-kit"

const DividerPage: React.FC = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Wrapper>
      <button onClick={() => setOpen(!isOpen)}>
        {isOpen ? "닫기" : "열기"}
      </button>

      {isOpen && (
        <Modal onClickOutside={() => setOpen(false)}>
          <div style={{ width: "200px", height: "200px", background: "white" }}>
            하이
          </div>
        </Modal>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 500px;
`

export default DividerPage
