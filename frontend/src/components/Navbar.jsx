import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import { useDashboardContext } from "../pages/DashboardLayout";
import LogoNapis from "./LogoNapis";
import LogoutContainer from "./LogoutContainer";

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div className="logo-container">
          <LogoNapis />
        </div>
        <div className="btn-container">
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
