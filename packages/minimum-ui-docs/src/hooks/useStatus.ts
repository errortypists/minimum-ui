import { useContext } from "react"

import { StatusContext } from "../contexts/StatusContext"

const useStatus = () => {
  const store = useContext(StatusContext)

  return store
}

export default useStatus
