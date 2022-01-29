import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useState } from "react"

import {
  Tabs,
  DividerPage,
  LayoutPage,
  Progress,
  Modal,
  Collapse,
  DrawerPage,
  ConceptPage,
  ButtonPage,
  TablePage,
  SelectPage,
  PaginationPage,
  InputPage,
  MenuPage,
  RadioButtonPage,
  CheckboxPage,
  OverviewPage,
} from "./pages"
import TypographyPage from "./pages/Typography"
import TextAreaPage from "./pages/TextArea"
import "./assets/styles/reset.css"
import { StatusContext } from "./contexts/StatusContext"
import styled from "styled-components"
import { BaseColor } from "./assets/styles/color"
import DrawerMenu from "./components/DrawerMenu"

function App() {
  const path = window.location.pathname.slice(1)
  const [menu, setMenu] = useState({
    displayName: path.charAt(0).toUpperCase() + path.slice(1),
    url: window.location.pathname,
  })
  const [isLeftMenu, setLeftMenu] = useState(false)
  return (
    <>
      <StatusContext.Provider
        value={{ menu, isLeftMenu, setMenu, setLeftMenu }}
      >
        <Router>
          <Logo>WhatUI</Logo>
          <Switch>
            <Route path="/" exact>
              <OverviewPage />
            </Route>
            <Route path="/tabs" exact>
              <Tabs />
            </Route>
            <Route path="/progress" exact>
              <Progress />
            </Route>
            <Route path="/divider" exact>
              <DividerPage />
            </Route>
            <Route path="/layout" exact>
              <LayoutPage />
            </Route>
            <Route path="/typography" exact>
              <TypographyPage />
            </Route>
            <Route path="/modal" exact>
              <Modal />
            </Route>
            <Route path="/collapse" exact>
              <Collapse />
            </Route>
            <Route path="/concept" exact>
              <ConceptPage />
            </Route>
            <Route path="/button" exact>
              <ButtonPage />
            </Route>
            <Route path="/textarea" exact>
              <TextAreaPage />
            </Route>
            <Route path="/drawer" exact>
              <DrawerPage />
            </Route>
            <Route path="/table" exact>
              <TablePage />
            </Route>
            <Route path="/select" exact>
              <SelectPage />
            </Route>
            <Route path="/pagination" exact>
              <PaginationPage />
            </Route>
            <Route path="/input" exact>
              <InputPage />
            </Route>
            <Route path="/menu" exact>
              <MenuPage />
            </Route>
            <Route path="/radiobutton" exact>
              <RadioButtonPage />
            </Route>
            <Route path="/checkbox" exact>
              <CheckboxPage />
            </Route>
          </Switch>
          <DrawerMenu />
        </Router>
      </StatusContext.Provider>
    </>
  )
}

const Logo = styled.div`
  height: 45px;
  position: absolute;
  left: 10px;
  top: -5px;
  font-size: 2rem;
  font-family: Sarpanch;
  user-select: none;
  color: ${BaseColor.font};
  @media only screen and (max-width: 820px) {
    display: none;
  }
`

export default App
