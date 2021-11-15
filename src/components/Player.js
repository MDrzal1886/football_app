import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import noImage from "../images/noImage.png";

const Player = ({ playerStat }) => {
  const position = () => {
    switch (playerStat.player_type) {
      case "Forwards":
        return "Napastnik";
      case "Midfielders":
        return "Pomocnik";
      case "Defenders":
        return "Obrońca";
      case "Goalkeepers":
        return "Bramkarz";
      default:
        return "Brak danych";
    }
  };

  return (
    <div className="playerContainer">
      <div className="playerHeaderContainer">
        <img
          src={playerStat.player_image}
          onError={(event) => (event.target.src = noImage)}
          alt={playerStat.player_name}
        />
        <div className="playerDetails">
          <h2>{playerStat.player_name}</h2>
          <p>
            Wiek: <strong>{playerStat.player_age}</strong>
          </p>
          <p>
            Numer: <strong>{playerStat.player_number}</strong>
          </p>
          <p>
            Pozycja: <strong>{position()}</strong>
          </p>
        </div>
      </div>
      <div className="tabelContainer">
        <div className="tabelHeader tabelRow">
          <div>Mecze</div>
          <div>{position() === "Bramkarz" ? "Obrony" : "Bramki"}</div>
          <div>Asysty</div>
          <div>
            <FontAwesomeIcon className="yellow" icon={faSquare} />
          </div>
          <div>
            <FontAwesomeIcon className="red" icon={faSquare} />
          </div>
          <div className="playerRate">Ocena</div>
        </div>
        <div className="tabelRow">
          <div>{playerStat.player_match_played}</div>
          <div>
            {position() === "Bramkarz"
              ? playerStat.player_goals_conceded
                ? playerStat.player_goals_conceded
                : 0
              : playerStat.player_goals}
          </div>
          <div>{playerStat.player_assists}</div>
          <div>{playerStat.player_yellow_cards}</div>
          <div>{playerStat.player_red_cards}</div>
          <div className="playerRate">
            {playerStat.player_rating ? playerStat.player_rating : 0}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
