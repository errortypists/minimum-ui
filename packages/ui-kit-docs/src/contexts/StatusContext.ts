import React from "react"

interface Status {
  menu: string | undefined
  isLeftMenu: boolean | undefined
  setMenu: React.Dispatch<React.SetStateAction<string>>
  setLeftMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const initialState: Status = {
  menu: "",
  isLeftMenu: false,
  setMenu: () => {},
  setLeftMenu: () => {},
}

export const StatusContext = React.createContext({ ...initialState })
