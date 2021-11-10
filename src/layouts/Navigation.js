import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import logo from "../images/footballAppLogo.png";
import englandFlag from "../images/englandFlag.png";
import franceFlag from "../images/franceFlag.png";
import germanyFlag from "../images/germanyFlag.png";
import italyFlag from "../images/italyFlag.png";
import netherlandsFlag from "../images/netherlandsFlag.png";
import spainFlag from "../images/spainFlag.png";

<i class="fas fa-chevron-right"></i>;

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

  const slideOrBackSlideNavigation = () => {
    if (navigationPanelActive === false) {
      return "backSlide";
    } else if (navigationPanelActive === true) {
      return "slide";
    } else {
      return "";
    }
  };

  return (
    <>
      <nav className={`navigation ${slideOrBackSlideNavigation()}`}>
        <button
          className="navigationBtn"
          onClick={handleNavBtnClick}
          disabled={navigationPanelActive}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1>Football App</h1>
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
              <NavLink onClick={handleNavBtnClick} to="/bundesliga">
                Bundesliga
                <img src={germanyFlag} alt="germany flag" />
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleNavBtnClick} to="/eredivisie">
                Eredivisie
                <img src={netherlandsFlag} alt="netherlands flag" />
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleNavBtnClick} to="/laliga">
                La Liga
                <img src={spainFlag} alt="spain flag" />
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleNavBtnClick} to="/ligue1">
                Ligue 1
                <img src={franceFlag} alt="france flag" />
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleNavBtnClick} to="/premierleague">
                Premier League
                <img src={englandFlag} alt="england flag" />
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleNavBtnClick} to="/seriea">
                Serie A
                <img src={italyFlag} alt="italy flag" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
