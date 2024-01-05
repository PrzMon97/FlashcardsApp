import NavLinks from "./NavLinks";
//import Logo from "../components/Logo";
import LogoSamo from "../components/LogoSamo";

import Wrapper from "../assets/wrappers/Sidebar";
import { useDashboardContext } from "../pages/DashboardLayout";

const Sidebar = () => {
  const { showSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <LogoSamo />
          </header>
          <NavLinks isSidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
