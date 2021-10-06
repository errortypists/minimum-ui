import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import { Tabs, DividerPage, LayoutPage, Progress, Collapse } from "./pages";
import TypographyPage from "./pages/Typography";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>
            <Link to="/">Home</Link> /<Link to="/tabs">tabs</Link> /
            <Link to="/progress">progress</Link> /
            <Link to="/layout">layout</Link> /<Link to="/divider">divider</Link>{" "}
            /<Link to="/typography">typography</Link>/<Link to="/collapse">collapse</Link>
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
        <Route path="/collapse" exact>
          <Collapse />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
