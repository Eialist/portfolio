import img from "../assets/images/front-end.png";
import pressImg from "../assets/images/bow-press-nobg.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const EducationComponent = () => {
  return (
    <div className="edu-container edu-bg">
      <img
        // data-aos="zoom-in-up"
        data-aos="zoom-in-right"
        // data-aos-delay="50"
        data-aos-duration="1000"
        className="edu-img"
        src={img}
        alt=""
      />
      <div className="diagonal-bg"></div>
      <div className="container row mx-auto">
        <div className="col-sm col-md-12 col-lg-6"></div>
        <div
          className="col-sm edu-text-container"
          style={{
            zIndex: "1000",
            color: "white",
            padding: "132px 20px 100px",
          }}>
          <h3 className="edu-bg-text">EDUCATION BLOG POST</h3>
          {/* <h4 className="edu-sub-title">
            During my two-year long education at KYH, I have specialized in
            Frontend Development, gaining proficiency in UX/UI design and
            client-centric solutions.
          </h4> */}
          <h4 className="edu-sub-title">
            Exploring Frontend Development: My KYH Education Journey
          </h4>
          {/* <p className="edu-text">
            During my educational journey at KYH in Sweden, I have immersed
            myself in the dynamic realm of Frontend Development. I have refined
            my craft in crafting captivating web pages, applications, and
            systems, both independently and collaboratively. Engaging in
            client-facing consultancy work has enriched my experience, allowing
            me to tailor solutions to meet diverse business needs. Proficient in
            JavaScript, HTML, and CSS, I have also delved into graphic tools,
            UX/UI design, ensuring seamless user experiences. This is something
            I enjoy immensely.
          </p> */}
          <p className="edu-text">
            Embarking on a two-year learning adventure at KYH, I have dived deep
            into Frontend Development. Through hands-on projects and expert
            guidance, I have polished my skills while embracing new challenges.
            Working with clients has improved my communication and
            problem-solving abilities. Though not yet an expert, KYH has given
            me a solid foundation in UX/UI design, teaching me the importance of
            user-friendly interfaces. As I prepare to enter the professional
            world, I am excited to put my knowledge to the test, creating
            captivating websites and collaborating with diverse teams. KYH has
            truly prepared me for success in this dynamic field.
          </p>
          <div className="edu-blog-container" style={{ margin: "1.5em 0" }}>
            <img
              src={pressImg}
              alt=""
              width={70}
              height={70}
              style={{ borderRadius: "500px", backgroundColor: "#BE7B72" }}
            />
            <span style={{ margin: ".5em" }}>
              Erica Eklund
              <span style={{ color: "#FBDF57", fontSize: "36px" }}>.</span>
            </span>
          </div>
          <a
            className="edu-text-link"
            href="https://kyh.se/utbildningar/front-end-developer/anywhere/"
            target="_blank">
            Learn more about the education...
          </a>
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
