import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useLocation } from "react-router-dom";
import LeagueTabel from "./LeagueTabel";
import TopScorers from "./TopScorers";
const Main = () => {
  const {
    championshipTabel,
    championshipTopScorers,
    ligueTwoTabel,
    ligueTwoTopScorers,
  } = useContext(AppContext);

  const location = useLocation();

  const ligueOrChampionshipTabel =
    location.pathname === "/ligue2" ? (
      <LeagueTabel league={ligueTwoTabel} />
    ) : (
      <LeagueTabel league={championshipTabel} />
    );

  const ligueOrChampionshipTopScorers =
    location.pathname === "/ligue2" ? (
      <TopScorers league={ligueTwoTopScorers} />
    ) : (
      <TopScorers league={championshipTopScorers} />
    );

  return (
    <main className="pageContainer">
      {ligueOrChampionshipTabel}
      {ligueOrChampionshipTopScorers}
    </main>
  );
};

export default Main;
