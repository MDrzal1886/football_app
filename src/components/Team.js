import { useState } from "react";
import TeamSquad from "./TeamSquad";

const Team = ({ teamStat, teamSquad }) => {
  const [overallActive, setOverallActive] = useState(true);
  const [homeActive, setHomeActive] = useState(false);
  const [awayActive, setAwayActive] = useState(false);

  const handleOverallHomeAwayBtn = (clicked) => {
    switch (clicked) {
      case "overall":
        setOverallActive(true);
        setHomeActive(false);
        setAwayActive(false);
        return;
      case "home":
        setOverallActive(false);
        setHomeActive(true);
        setAwayActive(false);
        return;
      case "away":
        setOverallActive(false);
        setHomeActive(false);
        setAwayActive(true);
        return;
      default:
        return;
    }
  };

  const overallHomeAwayElement = () => {
    if (overallActive) {
      return (
        <div className="tabelRow">
          <div>
            {teamStat.overall_league_position
              ? teamStat.overall_league_position
              : 0}
          </div>
          <div>
            {teamStat.overall_league_payed ? teamStat.overall_league_payed : 0}
          </div>
          <div>{teamStat.overall_league_W ? teamStat.overall_league_W : 0}</div>
          <div>{teamStat.overall_league_D ? teamStat.overall_league_D : 0}</div>
          <div>{teamStat.overall_league_L ? teamStat.overall_league_L : 0}</div>
          <div>{`${
            teamStat.overall_league_GF ? teamStat.overall_league_GF : 0
          }:${
            teamStat.overall_league_GA ? teamStat.overall_league_GA : 0
          }`}</div>
          <div>
            {teamStat.overall_league_PTS ? teamStat.overall_league_PTS : 0}
          </div>
        </div>
      );
    } else if (homeActive) {
      return (
        <div className="tabelRow">
          <div>
            {teamStat.home_league_position ? teamStat.home_league_position : 0}
          </div>
          <div>
            {teamStat.home_league_payed ? teamStat.home_league_payed : 0}
          </div>
          <div>{teamStat.home_league_W ? teamStat.home_league_W : 0}</div>
          <div>{teamStat.home_league_D ? teamStat.home_league_D : 0}</div>
          <div>{teamStat.home_league_L ? teamStat.home_league_L : 0}</div>
          <div>{`${teamStat.home_league_GF ? teamStat.home_league_GF : 0}:${
            teamStat.home_league_GA ? teamStat.home_league_GA : 0
          }`}</div>
          <div>{teamStat.home_league_PTS ? teamStat.home_league_PTS : 0}</div>
        </div>
      );
    } else if (awayActive) {
      return (
        <div className="tabelRow">
          <div>
            {teamStat.away_league_position ? teamStat.away_league_position : 0}
          </div>
          <div>
            {teamStat.away_league_payed ? teamStat.away_league_payed : 0}
          </div>
          <div>{teamStat.away_league_W ? teamStat.away_league_W : 0}</div>
          <div>{teamStat.away_league_D ? teamStat.away_league_D : 0}</div>
          <div>{teamStat.away_league_L ? teamStat.away_league_L : 0}</div>
          <div>{`${teamStat.away_league_GF ? teamStat.away_league_GF : 0}:${
            teamStat.away_league_GA ? teamStat.away_league_GA : 0
          }`}</div>
          <div>{teamStat.away_league_PTS ? teamStat.away_league_PTS : 0}</div>
        </div>
      );
    }
  };

  return (
    <div className="teamContainer">
      <div className="teamHeaderContainer">
        <img src={teamStat.team_badge} alt={teamStat.team_name} />
        <div className="teamDetails">
          <h2>{teamStat.team_name}</h2>
          <div className="buttonsContainer">
            <button
              className={`${overallActive ? "active" : ""} overallHomeAwayBtn`}
              onClick={() => handleOverallHomeAwayBtn("overall")}
            >
              Ogółem
            </button>
            <button
              className={`${homeActive ? "active" : ""} overallHomeAwayBtn`}
              onClick={() => handleOverallHomeAwayBtn("home")}
            >
              Domowe
            </button>
            <button
              className={`${awayActive ? "active" : ""} overallHomeAwayBtn`}
              onClick={() => handleOverallHomeAwayBtn("away")}
            >
              Wyjazdowe
            </button>
          </div>
          <div className="tabelContainer">
            <div className="tabelHeader tabelRow">
              <div>#</div>
              <div>M</div>
              <div>W</div>
              <div>D</div>
              <div>L</div>
              <div>B</div>
              <div>Pkt</div>
            </div>
            {overallHomeAwayElement()}
          </div>
        </div>
      </div>
      <TeamSquad teamSquad={teamSquad} />
    </div>
  );
};

export default Team;
