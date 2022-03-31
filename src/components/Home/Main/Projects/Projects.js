import React, { useEffect, useState } from "react";
import { Container, Modal, Button, Carousel } from "react-bootstrap";
import sunglass from "../../../../images/sunglass1.jpg";
import tour from "../../../../images/tourcard.jpg";

import docy1 from "../../../../images/docy-1.png";
// import docy2 from "../../../../images/docy-2.png";
import docy3 from "../../../../images/docy-3.png";
import docy4 from "../../../../images/docy-4.png";
import docy5 from "../../../../images/docy-5.png";
import docy6 from "../../../../images/docy-6.png";
import docy7 from "../../../../images/docy-7.png";
import docy8 from "../../../../images/docy-8.png";
import docy9 from "../../../../images/docy-9.png";
// import health from "../../../../images/heathcare1.jpg";
import sunglass1 from "../../../../images/sunglass1.jpg";
import sunglass2 from "../../../../images/sunglass2.jpg";
import sunglass3 from "../../../../images/sunglass3.jpg";
// import health1 from "../../../../images/heathcare1.jpg";
// import health2 from "../../../../images/heathcare2.jpg";
// import health3 from "../../../../images/heathcare3.jpg";
import tour1 from "../../../../images/tourdust1.jpg";
import tour2 from "../../../../images/tourdust2.jpg";
import tour3 from "../../../../images/tourdust3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProjectDetails.css";
import { FaGithub } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";

const Projects = () => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  function handleShow2(breakpoint2) {
    setFullscreen(breakpoint2);
    setShow2(true);
  }
  function handleShow3(breakpoint3) {
    setFullscreen(breakpoint3);
    setShow3(true);
  }

  useEffect(() => {
    AOS.init({
      //   offset: 100,
      //   //   duration: 1500,
      easing: "ease",
    });
  }, []);
  return (
    <Container className="pt-5" id="project">
      <h2 className="pt-5 pb-3" data-aos="flip-left">
        Some of my <span style={{ color: "#ff4a57" }}>projects</span>
      </h2>
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
            <div className="col">
          <div className="card h-100">
            <div className="card-img-hover">
              <img src={docy1} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">DOCY <span className="fs-6">(Blog & Documentation App)</span> </h5>
              <p className="card-text">
                Docy is a website to post Blog & Documentation. The goal was about the project is to make user friendly platform for bloggers and readers.
              </p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <>
                {values.map((v, idx) => (
                  <Button
                    key={idx}
                    className="me-2 fw-bold link-btn"
                    // style={{
                    //   background: "#ff4a57",
                    //   border: "none",
                    //   color: "#1f2235",
                    // }}
                    onClick={() => handleShow3(v)}
                  >
                    More About Docy
                    {typeof v === "string" && `below ${v.split("-")[0]}`}
                  </Button>
                ))}
                <Modal
                  show={show3}
                  fullscreen={fullscreen}
                  onHide={() => setShow3(false)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Docy</Modal.Title>
                  </Modal.Header>

                  <Modal.Body className="container">
                    <div
                      className="row single-project d-flex align-items-center"
                      data-aos="flip-left"
                      data-aos-duration="2000"
                    >
                      <div className="col-md-6">
                        <Carousel>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={docy1}
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={docy9}
                              alt="second slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={docy3}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={docy4}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={docy5}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={docy6}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={docy7}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={docy8}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                        </Carousel>
                        <div className="project-link pt-5  text-center">
                          <a
                            href="https://health-care-app-m.firebaseapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button
                              style={{
                                background: "#ff4a57",
                                border: "none",
                                color: "#1f2235",
                              }}
                              className="btn link-btn fw-bold px-3 py-2"
                            >
                              <MdOutlinePreview /> Live
                            </button>
                          </a>
                          <a
                            href="https://github.com/Programming-Hero-Web-Course3/healthcare-related-website-monirul-fahad"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button
                              style={{
                                background: "#ff4a57",
                                border: "none",
                                color: "#1f2235",
                              }}
                              className="btn link-btn fw-bold px-3 py-2"
                            >
                              <FaGithub /> Github
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h2> DOCY <span className="fs-6">(Blog & Documentation App)</span></h2>
                        <div>
                        The goal was about the project is to make user friendly platform for bloggers and readers.  this website will be very beneficial for people who like writing and reading about topics on the internet. It is an user friendly and easy to navigate platform and will help to gather and share knowledge with each other. It also has <span className="fw-bold">Dark</span> mood and <span className="fw-bold">Light</span> mood UI
                          <ul>
                            <li>User can post blogs including video and can comment on blogs also. Cam Follow other users. Even can report blogs.</li>
                            <li>User can update his profile, can update every details. Can see follower, following list and all of his blogs</li>
                            <li>
                             Only Admin can see Admin Dashboard and can see details of the site. Can manage blogs, users. Only Admin can make new Admin.
                            </li>
                          </ul>
                        </div>
                        <h4 className="my-2 fw-bold">Technology</h4>
                        <div className="px-3 pb-2 technology">
                          <span>Next.js</span>
                          <span>Node.js</span>
                          <span>Express.js</span>
                          <span>Material UI</span>
                          <span>Tailwind</span>
                          <span>Redux</span>
                          <span>Chart.js</span>
                          <span>Draft.js</span>
                          <span>MongoDB</span>
                          <span>React</span>
                          <span>Email.js</span>
                          <span>Firebase</span>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-img-hover">
              <img src={sunglass} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Glassy Yard  <span className="fs-6">(E-Commerce Website)</span></h5>
              <p className="card-text">
                Glassy Yard is a MERN-stack single-page web application where
                users can buy or order glasses. This is my best project i have
                done so far.
              </p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <>
                {values.map((v, idx) => (
                  <Button
                    key={idx}
                    className="me-2 fw-bold link-btn"
                    // style={{
                    //   background: "#ff4a57",
                    //   border: "none",
                    //   color: "#1f2235",
                    // }}
                    onClick={() => handleShow2(v)}
                  >
                    More About Glassy Yard
                    {typeof v === "string" && `below ${v.split("-")[0]}`}
                  </Button>
                ))}
                <Modal
                  show={show2}
                  fullscreen={fullscreen}
                  onHide={() => setShow2(false)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Glassy Yard</Modal.Title>
                  </Modal.Header>

                  <Modal.Body className="container">
                    <div
                      className="row single-project d-flex align-items-center "
                      data-aos="flip-left"
                      data-aos-duration="2000"
                    >
                      <div className="col-md-6">
                        <Carousel>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={sunglass1}
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={sunglass2}
                              alt="second slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={sunglass3}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                        </Carousel>
                        <div className="project-link pt-5  text-center">
                          <a
                            href="https://sungalss-shop.firebaseapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn link-btn fw-bold px-3 py-2">
                              <MdOutlinePreview /> Live
                            </button>
                          </a>
                          <a
                            href="https://github.com/monirul-fahad/sunglass-store-app-client"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn link-btn fw-bold px-3 py-2">
                              <FaGithub /> Github
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h2>Glassy Yard  <span className="fs-6">(E-Commerce Website)</span></h2>
                        <div>
                          Glassy Yard is a MERN-stack single-page web
                          application where users can buy or order glasses. I
                          have built the front side of the website using
                          react.JS and Used Node.JS for backend.
                          <ul>
                            <li>
                              Users have to register using email to order
                              products.
                            </li>

                            <li>Admin and user have different dashboards.</li>
                            <li>
                              Admin can manage all products and all orders.
                            </li>
                            <li>Admin can add new products.</li>
                            <li>Admin can make new admin only.</li>
                          </ul>
                        </div>
                        <h4 className="my-2 fw-bold">Technology</h4>
                        <div className="px-3 pb-2 technology">
                          <span>HTML5</span>
                          <span>CSS3</span>
                          <span>Bootstrap</span>
                          <span>React Bootstrap</span>
                          <span>JavaScript</span>
                          <span>React.js</span>
                          <span>React Router</span>
                          <span>Node.js</span>
                          <span>Express.js</span>
                          <span>MOngoDB</span>
                          <span>React Icon</span>
                          <span>Firebase</span>
                          <span>Heroku</span>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-img-hover">
              <img src={tour} className="card-img-top" alt="..." />
            </div>

            <div className="card-body">
              <h5 className="card-title">Tour Dust  <span className="fs-6">(Booking Website)</span></h5>
              <p className="card-text">
                Tour Dust is a professional dynamic single-page web application
                where users can book events to go on a tour.
              </p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <>
                {values.map((v, idx) => (
                  <Button
                    key={idx}
                    className="me-2 fw-bold link-btn"
                    // style={{
                    //   background: "#ff4a57",
                    //   border: "none",
                    //   color: "#1f2235",
                    // }}
                    onClick={() => handleShow(v)}
                  >
                    More About Tour Dust
                    {typeof v === "string" && `below ${v.split("-")[0]}`}
                  </Button>
                ))}
                <Modal
                  show={show}
                  fullscreen={fullscreen}
                  onHide={() => setShow(false)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Tour Dust</Modal.Title>
                  </Modal.Header>

                  <Modal.Body className="container">
                    <div
                      className="row single-project d-flex align-items-center"
                      data-aos="flip-left"
                      data-aos-duration="2000"
                    >
                      <div className="col-md-6">
                        <Carousel>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={tour1}
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={tour2}
                              alt="second slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={tour3}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                        </Carousel>
                        <div className="project-link pt-5  text-center">
                          <a
                            href="https://tourism-web-00.firebaseapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn link-btn fw-bold px-3 py-2">
                              <MdOutlinePreview /> Live
                            </button>
                          </a>
                          <a
                            href="https://github.com/monirul-fahad/tourism-app-clinte"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn link-btn fw-bold px-3 py-2">
                              <FaGithub /> Github
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h2>Tour Dust   <span className="fs-6">(Booking Website)</span></h2>
                        <div>
                          Tour Dust is a professional dynamic single-page web
                          application where users can book events to go on a
                          tour. I have built the front side of the website using
                          react.JS and Used Node.JS for backend.
                          <ul>
                            <li>
                              Users can book an event by logging in using google
                              sign in.
                            </li>
                            <li>Admin can manage and add new events</li>
                            <li>Admin can mange booked events</li>
                            <li>User can cancel book after booking</li>
                          </ul>
                        </div>
                        <h4 className="my-2 fw-bold">Technology</h4>
                        <div className="px-3 pb-2 technology">
                          <span>HTML5</span>
                          <span>CSS3</span>
                          <span>Bootstrap</span>
                          <span>React Bootstrap</span>
                          <span>JavaScript</span>
                          <span>React.js</span>
                          <span>React Router</span>
                          <span>Node.js</span>
                          <span>Express.js</span>
                          <span>MOngoDB</span>
                          <span>React Icon</span>
                          <span>Firebase</span>
                          <span>Heroku</span>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </>
            </div>
          </div>
        </div>
    
      </div>
    </Container>
  );
};

export default Projects;
