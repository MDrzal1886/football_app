import { useContext } from "react";
import { useParams } from "react-router";
import { AppContext } from "../AppContext";
import ErrorPage from "./ErrorPage";
import Player from "./Player";

const PlayerData = () => {
  const { championshipTeams, ligueTwoTeams } = useContext(AppContext);

  const { playerName } = useParams();

  const playerElement = () => {
    if (championshipTeams && ligueTwoTeams) {
      const team = [...championshipTeams].filter((team) => {
        const players = team.players;
        const playerFilter = players.filter(
          (player) => player.player_name === playerName
        );
        if (playerFilter.length > 0) {
          return true;
        } else return false;
      })[0];
      if (team) {
        const playerStat = team.players.filter(
          (player) => player.player_name === playerName
        )[0];
        return <Player playerStat={playerStat} />;
      } else {
        const team = [...ligueTwoTeams].filter((team) => {
          const players = team.players;
          const playerFilter = players.filter(
            (player) => player.player_name === playerName
          );
          if (playerFilter.length > 0) {
            return true;
          } else return false;
        })[0];
        if (team) {
          const playerStat = team.players.filter(
            (player) => player.player_name === playerName
          )[0];
          return <Player playerStat={playerStat} />;
        } else return <ErrorPage />;
      }
    } else return null;
  };

  return <>{playerElement()}</>;
};

export default PlayerData;
