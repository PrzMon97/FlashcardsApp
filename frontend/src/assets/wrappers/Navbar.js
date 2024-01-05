import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px px 0px rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);
  .logo {
    display: flex;
    align-items: center;
    width: 60%;
  }
  .nav-center {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 5%;
  }
  .btn-container {
    display: flex;
    align-items: center;
    margin-right: 5%;
  }

  .logo-text {
    display: none;
  }
  @media (min-width: 1254px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 100%;
      align-items: center;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;
