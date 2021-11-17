import { Link, useRouteMatch } from "react-router-dom";

const TeamSquad = ({ teamSquad }) => {
  const match = useRouteMatch();

  const goalkeepers = teamSquad
    ? teamSquad.players.filter((player) => player.player_type === "Goalkeepers")
    : null;
  const defenders = teamSquad
    ? teamSquad.players.filter((player) => player.player_type === "Defenders")
    : null;
  const midfielders = teamSquad
    ? teamSquad.players.filter((player) => player.player_type === "Midfielders")
    : null;
  const forwards = teamSquad
    ? teamSquad.players.filter((player) => player.player_type === "Forwards")
    : null;

  const goalkeepersElements = goalkeepers
    ? goalkeepers.map((player) => (
        <div className="tabelRow" key={player.player_key}>
          <div>{player.player_number}</div>
          <div className="playerName">
            <Link
              className="playerNameLink"
              to={`${match.url}/${player.player_name}`}
            >
              {player.player_name}
            </Link>
          </div>
          <div>{player.player_age}</div>
          <div>{player.player_match_played}</div>
          <div>{player.player_rating ? player.player_rating : 0}</div>
        </div>
      ))
    : null;

  const defendersElements = defenders
    ? defenders.map((player) => (
        <div className="tabelRow" key={player.player_key}>
          <div>{player.player_number}</div>
          <div className="playerName">
            <Link
              className="playerNameLink"
              to={`${match.url}/${player.player_name}`}
            >
              {player.player_name}
            </Link>
          </div>
          <div>{player.player_age}</div>
          <div>{player.player_match_played}</div>
          <div>{player.player_rating ? player.player_rating : 0}</div>
        </div>
      ))
    : null;

  const midfieldersElements = midfielders
    ? midfielders.map((player) => (
        <div className="tabelRow" key={player.player_key}>
          <div>{player.player_number}</div>
          <div className="playerName">
            <Link
              className="playerNameLink"
              to={`${match.url}/${player.player_name}`}
            >
              {player.player_name}
            </Link>
          </div>
          <div>{player.player_age}</div>
          <div>{player.player_match_played}</div>
          <div>{player.player_rating ? player.player_rating : 0}</div>
        </div>
      ))
    : null;

  const forwardsElements = forwards
    ? forwards.map((player) => (
        <div className="tabelRow" key={player.player_key}>
          <div>{player.player_number}</div>
          <div className="playerName">
            <Link
              className="playerNameLink"
              to={`${match.url}/${player.player_name}`}
            >
              {player.player_name}
            </Link>
          </div>
          <div>{player.player_age}</div>
          <div>{player.player_match_played}</div>
          <div>{player.player_rating ? player.player_rating : 0}</div>
        </div>
      ))
    : null;

  return (
    <div className="teamSquadContainer">
      <div className="tabelContainer">
        <h3>Bramkarze</h3>
        <div className="tabelHeader tabelRow">
          <div>#</div>
          <div className="playerName">Nazwisko</div>
          <div>Wiek</div>
          <div>Mecze</div>
          <div>Ocena</div>
        </div>
        {goalkeepersElements}
      </div>
      <div className="tabelContainer">
        <h3>Obrońcy</h3>
        <div className="tabelHeader tabelRow">
          <div>#</div>
          <div className="playerName">Nazwisko</div>
          <div>Wiek</div>
          <div>Mecze</div>
          <div>Ocena</div>
        </div>
        {defendersElements}
      </div>
      <div className="tabelContainer">
        <h3>Pomocnicy</h3>
        <div className="tabelHeader tabelRow">
          <div>#</div>
          <div className="playerName">Nazwisko</div>
          <div>Wiek</div>
          <div>Mecze</div>
          <div>Ocena</div>
        </div>
        {midfieldersElements}
      </div>
      <div className="tabelContainer">
        <h3>Napastnicy</h3>
        <div className="tabelHeader tabelRow">
          <div>#</div>
          <div className="playerName">Nazwisko</div>
          <div>Wiek</div>
          <div>Mecze</div>
          <div>Ocena</div>
        </div>
        {forwardsElements}
      </div>
    </div>
  );
};

export default TeamSquad;
