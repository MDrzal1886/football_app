import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import Main from "./Main";

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Switch>
          <Route exact path="/" component={() => <Main title="start" />} />
          <Route
            path="/bundesliga"
            component={() => <Main title="bundesliga" />}
          />
          <Route
            path="/eredivisie"
            component={() => <Main title="eredivisie" />}
          />
          <Route path="/laliga" component={() => <Main title="laliga" />} />
          <Route path="/Ligue1" component={() => <Main title="Ligue1" />} />
          <Route
            path="/premierleague"
            component={() => <Main title="premierleague" />}
          />
          <Route path="/seriea" component={() => <Main title="seriea" />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
