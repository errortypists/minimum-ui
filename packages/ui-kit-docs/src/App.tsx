import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Tabs } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>
            <Link to="/">Home</Link> /<Link to="/tabs">tabs</Link> /
          </div>
        </Route>
        <Route path="/tabs" exact>
          <Tabs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
