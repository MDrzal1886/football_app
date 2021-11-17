import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useLocation, Switch, Route, useRouteMatch } from "react-router-dom";
import LeagueTabel from "./LeagueTabel";
import TopScorers from "./TopScorers";
import TeamData from "./TeamData";
import ErrorPage from "./ErrorPage";
const Main = () => {
  const {
    championshipTabel,
    championshipTopScorers,
    ligueTwoTabel,
    ligueTwoTopScorers,
    error,
  } = useContext(AppContext);

  const match = useRouteMatch();
  const location = useLocation();

  const ligueOrChampionship =
    location.pathname === "/ligue 2" ? (
      <>
        <LeagueTabel league={ligueTwoTabel} />
        <TopScorers league={ligueTwoTopScorers} />
      </>
    ) : (
      <>
        <LeagueTabel league={championshipTabel} />
        <TopScorers league={championshipTopScorers} />
      </>
    );

  return (
    <main className="pageContainer">
      {error ? (
        <ErrorPage />
      ) : (
        <Switch>
          <Route exact path={match.url} render={() => ligueOrChampionship} />
          <Route path={`${match.url}/:teamName`} component={TeamData} />
          <Route component={ErrorPage} />
        </Switch>
      )}
    </main>
  );
};

export default Main;
