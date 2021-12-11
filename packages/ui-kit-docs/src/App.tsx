import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import {
  Tabs,
  DividerPage,
  LayoutPage,
  Progress,
  Modal,
  Collapse,
  Drawer,
  ConceptPage,
  ButtonPage,
  SelectPage,
  PaginationPage,
  InputPage,
} from "./pages"
import TypographyPage from "./pages/Typography"
import { Flex, Grid } from "ui-kit"
import React from "react"
import styled from "styled-components"
import TextAreaPage from "./pages/TextArea"

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
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Grid col={5} gap={5}>
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
              <Link to="/select">select</Link>
            </Box>
            <Box>
              <Link to="/pagination">pagination</Link>
            </Box>
            <Box>
              <Link to="/input">input</Link>
            </Box>
          </Grid>
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
          <Drawer />
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
      </Switch>
    </Router>
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
