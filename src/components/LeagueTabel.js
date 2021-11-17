import { Link, useRouteMatch } from "react-router-dom";

const LeagueTabel = ({ league }) => {
  const match = useRouteMatch();

  const tabeleElements = league
    ? league.map((league) => {
        const promotionStyle = () => {
          if (league.league_id === "153") {
            switch (league.overall_promotion) {
              case "Promotion - Premier League":
                return "promotion";
              case "Promotion - Championship (Play Offs)":
                return "promotionPlayOffs";
              case "Relegation - League One":
                return "relegation";
              default:
                return "stay";
            }
          } else {
            switch (league.overall_promotion) {
              case "Promotion":
                return "promotion";
              case "Promotion Play-off":
                return "promotionPlayOffs";
              case "Relegation Play-off":
                return "relegationPlayOffs";
              case "Relegation":
                return "relegation";
              default:
                return "stay";
            }
          }
        };

        return (
          <div className="tabelRow" key={league.team_id}>
            <div
              className={`leagueTabelDiv leaguePosition ${promotionStyle()}`}
            >
              {league.overall_league_position}
            </div>
            <div className="teamName">
              <Link
                className="teamNameLink"
                to={`${match.url}/${league.team_name}`}
              >
                <img
                  src={league.team_badge}
                  alt={league.team_name}
                  className="teamLogo"
                />
                {league.team_name}
              </Link>
            </div>
            <div className="leagueTabelDiv">
              {league.overall_league_payed ? league.overall_league_payed : 0}
            </div>
            <div className="leagueTabelDiv">
              {league.overall_league_W ? league.overall_league_W : 0}
            </div>
            <div className="leagueTabelDiv">
              {league.overall_league_D ? league.overall_league_D : 0}
            </div>
            <div className="leagueTabelDiv">
              {league.overall_league_L ? league.overall_league_L : 0}
            </div>
            <div className="leagueTabelDiv">{`${
              league.overall_league_GF ? league.overall_league_GF : 0
            }:${league.overall_league_GA ? league.overall_league_GA : 0}`}</div>
            <div className="leagueTabelDiv">
              {league.overall_league_PTS ? league.overall_league_PTS : 0}
            </div>
          </div>
        );
      })
    : null;

  const championshipLegend = (
    <div className="tabelLegendContainer">
      <div className="legendRow">
        <div className="legendSquare promotion"></div>
        <span>Awans - Premier League</span>
      </div>
      <div className="legendRow">
        <div className="legendSquare promotionPlayOffs"></div>
        <span>Awans - Championship (Play Offy)</span>
      </div>
      <div className="legendRow">
        <div className="legendSquare relegation"></div>
        <span>Spadek - League One</span>
      </div>
    </div>
  );

  const ligueTwoLegend = (
    <div className="tabelLegendContainer">
      <div className="legendRow">
        <div className="legendSquare promotion"></div>
        <span>Awans - Ligue 1</span>
      </div>
      <div className="legendRow">
        <div className="legendSquare promotionPlayOffs"></div>
        <span>Awans - Ligue 1 (Play Offy)</span>
      </div>
      <div className="legendRow">
        <div className="legendSquare relegationPlayOffs"></div>
        <span>Ligue 2 (Baraż o utrzymanie)</span>
      </div>
      <div className="legendRow">
        <div className="legendSquare relegation"></div>
        <span>Spadek - National</span>
      </div>
    </div>
  );

  return (
    <div className="leagueTabelContainer">
      <div className="tabelContainer">
        <div className="tabelHeader tabelRow">
          <div className="leagueTabelDiv">#</div>
          <div className="teamName">Drużyna</div>
          <div className="leagueTabelDiv">M</div>
          <div className="leagueTabelDiv">W</div>
          <div className="leagueTabelDiv">D</div>
          <div className="leagueTabelDiv">L</div>
          <div className="leagueTabelDiv">B</div>
          <div className="leagueTabelDiv">Pkt</div>
        </div>
        {tabeleElements}
      </div>
      {league && league[0].league_id === "153"
        ? championshipLegend
        : ligueTwoLegend}
    </div>
  );
};

export default LeagueTabel;
