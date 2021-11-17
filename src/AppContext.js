import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const KeyAPPID = process.env.REACT_APP_API_KEY;

const AppProvider = ({ children }) => {
  const [navigationPanelActive, setNavigationPanelActive] = useState(null);
  const [championshipTabel, setChampionshipTabel] = useState(null);
  const [championshipTeams, setChampionshipTeams] = useState(null);
  const [championshipTopScorers, setChampionshipTopScorers] = useState(null);
  const [ligueTwoTabel, setLigueTwoTabel] = useState(null);
  const [ligueTwoTeams, setLigueTwoTeams] = useState(null);
  const [ligueTwoTopScorers, setLigueTwoTopScorers] = useState(null);
  const [error, setError] = useState(false);
  const [errorCode, setErrorCode] = useState(0);

  useEffect(() => {
    fetch(
      `https://apiv3.apifootball.com/?action=get_standings&league_id=164&APIkey=${KeyAPPID}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setErrorCode(response.status);
          return;
        }
      })
      .then((data) => {
        setLigueTwoTabel(data);
      })
      .catch((error) => {
        setError(true);
      });

    fetch(
      `https://apiv3.apifootball.com/?action=get_teams&league_id=164&APIkey=${KeyAPPID}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setErrorCode(response.status);
          return;
        }
      })
      .then((data) => {
        setLigueTwoTeams(data);
      })
      .catch((error) => {
        setError(true);
      });

    fetch(
      `https://apiv3.apifootball.com/?action=get_topscorers&league_id=164&APIkey=${KeyAPPID}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setErrorCode(response.status);
          return;
        }
      })
      .then((data) => {
        setLigueTwoTopScorers(data);
      })
      .catch((error) => {
        setError(true);
      });

    fetch(
      `https://apiv3.apifootball.com/?action=get_standings&league_id=153&APIkey=${KeyAPPID}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setErrorCode(response.status);
          return;
        }
      })
      .then((data) => {
        setChampionshipTabel(data);
      })
      .catch((error) => {
        setError(true);
      });

    fetch(
      `https://apiv3.apifootball.com/?action=get_teams&league_id=153&APIkey=${KeyAPPID}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setErrorCode(response.status);
          return;
        }
      })
      .then((data) => {
        setChampionshipTeams(data);
      })
      .catch((error) => {
        setError(true);
      });

    fetch(
      `https://apiv3.apifootball.com/?action=get_topscorers&league_id=153&APIkey=${KeyAPPID}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setErrorCode(response.status);
          return;
        }
      })
      .then((data) => {
        setChampionshipTopScorers(data);
      })
      .catch((error) => {
        setError(true);
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
        error,
        errorCode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
