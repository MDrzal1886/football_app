const LeagueTabel = ({ league }) => {
  const tabeleElements = league.map((league) => (
    <div className="tabelTeamRow" key={league.team_id}>
      <div>{league.overall_league_position}</div>
      <div className="teamName">
        <img
          src={league.team_badge}
          alt={league.team_name}
          className="teamLogo"
        />
        {league.team_name}
      </div>
      <div>{league.overall_league_payed ? league.overall_league_payed : 0}</div>
      <div>{league.overall_league_W ? league.overall_league_W : 0}</div>
      <div>{league.overall_league_D ? league.overall_league_D : 0}</div>
      <div>{league.overall_league_L ? league.overall_league_L : 0}</div>
      <div>{`${league.overall_league_GF ? league.overall_league_GF : 0}:${
        league.overall_league_GA ? league.overall_league_GA : 0
      }`}</div>
      <div>{league.overall_league_PTS ? league.overall_league_PTS : 0}</div>
    </div>
  ));

  return (
    <div className="leagueTabelContainer">
      <div className="tabelHeader tabelTeamRow">
        <div>Lp.</div>
        <div className="teamName">Drużyna</div>
        <div>M</div>
        <div>W</div>
        <div>D</div>
        <div>L</div>
        <div>B</div>
        <div>Pkt</div>
      </div>
      {tabeleElements}
    </div>
  );
};

export default LeagueTabel;
