import github from "../assets/icons/github.png";

const Navbar = ({ scrollToContactComponent }) => {
  const handleClick = () => {
    scrollToContactComponent();
    let navbar = document.getElementById("navbarNav");
    navbar.classList.remove("show");
  };
  return (
    <div className="nav-container d-flex align-items-end">
      <nav className="navbar navbar-expand-lg container-fluid navbar-container container">
        <div className="container-fluid d-flex justify-content-between">
          <div className="mt-3 navbar-mobile-container">
            <a className="navbar-brand nav-text nav-title" href="#">
              EiA.
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse navbar-desktop"
            id="navbarNav">
            <ul className="navbar-nav mt-2">
              <li className="nav-item">
                <a
                  className="nav-link active nav-text"
                  aria-current="page"
                  href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text" onClick={handleClick}>
                  Contact
                </a>
              </li>
              <div className="divider-vertical"></div>
              <a href="https://github.com/Eialist">
                <img
                  src={github}
                  alt=""
                  width={20}
                  height={20}
                  style={{ marginTop: ".5em" }}
                />
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
