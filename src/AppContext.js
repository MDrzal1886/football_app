import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const KeyAPPID = process.env.REACT_APP_API_KEY;

const AppProvider = ({ children }) => {
  const [navigationPanelActive, setNavigationPanelActive] = useState(null);
  const [championshipTabel, setChampionshipTabel] = useState([]);
  const [championshipTeams, setChampionshipTeams] = useState([]);
  const [championshipTopScorers, setChampionshipTopScorers] = useState([]);
  const [ligueTwoTabel, setLigueTwoTabel] = useState([]);
  const [ligueTwoTeams, setLigueTwoTeams] = useState([]);
  const [ligueTwoTopScorers, setLigueTwoTopScorers] = useState([]);

  useEffect(() => {
    fetch(
      `https://apiv3.apifootball.com/?action=get_standings&league_id=164&APIkey=${KeyAPPID}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLigueTwoTabel(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    fetch(
      `https://apiv3.apifootball.com/?action=get_teams&league_id=164&APIkey=${KeyAPPID}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLigueTwoTeams(data);
      })
      .catch((error) => {});

    fetch(
      `https://apiv3.apifootball.com/?action=get_topscorers&league_id=164&APIkey=${KeyAPPID}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLigueTwoTopScorers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    fetch(
      `https://apiv3.apifootball.com/?action=get_standings&league_id=153&APIkey=${KeyAPPID}`
    )
      .then((response) => response.json())
      .then((data) => {
        setChampionshipTabel(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    fetch(
      `https://apiv3.apifootball.com/?action=get_teams&league_id=153&APIkey=${KeyAPPID}`
    )
      .then((response) => response.json())
      .then((data) => {
        setChampionshipTeams(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    fetch(
      `https://apiv3.apifootball.com/?action=get_topscorers&league_id=153&APIkey=${KeyAPPID}`
    )
      .then((response) => response.json())
      .then((data) => {
        setChampionshipTopScorers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        navigationPanelActive,
        setNavigationPanelActive,
        championshipTabel,
        championshipTeams,
        championshipTopScorers,
        ligueTwoTabel,
        ligueTwoTeams,
        ligueTwoTopScorers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
