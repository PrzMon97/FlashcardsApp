import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import styled from "styled-components";

const Landing = () => {
  return (
    <StyledWrapper>
      <nav>
        <img src={logo} alt="Flashcards" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <div>
            <p></p>
          </div>
          <h1>
            Flashcards <span>Learning</span> App
          </h1>
          <p>
            Innowacyjna platforma do nauki angielskiego, która przenosi edukację
            na nowy poziom! Nasza aplikacja Flashcards została stworzona z myślą
            o wszystkich, którzy pragną skutecznie i efektywnie przyswajać nową
            wiedzę.
          </p>
          <Link to="/register" className="btn register-link">
            Rejestracja
          </Link>
          <Link to="/login" className="btn">
            Logowanie
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -1rem;
  }
  h1 {
    font-weight: 500;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 2.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 2.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  .logo {
    max-width: 100%;
    max-height: 100%;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
