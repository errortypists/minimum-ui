import React from "react"

interface Menu {
  displayName: string
  url: string
}
interface Status {
  menu: Menu | undefined
  isLeftMenu: boolean | undefined
  setMenu: React.Dispatch<React.SetStateAction<Menu>>
  setLeftMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const initialState: Status = {
  menu: {
    displayName: "",
    url: "/",
  },
  isLeftMenu: false,
  setMenu: () => {},
  setLeftMenu: () => {},
}

export const StatusContext = React.createContext({ ...initialState })
