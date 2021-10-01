import React from "react"
import { Progress } from "ui-kit"

const TabsPage: React.FC = () => {
  return (
    <>
      <Progress type={"circle"} />
      <hr />
      <Progress type={"linear"} />
      <hr />
    </>
  )
}

export default TabsPage
