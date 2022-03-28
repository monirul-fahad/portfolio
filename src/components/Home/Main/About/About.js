import React, { useEffect } from "react";
import about_pic from "../../../../images/pic-1.jpg";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1500,
      easing: "ease",
    });
  }, []);
  return (
    <div className="container mt-5" id="about">
      <div className="row d-flex align-items-center">
        <div className="col-md-6 col-sm-12 col-xs-12" data-aos="fade-right">
          <div className="about-img">
            <img className="align-middle" src={about_pic} alt="" />
          </div>
        </div>
        <div
          className="col-md-6 col-sm-12 col-xs-12 text-start about-content"
          data-aos="fade-left"
        >
          <h3>
            Hello, I'm <span style={{ color: "#ff4a57" }}>Monirul Islam</span>{" "}
          </h3>
          <p>
            A Full-Stack Web Developer with an avid interest in full-stack web
            development. JavaScript is my ideal language and I enjoy working
            with ReactJS. As a programmer, I love taking on challenges and love
            being part of the solution. I am able to work well both in a team
            environment as well as using my own initiative. I am able to work
            well under pressure and adhere to strict deadlines.
          </p>
          <h4>My Skills</h4>
          <div className="pe-4 pb-3 skills">
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>Next.js</span>
            <span>Redux</span>
            <span>Express.js</span>
            <span>MOngoDB</span>
            <span>React Router</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>React Bootstrap</span>
            <span>Tailwind</span>
            <span>Material UI</span>
            <span>React Icon</span>
            <span>Netlify</span>
            <span>Varcel</span>
            <span>Firebase</span>
            <span>Heroku</span>
          </div>
          <div className="pt-4">
            <button
              className="px-4 me-3 py-2 rounded fw-bold about-btn"
          
            >
              <a
                style={{ color: "#1f2235", textDecoration: "none" }}
                href="https://drive.google.com/uc?export=download&id=1hUBC0rwgd58Qccijvve7surAoYIUrkXb"
              >
                Download Resume
              </a>
            </button>
            <button
              className="px-4 py-2 rounded fw-bold about-btn"
             
            >
                <a target="_blank" rel="noreferrer"
                style={{ color: "#1f2235", textDecoration: "none" }}
                href="https://www.linkedin.com/in/monirul-fahad/"
              >
                Hire Me
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
