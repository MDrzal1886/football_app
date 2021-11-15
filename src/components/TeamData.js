import { useContext } from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router";
import { AppContext } from "../AppContext";
import ErrorPage from "./ErrorPage";
import PlayerData from "./PlayerData";
import Team from "./Team";

const TeamData = () => {
  const { championshipTabel, championshipTeams, ligueTwoTabel, ligueTwoTeams } =
    useContext(AppContext);

  const { teamName } = useParams();

  const match = useRouteMatch();

  const teamElement = () => {
    const teamStat = championshipTabel.filter(
      (team) => team.team_name === teamName
    )[0];
    if (teamStat) {
      const teamSquad = championshipTeams.filter(
        (team) => team.team_key === teamStat.team_id
      )[0];
      return <Team teamStat={teamStat} teamSquad={teamSquad} />;
    } else {
      const teamStat = ligueTwoTabel.filter(
        (team) => team.team_name === teamName
      )[0];
      if (teamStat) {
        const teamSquad = ligueTwoTeams.filter(
          (team) => team.team_key === teamStat.team_id
        )[0];
        return <Team teamStat={teamStat} teamSquad={teamSquad} />;
      } else return <ErrorPage />;
    }
  };

  return (
    <>
      <Switch>
        <Route exact path={match.url} render={() => teamElement()} />
        <Route path={`${match.url}/:playerName`} component={PlayerData} />
      </Switch>
    </>
  );
};

export default TeamData;
