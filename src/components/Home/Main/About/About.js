import React from "react";
import about_pic from "../../../../images/pic-1.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-md-6 col-sm-12 col-xs-12">
          <div className="about-img">
            <img className="align-middle" src={about_pic} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12 text-start about-content">
          <h3>Hello, I Am Monirul Fahad</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            fugiat aspernatur possimus minus, suscipit velit ducimus impedit
            quam eaque iusto consequuntur odio commodi adipisci perferendis id
            delectus nihil, fuga tempora veniam necessitatibus. Ducimus
            dignissimos, quis hic veniam recusandae aliquam omnis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
