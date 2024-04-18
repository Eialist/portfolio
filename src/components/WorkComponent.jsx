import JS from "../assets/icons/white-js.png";
import figma from "../assets/icons/white-figma.png";
import react from "../assets/icons/white-react.png";
import node from "../assets/icons/white-node.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const WorkComponent = () => {
  return (
    <div className="container skill-bg">
      <div className="diagonal-bg-left"></div>
      <div className="diagonal-bg-right"></div>
      <div className="row skill-text-container">
        <h3 className="skill-title">Work</h3>
        <p className="skill-text">
          I have become proficient in JavaScript, HTML, CSS, Bootstrap, jQuery,
          React, Node.js, Express.js, MongoDB, UX/UI design with Figma, and
          more, including Scrum and Kanban methodologies.
        </p>
      </div>
      <div className="row">
        <div
          className="card col-sm col-md"
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="50"
          data-aos-duration="1500">
          <div className="skill-circle-icon bg-red">
            <img src={react} alt="" />
          </div>
          <h4>REACT</h4>
          <p>
            Movie theater booking application built with React + Vite, backend
            with Node.js and Express.js
          </p>
          <button className="skill-btn">
            <a href="https://filmvisarna-team4.nodehill.se/" target="_blank">
              Show
            </a>
          </button>
        </div>
        <div
          className="card col-sm"
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="50"
          data-aos-duration="1500">
          <div className="skill-circle-icon bg-purple">
            <img src={figma} alt="" />
          </div>
          <h4>UX-DESIGN</h4>
          <p>
            Different visualizations and design ideas for websites and widgets
            in Figma
          </p>
          <button className="skill-btn">Show</button>
        </div>
        <div
          className="card col-sm col-md"
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="50"
          data-aos-duration="1500">
          <div className="skill-circle-icon bg-pink">
            <img src={JS} alt="" />
          </div>
          <h4>JAVASCRIPT</h4>
          <p>Memory game built using HTML, CSS and vanilla Javascript</p>
          <button className="skill-btn">
            <a href="https://eialist.github.io/memory/" target="_blank">
              Show
            </a>
          </button>
        </div>

        <div
          className="card col-sm col-md"
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="50"
          data-aos-duration="1500">
          <div className="skill-circle-icon bg-yellow">
            <img src={node} alt="" />
          </div>
          <h4>REST API</h4>
          <p>A small MERN rest API. MongoDB, Express.js, React and Node.js</p>
          <button className="skill-btn">
            <a href="https://miniapi-rqe5.onrender.com/items" target="_blank">
              Show
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
