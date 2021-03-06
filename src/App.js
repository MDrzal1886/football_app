import { HashRouter, Switch, Route } from "react-router-dom";
import Start from "./components/Start";
import Navigation from "./layouts/Navigation";
import Main from "./components/Main";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="container">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/Ligue 2" component={Main} />
          <Route path="/championship" component={Main} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
