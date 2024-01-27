import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/DashboardFormPage";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Pobierz token z localStorage
    const token = localStorage.getItem("token");

    if (token) {
      // Wyślij zapytanie do API w celu pobrania danych zalogowanego użytkownika
      fetch("http://localhost:3000/users/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) =>
          console.error("Błąd podczas pobierania danych:", error)
        );
    }
  }, []);

  return (
    <Wrapper>
      <h1>Moje dane</h1>
      {userData && (
        <div>
          <p>Imię: {userData.name}</p>
          <p>Nazwisko: {userData.lastname}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </Wrapper>
  );
};

export default Profile;
