import logo from "../images/footballAppLogo.png";
import englandFlag from "../images/englandFlag.png";
import franceFlag from "../images/franceFlag.png";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <main className="pageContainer startContainer">
      <Link to="/championship" className="leagueButton">
        <h2>Championship</h2>
        <img src={englandFlag} alt="england flag" />
      </Link>
      <img src={logo} alt="logo" className="appLogo" />
      <Link to="/ligue 2" className="leagueButton">
        <h2>Ligue 2</h2>
        <img src={franceFlag} alt="england flag" />
      </Link>
    </main>
  );
};

export default Start;
