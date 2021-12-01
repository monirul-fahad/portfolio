import React from "react";
import { Container } from "react-bootstrap";
import js from "../../../../../images/javascript.jpg";
import react from "../../../../../images/react.png";
import node from "../../../../../images/node.png";
import "./Blog.css";

const Blog = () => {
  return (
    <Container className="pt-5" id="blog">
      <h2 className="pt-5 pb-3" data-aos="flip-left">
        My <span style={{ color: "#ff4a57" }}>Blogs</span>
      </h2>
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="col">
          <div className="card h-100">
            <div className="card-img-hover blog-img">
              <img src={js} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Javascript</h5>
              <p className="card-text">
                JavaScript, often abbreviated as JS, is a programming language
                that conforms to the ECMAScript specification. JavaScript is
                high-level, often just-in-time compiled and multi-paradigm
              </p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button
                className="me-2 fw-bold rounded"
                style={{
                  background: "#ff4a57",
                  border: "none",
                  color: "#1f2235",
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-img-hover blog-img">
              <img src={react} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">React JS</h5>
              <p className="card-text">
                React is a free and open-source front-end JavaScript library for
                building user interfaces based on UI components.
              </p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button
                className="me-2 fw-bold rounded"
                style={{
                  background: "#ff4a57",
                  border: "none",
                  color: "#1f2235",
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-img-hover blog-img">
              <img src={node} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Node JS</h5>
              <p className="card-text">
                Node.js is an open-source, cross-platform, back-end JavaScript
                runtime environment that runs on the V8 engine and executes
                JavaScript code outside a web browser.
              </p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button
                className="me-2 fw-bold rounded"
                style={{
                  background: "#ff4a57",
                  border: "none",
                  color: "#1f2235",
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
