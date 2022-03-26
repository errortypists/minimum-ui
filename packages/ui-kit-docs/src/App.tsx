import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useState } from "react"

import {
  Tabs,
  DividerPage,
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
  RadioPage,
  CheckboxPage,
  OverviewPage,
  QuickTablePage,
  GridPage,
  FlexPage,
  FormPage,
  LoginPage,
} from "./pages"
import TypographyPage from "./pages/Typography"
import TextareaPage from "./pages/Textarea"
import "./assets/styles/reset.css"
import { StatusContext } from "./contexts/StatusContext"
import DrawerMenu from "./components/DrawerMenu"

function App() {
  const path = window.location.pathname.slice(1)
  const [selectedMenu, setSelectedMenu] = useState({
    id: path,
    url: window.location.pathname,
  })
  const [isLeftMenu, setLeftMenu] = useState(false)
  return (
    <>
      <StatusContext.Provider
        value={{ selectedMenu, isLeftMenu, setSelectedMenu, setLeftMenu }}
      >
        <Router>
          <Switch>
            <Route path="/" exact>
              <OverviewPage />
            </Route>
            <Route path="/form" exact>
              <FormPage />
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
            <Route path="/flex" exact>
              <FlexPage />
            </Route>
            <Route path="/grid" exact>
              <GridPage />
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
              <TextareaPage />
            </Route>
            <Route path="/drawer" exact>
              <DrawerPage />
            </Route>
            <Route path="/table" exact>
              <TablePage />
            </Route>
            <Route path="/quicktable" exact>
              <QuickTablePage />
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
            <Route path="/radio" exact>
              <RadioPage />
            </Route>
            <Route path="/checkbox" exact>
              <CheckboxPage />
            </Route>
            <Route path="/sample/login" exact>
              <LoginPage />
            </Route>
          </Switch>
          <DrawerMenu />
        </Router>
      </StatusContext.Provider>
    </>
  )
}

export default App
