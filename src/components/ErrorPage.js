import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import errorImg from "../images/error.svg";

const ErrorPage = () => {
  const { error, errorCode } = useContext(AppContext);

  return (
    <main className="pageContainer">
      <div className="errorPage">
        <img src={errorImg} alt="error" />
        {error ? (
          <h1>
            {errorCode}: Przepraszamy, przekroczony limit :( Spróbuj później
          </h1>
        ) : (
          <h1>Coś poszło nie tak :(</h1>
        )}
        <Link to="/"> Wróć do strony głównej</Link>
      </div>
    </main>
  );
};

export default ErrorPage;
