import React, {useState} from "react"
import { Collapse } from "ui-kit"

const TabsPage: React.FC = () => {
  const [isOpen1, setOpen1] = useState(false)
  const [isOpen2, setOpen2] = useState(true)
  const [isOpen3, setOpen3] = useState(true)

  return (
    <>
      <button onClick={()=>setOpen1(!isOpen1)}>{`${!isOpen1?"열림":"닫힘"}`}</button>
      <Collapse isOpen={isOpen1}>
        <div>
          처음부터 닫혀있는 상태입니다.
        </div>
      </Collapse>
      <hr />
      <button onClick={()=>setOpen2(!isOpen2)}>{`${!isOpen2?"열림":"닫힘"}`}</button>
      <Collapse isOpen={isOpen2}>
        <div>
          처음부터 열려있는 상태입니다.
        </div>
      </Collapse>
      <button onClick={()=>setOpen3(!isOpen3)}>{`${!isOpen3?"열림":"닫힘"}`}</button>
      <Collapse isOpen={isOpen3} speed={2000}>
        <div style={{width: "200px", height: "200px", background: "red"}}>
          조금 사이즈가 큰 Collapse, 애니메이션 속도 2s
        </div>
      </Collapse>
    </>
  )
}

export default TabsPage
