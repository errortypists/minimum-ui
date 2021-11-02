import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import {
  Tabs,
  DividerPage,
  LayoutPage,
  Progress,
  Modal,
  Collapse,
  Drawer,
} from "./pages"
import TypographyPage from "./pages/Typography"

function App() {
  const divider = " / "
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>
            <Link to="/">Home</Link>
            {divider}
            <Link to="/tabs">tabs</Link>
            {divider}
            <Link to="/progress">progress</Link>
            {divider}
            <Link to="/layout">layout</Link>
            {divider}
            <Link to="/divider">divider</Link>
            {divider}
            <Link to="/typography">typography</Link>
            {divider}
            <Link to="/modal">modal</Link>
            {divider}
            <Link to="/collapse">collapse</Link>
            {divider}
            <Link to="/drawer">drawer</Link>
          </div>
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
        <Route path="/drawer" exact>
          <Drawer />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
