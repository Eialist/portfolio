import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import me from "../assets/images/color-press.png";

const ContactComponent = () => {
  // const [active, setActive] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fyk5yej", "template_069t7xi", form.current, {
        publicKey: "fVcichCyqVk1RD1G7",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          // setActive(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-bg">
      <div className="container">
        <div className="contact-form-container col-sm">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="d-flex flex-column"
            style={{ gap: "16px" }}>
            <h4 className="contact-title">Contact me</h4>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              minLength={2}
              maxLength={40}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              size="30"
              required
            />
            <textarea
              name="user_message"
              placeholder="Message"
              maxLength={1000}
              required
            />
            <div className="d-flex justify-content-end">
              <input type="submit" value="Send" className="contact-form-btn" />
            </div>
          </form>
          {/* {active === true ? (
            <div
              style={{
                position: "absolute",
                width: "200px",
                height: "200px",
                backgroundColor: "#ff6650",
                top: 0,
                right: 0,
              }}>
              <img src={me} alt="" width={100} />
              Thank you for your Email
            </div>
          ) : (
            false
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
