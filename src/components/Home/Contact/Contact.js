import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nhheh87",
        "template_bernxbz",
        e.target,
        "user_4C1zoAywVAkCZD2pqw8Yx"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="container mt-5 pb-5">
      <h2 className="text-center pb-3">Contact me</h2>
      <div className="align-items-center">
        <form className="w-75 mx-auto" onSubmit={sendEmail}>
          <input
            placeholder="Your Name"
            type="text"
            name="name"
            className="form-control"
          />
          <br />
          <input
            className="form-control"
            type="email"
            name="user_email"
            placeholder="Your Email"
          />
          <br />
          <textarea
            className="form-control"
            name="message"
            placeholder="Your Message"
            cols="30"
            rows="5"
          ></textarea>
          <br />
          {/* <button style={{ background: "#ff4a57" }}>
            {" "}
            <input className="mb-3 form-control" type="submit" value="Submit" />
          </button> */}

          <button
            className="px-4 py-2 rounded"
            style={{ background: "#ff4a57", border: "none", color: "white" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
