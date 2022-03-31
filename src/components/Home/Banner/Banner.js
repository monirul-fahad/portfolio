import React, { useEffect } from "react";
import "./Banner.css";
import banner_img from "../../../images/banner1.png";
import TypeWriterEffect from "react-typewriter-effect";
import ParticlesBg from "particles-bg";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1500,
      easing: "ease",
    });
  }, []);
  return (
    <>
      <div className="container mt-5 pt-5" id="home" style={{height:"100vh"}}>
        <div className="row d-flex align-items-center">
          <div
            className="col-md-6 col-sm-12 col-xs-12 text-start banner-content"
            data-aos="fade-down-right"
          >
            <h3>Hy There...</h3>
            <h1>
              I'M <span style={{ color: "#ff4a57" }}>Monirul Islam Fahad</span>
            </h1>
            <TypeWriterEffect
              textStyle={{
                // fontFamily: "Roboto",
                color: "#ff4a57",
                fontWeight: 500,
                fontSize: "32px",
              }}
              startDelay={2000}
              cursorColor="#fff"
              multiText={[
                "MERN Stack Web Developer",
                "Front-End Web Developer",
                "Full-Stack Web Developer",
                "MERN Stack Web Developer",
              ]}
              loop={true}
              multiTextDelay={1000}
              typeSpeed={150}
            />
            <p style={{ fontSize: "20px" }} className="mt-3 pe-5">
              An aspiring MERN Stack Developer with huge knowledge and
              proficiency in JavaScript and ReactJS as well as strong skills in
              writing clean and efficient codes.
            </p>
            <ul className="social-link">
              <li>
                <a
                  target="_blank" rel="noreferrer"
                  href="https://www.linkedin.com/in/monirul-fahad/"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/monirul-fahad">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  target="_blank" rel="noreferrer"
                  
                  href="https://www.facebook.com/monirul.fahd/"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/monirulFahd">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  target="_blank" rel="noreferrer"
                  href="https://www.instagram.com/monirul._.fahad/"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12" data-aos="fade-up">
            <div className="banner-img">
              <img className="align-middle" src={banner_img} alt="" />
            </div>
          </div>
        </div>
      </div>

      <ParticlesBg color="#ffffff" type="cobweb" bg={true} />
    </>
  );
};

export default Banner;
