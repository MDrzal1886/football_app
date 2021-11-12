import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "./components/Start";
import Navigation from "./layouts/Navigation";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/Ligue2" component={Main} />
          <Route
            path="/championship"
            component={Main}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
