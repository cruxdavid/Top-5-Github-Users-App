import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Person from "./Pages/Person";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Person/:username" exact component={Person} />
      </Switch>
    </Router>
  );
}

export default App;
