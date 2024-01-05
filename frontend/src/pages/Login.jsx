import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Logowanie</h4>
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" labelText="hasło" />
        <button type="submit" className="btn btn-block">
          Zaloguj
        </button>

        <p>
          Nie masz konta?
          <Link to="/register" className="member-btn">
            Zarejestruj się
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;
