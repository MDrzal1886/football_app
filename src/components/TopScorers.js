import { Link, useRouteMatch } from "react-router-dom";

const TopScorers = ({ league }) => {
  const match = useRouteMatch();

  const fiveBestScorers = [
    ...league.sort((a, b) => b.goals - a.goals || b.assists - a.assists),
  ].splice(0, 5);

  const topScorersElements = fiveBestScorers.map((player, index) => (
    <div className="tabelRow" key={player.player_key}>
      <div>{index + 1}</div>
      <div className="playerName">
        <Link
          className="playerNameLink"
          to={`${match.url}/${player.team_name}/${player.player_name}`}
        >
          {player.player_name}
        </Link>
      </div>
      <div>{player.goals ? player.goals : 0}</div>
      <div>{player.assists ? player.assists : 0}</div>
    </div>
  ));

  return (
    <div className="tabelContainer">
      <div className="tabelHeader tabelRow">
        <div>#</div>
        <div className="playerName">Zawodnik</div>
        <div>B</div>
        <div>A</div>
      </div>
      {topScorersElements}
    </div>
  );
};

export default TopScorers;
