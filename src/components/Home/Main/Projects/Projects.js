import React from "react";
import "./Projects.css";
import sunglass1 from "../../../../images/sunglass1.jpg";
import sunglass2 from "../../../../images/sunglass2.jpg";
import sunglass3 from "../../../../images/sunglass3.jpg";
import health1 from "../../../../images/heathcare1.jpg";
import health2 from "../../../../images/heathcare2.jpg";
import health3 from "../../../../images/heathcare3.jpg";
import tour1 from "../../../../images/tourdust1.jpg";
import tour2 from "../../../../images/tourdust2.jpg";
import tour3 from "../../../../images/tourdust3.jpg";
import { Carousel } from "react-bootstrap";

const Projects = () => {
  return (
    <div className="container">
      <div className="mt-5">
        <div className="row single-project d-flex align-items-center">
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
          </div>
          <div className="col-md-6">
            <h2>Glassy Yard</h2>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
              sunt repellendus aspernatur totam nihil blanditiis adipisci
              voluptatem qui ea cum?
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
            <h4 className="my-2">Technology</h4>
            <div>
              <h5 className="d-inline">
                <span className="me-2 mb-1 bg-secondary">HTML5</span>
              </h5>
              <h5 className="d-inline">
                <span className="me-2 mb-1">HTML5</span>
              </h5>
              <h5 className="d-inline">
                <span className="me-2 mb-1">HTML5</span>
              </h5>
              <h5 className="d-inline">
                <span className="me-2 mb-1">HTML5</span>
              </h5>
              <h5 className="d-inline">
                <span className="me-2 mb-1">HTML5</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="row single-project d-flex align-items-center">
          <div className="col-md-6">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={tour1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={tour2} alt="second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={tour3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-6">this is sunglass project</div>
        </div>
      </div>
      <div className="mt-5">
        <div className="row single-project d-flex align-items-center">
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
          </div>
          <div className="col-md-6">this is sunglass project</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
