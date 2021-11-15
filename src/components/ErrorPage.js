import { Link } from "react-router-dom";
import errorImg from "../images/error.svg";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <img src={errorImg} alt="error" />
      <h1>Coś poszło nie tak :(</h1>
      <Link to="/"> Wróć do strony głównej</Link>
    </div>
  );
};

export default ErrorPage;
