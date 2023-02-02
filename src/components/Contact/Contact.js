import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0vbvt31",
        "template_4y3ojxa",
        form.current,
        "fyDcyA3J-Dk2t8n-W"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactSection mt-4">
      <form className="my-form" ref={form} onSubmit={sendEmail}>
        <div className="container pt-5">
          <h1 className="text-center text-white">Get in touch!</h1>
          <ul>
            <li>
              <div className="grid grid-2">
                <input
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  required
                />
                <input
                  type="text"
                  placeholder="Surname"
                  name="user_name"
                  required
                />
              </div>
            </li>
            <li>
              <div className="grid grid-2">
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  required
                />
                <input type="tel" placeholder="Phone" name="user_number" />
              </div>
            </li>
            <li>
              <textarea placeholder="Message" name="message"></textarea>
            </li>

            <li>
              <div className="grid grid-3">
                <button className="btn-grid" type="submit">
                  <span className="back ">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg"
                      alt=""
                    />
                  </span>
                  <span className="front" type="submit" value="Send">
                    SUBMIT
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Contact;
