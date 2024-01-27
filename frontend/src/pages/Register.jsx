import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users/signup", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          lastname: lastname,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // Obsłuż pomyślną rejestrację (przekierowanie, wyświetlenie komunikatu, etc.)
        console.log("Użytkownik został zarejestrowany");
        navigate("/login");
      } else {
        // Obsłuż błąd rejestracji
        console.error("Błąd rejestracji");
      }
    } catch (error) {
      console.error("Błąd podczas rejestracji:", error);
    }
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleRegister}>
        <Logo />
        <h4>Rejestracja</h4>
        <FormRow
          type="text"
          name="name"
          labelText="imię"
          onChange={(e) => setName(e.target.value)}
        />
        <FormRow
          type="text"
          name="lastname"
          labelText="nazwisko"
          onChange={(e) => setLastname(e.target.value)}
        />
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
