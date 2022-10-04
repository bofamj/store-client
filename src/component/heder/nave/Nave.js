import logo from ".././../.././assets/images/logo.png";
import "./nave.css";
const Nave = () => {
  return (
    <div className="container pt-2">
      <nav className="navbar navbar-expand-lg navbar-light bg-white ">
        <div className="container-fluid ">
          <div>
            <a className="navbar-brand">
              <img src={logo} />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 m-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Men's</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Women's</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Kid's</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Psges
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item">Action</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Another action</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item">Something else here</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Features
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item">Action</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Another action</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item">Something else here</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Explore
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr className="naveLine" />
    </div>
  );
};

export default Nave;
