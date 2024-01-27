import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const token = await response.json();
        console.log("Zalogowano pomyślnie");
        navigate("/dashboard");
      } else {
        // Obsłuż błąd logowania
        setError("Błąd logowania");
      }
    } catch (error) {
      console.error("Błąd podczas logowania:", error);
    }
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleLogin}>
        <Logo />
        <h4>Logowanie</h4>
        <FormRow
          type="email"
          name="email"
          labelText="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormRow
          type="password"
          name="password"
          labelText="hasło"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-block">
          Zaloguj
        </button>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

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
