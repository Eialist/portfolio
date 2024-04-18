const HeroComponent = ({ scrollToComponent, scrollToContactComponent }) => {
  const handleClick = () => {
    scrollToComponent();
  };

  const scrollToContact = () => {
    scrollToContactComponent();
  };

  return (
    <div className="hero-bg">
      <div className="container hero-img">
        <div className="row hero-row" style={{ padding: "8em 16px" }}>
          <div className="col-sm col-md">
            <div className="hero-name-container">
              <h1 className="hero-title">
                <span>Erica</span>
                <br></br>
                <span>Eklund</span>
                <span className="orange">.</span>
              </h1>
              <div className="divider-horizontal"></div>
              <div style={{ margin: "16px 0" }}>
                <a
                  className="hero-link"
                  href="https://www.linkedin.com/in/erica-eklund-258a39103/">
                  LinkedIn
                </a>
                <span> | </span>
                <a className="hero-link" href="https://github.com/Eialist">
                  Github
                </a>
              </div>
              <button className="hero-btn" onClick={scrollToContact}>
                Contact Me
              </button>
            </div>
          </div>
          <div className="col-sm col-md-12 col-lg-6 d-flex justify-content-end">
            <span className="hero-text-container">
              <h3 className="hero-bg-text">FRONT END DEVELOPER</h3>
              <h2 className="hero-sm-title">
                Enhance your team <br></br>with my dedicated creativity and
                commitment
              </h2>
              <p className="hero-text">
                I will utilize Javascript, CSS and diverse frameworks, alongside
                Agile methodologies like Kanban and Scrum, to deliver creative
                solutions tailored to your requirements.
              </p>
              <a className="hero-text-link" onClick={handleClick}>
                Learn more...
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;

// Frontend developers translate designs into interactive web
//                 experiences using HTML, CSS, and JavaScript, ensuring seamless
//                 user interfaces and optimal functionality.
