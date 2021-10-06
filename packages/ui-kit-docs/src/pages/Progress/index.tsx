import React from "react"
import { Progress } from "ui-kit"

const TabsPage: React.FC = () => {
  return (
    <>
      <Progress type={"circle"} progress={20} />
      <hr />
      <Progress type={"circular"} />
      <hr />
      <Progress type={"linear"} progress={10} />
      <hr />
      <div style={{ width: "50%" }}>
        <Progress type={"linear"} progress={100} />
      </div>
    </>
  )
}

export default TabsPage
