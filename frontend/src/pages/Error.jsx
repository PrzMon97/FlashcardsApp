import { Link, useRouteError } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Nie odnaleziono strony</h3>
          <p>Nie możemy odnaleźć strony, której szukasz.</p>
          <Link to="/dashboard">Wróć do strony głównej </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>coś poszło nie tak</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
