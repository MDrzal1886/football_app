import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import logo from "../images/footballAppLogo.png";
import englandFlag from "../images/englandFlag.png";
import franceFlag from "../images/franceFlag.png";

const Navigation = () => {
  const { navigationPanelActive, setNavigationPanelActive } =
    useContext(AppContext);

  const history = useHistory();
  const location = useLocation();

  const handleNavBtnClick = () => {
    if (navigationPanelActive === true) {
      setNavigationPanelActive(false);
    } else {
      setNavigationPanelActive(true);
    }
  };

  const handleGoBackClick = () => {
    history.goBack();
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location.pathname]);

  const showOrHidePanel = () => {
    if (navigationPanelActive === false) {
      return "hide";
    } else if (navigationPanelActive === true) {
      return "show";
    } else {
      return "";
    }
  };

  const titleText =
    location.pathname
      .split("/", [location.pathname.length])
      .splice(-1, 1)
      .toString() || "Football App";

  return (
    <>
      <nav className="navigation">
        {location.pathname
          .split("/", [location.pathname.length])
          .splice(-1, 1)
          .toString() ? (
          <button className="navigationBtn" onClick={handleGoBackClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        ) : null}
        <button
          className="navigationBtn"
          onClick={handleNavBtnClick}
          disabled={navigationPanelActive}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <h1>{titleText}</h1>
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
              <NavLink onClick={handleNavBtnClick} to="/ligue 2">
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
