import React, { useEffect, useState } from "react";
import { Container, Modal, Button, Carousel } from "react-bootstrap";
import sunglass from "../../../../images/sunglass1.jpg";
import tour from "../../../../images/tourdust1.jpg";
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

const Projects = () => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  useEffect(() => {
    AOS.init({
      //   offset: 100,
      //   //   duration: 1500,
      easing: "ease",
    });
  }, []);
  return (
    <Container className="pt-5">
      <h2 className="pt-5 pb-3" data-aos="flip-left">
        Some of my <span style={{ color: "#ff4a57" }}>projects</span>
      </h2>
      <div
        class="row row-cols-1 row-cols-md-3 g-4"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div class="col">
          <div class="card h-100">
            <img src={sunglass} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Glassy Yard</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <>
                {values.map((v, idx) => (
                  <Button
                    key={idx}
                    className="me-2"
                    onClick={() => handleShow(v)}
                  >
                    Full screen
                    {typeof v === "string" && `below ${v.split("-")[0]}`}
                  </Button>
                ))}
                <Modal
                  style={{ backgroundColor: "#1f2235" }}
                  show={show}
                  fullscreen={fullscreen}
                  onHide={() => setShow(false)}
                >
                  {/* <Modal.Header closeButton></Modal.Header> */}

                  <Modal.Body className="container">
                    <div
                      className="row single-project d-flex align-items-center"
                      data-aos="fade-up-left"
                    >
                      <div className="col-md-6" data-aos="fade-right">
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
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn btn-success px-3 py-2">
                              Live
                            </button>
                          </a>
                          <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn btn-info px-3 py-2">
                              Github
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6" data-aos="fade-left">
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
                  <Modal.Header closeButton></Modal.Header>
                </Modal>
              </>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={tour} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Tour Dust</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={health} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">We care</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even
              </p>
            </div>
            <div class="card-footer"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
