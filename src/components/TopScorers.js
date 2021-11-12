const TopScorers = ({ league }) => {
  const fiveBestScorers = [
    ...league.sort((a, b) => b.goals - a.goals || b.assists - a.assists),
  ].splice(0, 5);

  const topScorersElements = fiveBestScorers.map((player, index) => (
    <div className="topScorersPlayerRow" key={player.player_key}>
      <div>{index + 1}</div>
      <div className="playerName">{player.player_name}</div>
      <div className="teamName">{player.team_name}</div>
      <div>{player.goals ? player.goals : 0}</div>
      <div>{player.assists ? player.assists : 0}</div>
    </div>
  ));

  return (
    <div className="topScorersTabelContainer">
      <div className="topScorersHeader topScorersPlayerRow">
        <div>Lp.</div>
        <div className="playerName">Zawodnik</div>
        <div className="teamName">Drużyna</div>
        <div>B</div>
        <div>A</div>
      </div>
      {topScorersElements}
    </div>
  );
};

export default TopScorers;
