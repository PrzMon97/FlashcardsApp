import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import { Link, useNavigate } from "react-router-dom";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  const { user, logoutUser } = useDashboardContext();
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      setError("Nieprawidłowe wylogowanie");
      console.error("Błąd podczas wylogowywania:", error);
    }
  };

  return (
    <Wrapper>
      <button type="button" className="btn logout-btn" onClick={handleLogout}>
        Wyloguj
      </button>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </Wrapper>
  );
};
export default LogoutContainer;
