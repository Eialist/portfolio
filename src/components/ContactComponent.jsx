import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactComponent = () => {
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
            <input type="text" name="user_name" placeholder="Name" />
            <input type="email" name="user_email" placeholder="Email" />
            <textarea name="user_message" placeholder="Message" />
            <div className="d-flex justify-content-end">
              <input type="submit" value="Send" className="contact-form-btn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
