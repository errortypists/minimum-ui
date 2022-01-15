import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Flex, Grid, Drawer } from "ui-kit"
import React, { useState } from "react"

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
import styled from "styled-components"
import TextAreaPage from "./pages/TextArea"
import "./assets/styles/reset.css"
import { StatusContext } from "./contexts/StatusContext"

const Box: React.FC = ({ children }) => {
  return (
    <Flex
      align="center"
      justify="center"
      style={{
        width: "100%",
        height: "100px",
        border: "1px solid black",
        borderRadius: "2px",
      }}
    >
      <Children>{children}</Children>
    </Flex>
  )
}

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
              {/* <Grid col={5} gap={5}>
              <Box>
                <Link to="/tabs">tabs</Link>
              </Box>
              <Box>
                <Link to="/progress">progress</Link>
              </Box>
              <Box>
                <Link to="/layout">layout</Link>
              </Box>
              <Box>
                <Link to="/divider">divider</Link>
              </Box>
              <Box>
                <Link to="/typography">typography</Link>
              </Box>
              <Box>
                <Link to="/modal">modal</Link>
              </Box>
              <Box>
                <Link to="/collapse">collapse</Link>
              </Box>
              <Box>
                <Link to="/concept">concept</Link>
              </Box>
              <Box>
                <Link to="/button">button</Link>
              </Box>
              <Box>
                <Link to="/textarea">textarea</Link>
              </Box>
              <Box>
                <Link to="/drawer">drawer</Link>
              </Box>
              <Box>
                <Link to="/table">table</Link>
              </Box>
              <Box>
                <Link to="/select">select</Link>
              </Box>
              <Box>
                <Link to="/pagination">pagination</Link>
              </Box>
              <Box>
                <Link to="/input">input</Link>
              </Box>
              <Box>
                <Link to="/menu">menu</Link>
              </Box>
              <Box>
                <Link to="/radiobutton">radiobutton</Link>
              </Box>
              <Box>
                <Link to="/checkbox">checkbox</Link>
              </Box>
            </Grid> */}
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

const Children = styled.div`
  a {
    color: #000;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
  }
`

export default App
