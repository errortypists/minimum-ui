import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Drawer } from "ui-kit"
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

function App() {
  const [menu, setMenu] = useState("")
  const [isLeftMenu, setLeftMenu] = useState(false)
  return (
    <>
      <StatusContext.Provider
        value={{ menu, isLeftMenu, setMenu, setLeftMenu }}
      >
        <Router>
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
        </Router>
        <Drawer
          isOpen={isLeftMenu}
          onClickOutside={() => setLeftMenu(false)}
          direction={"left"}
        >
          <div style={{ width: "200px", height: "200px", background: "white" }}>
            하이
          </div>
        </Drawer>
      </StatusContext.Provider>
    </>
  )
}

export default App
