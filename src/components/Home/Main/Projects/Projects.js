import React, { useEffect, useState } from "react";
import { Container, Modal, Button, Carousel } from "react-bootstrap";
import sunglass from "../../../../images/sunglass1.jpg";
import tour from "../../../../images/tourcard.jpg";
import health from "../../../../images/heathcare1.jpg";
import sunglass1 from "../../../../images/sunglass1.jpg";
import sunglass2 from "../../../../images/sunglass2.jpg";
import sunglass3 from "../../../../images/sunglass3.jpg";
import health1 from "../../../../images/heathcare1.jpg";
import health2 from "../../../../images/heathcare2.jpg";
import health3 from "../../../../images/heathcare3.jpg";
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
            <img src={sunglass} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Glassy Yard</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <>
                {values.map((v, idx) => (
                  <Button
                    key={idx}
                    className="me-2 fw-bold "
                    style={{
                      background: "#ff4a57",
                      border: "none",
                      color: "#1f2235",
                    }}
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
                            <button
                              style={{
                                background: "#ff4a57",
                                border: "none",
                                color: "#1f2235",
                              }}
                              className="btn btn-success px-3 py-2"
                            >
                              <MdOutlinePreview /> Live
                            </button>
                          </a>
                          <a
                            href="https://github.com/monirul-fahad/sunglass-store-app-client"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button
                              style={{
                                background: "#ff4a57",
                                border: "none",
                                color: "#1f2235",
                              }}
                              className="btn btn-info px-3 py-2"
                            >
                              <FaGithub /> Github
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h2>Glassy Yard</h2>
                        <div>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Libero, sunt repellendus aspernatur totam nihil
                          blanditiis adipisci voluptatem qui ea cum?
                          <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
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
            <img src={tour} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Tour Dust</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <>
                {values.map((v, idx) => (
                  <Button
                    key={idx}
                    className="me-2 fw-bold"
                    style={{
                      background: "#ff4a57",
                      border: "none",
                      color: "#1f2235",
                    }}
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
                            <button
                              style={{
                                background: "#ff4a57",
                                border: "none",
                                color: "#1f2235",
                              }}
                              className="btn btn-success px-3 py-2"
                            >
                              <MdOutlinePreview /> Live
                            </button>
                          </a>
                          <a
                            href="https://github.com/monirul-fahad/tourism-app-clinte"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button
                              style={{
                                background: "#ff4a57",
                                border: "none",
                                color: "#1f2235",
                              }}
                              className="btn btn-info px-3 py-2"
                            >
                              <FaGithub /> Github
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h2>Tour Dust</h2>
                        <div>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Libero, sunt repellendus aspernatur totam nihil
                          blanditiis adipisci voluptatem qui ea cum?
                          <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
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
            <img src={health} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">We care</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even
              </p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <>
                {values.map((v, idx) => (
                  <Button
                    key={idx}
                    className="me-2 fw-bold"
                    style={{
                      background: "#ff4a57",
                      border: "none",
                      color: "#1f2235",
                    }}
                    onClick={() => handleShow3(v)}
                  >
                    More About We Care
                    {typeof v === "string" && `below ${v.split("-")[0]}`}
                  </Button>
                ))}
                <Modal
                  show={show3}
                  fullscreen={fullscreen}
                  onHide={() => setShow3(false)}
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
                              src={health1}
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={health2}
                              alt="second slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={health3}
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
                              className="btn btn-success px-3 py-2"
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
                              className="btn btn-info px-3 py-2"
                            >
                              <FaGithub /> Github
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h2>We Care</h2>
                        <div>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Libero, sunt repellendus aspernatur totam nihil
                          blanditiis adipisci voluptatem qui ea cum?
                          <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
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
                          <span>React Icon</span>
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
      </div>
    </Container>
  );
};

export default Projects;
