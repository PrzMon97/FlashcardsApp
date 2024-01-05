import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Rejestracja</h4>
        <FormRow type="text" name="imię" />
        <FormRow type="text" name="lastname" labelText="nazwisko" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" labelText="hasło" />

        <button type="submit" className="btn btn-block">
          zarejestruj
        </button>
        <p>
          Masz już konto?
          <Link to="/login" className="member-btn">
            Zaloguj się
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
