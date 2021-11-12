import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import logo from "../images/footballAppLogo.png";
import englandFlag from "../images/englandFlag.png";
import franceFlag from "../images/franceFlag.png";

const Navigation = () => {
  const { navigationPanelActive, setNavigationPanelActive } =
    useContext(AppContext);

  const handleNavBtnClick = () => {
    if (navigationPanelActive === true) {
      setNavigationPanelActive(false);
    } else {
      setNavigationPanelActive(true);
    }
  };

  const showOrHidePanel = () => {
    if (navigationPanelActive === false) {
      return "hide";
    } else if (navigationPanelActive === true) {
      return "show";
    } else {
      return "";
    }
  };

  const location = useLocation();

  const titleText = () => {
    switch (location.pathname) {
      case "/ligue2":
        return "ligue 2";
      case "/championship":
        return "championship";

      default:
        return "Football App";
    }
  };

  return (
    <>
      <nav className="navigation">
        <button className="navigationBtn" onClick={handleNavBtnClick}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1>{titleText()}</h1>
      </nav>
      <div className={`navigationPanel ${showOrHidePanel()}`}>
        <button className="navigationCloseBtn" onClick={handleNavBtnClick}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="logoContainer">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink onClick={handleNavBtnClick} exact to="/">
                Start
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleNavBtnClick} to="/championship">
                Championship
                <img src={englandFlag} alt="england flag" />
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleNavBtnClick} to="/ligue2">
                Ligue 2
                <img src={franceFlag} alt="france flag" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
