import check from "../assets/icons/yellow-check.png";

const SkillsetComponent = () => {
  return (
    <div className="skill-bg">
      <div className="container skill-container">
        <div className="row skill-text-container">
          <h3 className="skill-bg-text">SERVICES</h3>
          <h2 className="skill-sm-title">Skill-Set</h2>
        </div>
        <div className=" skill-list-container">
          <div className="col-sm-5">
            <ul>
              <li>
                <img src={check} width={30} alt="" />
                <span>Website and application development</span>
              </li>
              <li>
                <img src={check} width={30} alt="" />
                <span>HTML and CSS</span>
              </li>
              <li>
                <img src={check} width={30} alt="" />
                <span>Javascript and React</span>
              </li>
              <li>
                <img src={check} width={30} alt="" />
                <span>Bootstrap and Tailwind</span>
              </li>
              <li>
                <img src={check} width={30} alt="" />
                <span>Scrum and Kanban methodologies</span>
              </li>
            </ul>
          </div>
          <div className="col-sm-5">
            <ul>
              <li>
                <img src={check} width={30} alt="" />
                <span>Version control using Git</span>
              </li>
              <li>
                <img src={check} width={30} alt="" />
                <span>Backend development with MERN-stack</span>
              </li>
              <li>
                <img src={check} width={30} alt="" />
                <span>Visualization and design in Figma</span>
              </li>
              <li>
                <img src={check} width={30} alt="" />
                <span>Co-operative Development</span>
              </li>
              <li>
                <img src={check} width={30} alt="" />
                <span>Wordpress</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsetComponent;
