import React from "react"

interface Menu {
  id: string
  url: string
}
interface Status {
  selectedMenu: Menu | undefined
  isLeftMenu: boolean | undefined
  setSelectedMenu: React.Dispatch<React.SetStateAction<Menu>>
  setLeftMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const initialState: Status = {
  selectedMenu: {
    id: "",
    url: "/",
  },
  isLeftMenu: false,
  setSelectedMenu: () => {},
  setLeftMenu: () => {},
}

export const StatusContext = React.createContext({ ...initialState })
