import React from "react";
import "./Banner.css";
import banner_img from "../../../images/banner1.png";

const Banner = () => {
  return (
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-md-6 col-sm-12 col-xs-12 text-start banner-content">
          <h4>Hy There...</h4>
          <h3>My name is</h3>
          <h1>Monirul Islam Fahad</h1>
          <h2>I am a Web Developer</h2>
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12">
          <div className="banner-img">
            <img className="align-middle" src={banner_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
