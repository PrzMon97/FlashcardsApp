import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { Navbar, Sidebar, SmallSidebar } from "../components";
import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DashboardContext = createContext();
const Dashboard = () => {
  const user = { name: "User" };

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    try {
      await customFetch.get("/auth/logout");
      toast.success("Logging out...");
      const navigate = useNavigate();
      navigate("/login");
    } catch (error) {
      console.error("Błąd podczas wylogowywania:", error);
      toast.error("Wystąpił błąd podczas wylogowywania");
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <Sidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default Dashboard;
