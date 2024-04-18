import ContactComponent from "../components/ContactComponent";
import EducationComponent from "../components/EducationComponent";
import Footer from "../components/Footer";
import HeroComponent from "../components/HeroComponent";
import Navbar from "../components/Navbar";
import SkillsComponent from "../components/SkillsComponent";
import { useRef } from "react";

const Frontpage = () => {
  const eduRef = useRef();
  const contactRef = useRef();

  const scrollToComponent = () => {
    eduRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToContactComponent = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div>
      <Navbar scrollToContactComponent={scrollToContactComponent} />
      <HeroComponent
        scrollToComponent={scrollToComponent}
        scrollToContactComponent={scrollToContactComponent}
      />
      <div ref={eduRef}>
        <EducationComponent />
      </div>
      <SkillsComponent />
      <div ref={contactRef}>
        <ContactComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Frontpage;
