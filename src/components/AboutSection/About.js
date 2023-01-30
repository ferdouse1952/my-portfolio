import React from "react";
import photo from "../../Image/my-photo.jpg";
import "./About.css";

const About = () => {
  return (
    <div data-aos="flip-left" data-aos-duration="2000" className="about-section text-white mt-4 p-3 p-md-5">
      <div className="row row-div">
        {/* <h2 className='text-center mb-4'>About Me</h2> */}
        <div  className="col-6 left">
          <div className="photo-div mx-auto">
            <img src={photo} alt="" />
          </div>
        </div>
        <div className="col-6 m-auto right">
          <div>
            <h2 className="mb-4">About Me</h2>
            <p className="">
              Hello, I am a front-end developer and have 1 year of experience in
              Web Design.I love to work in Front-end Development and still
              learning Programming. I am also an expert in WordPress Theme
              Customization with 1 year+ working experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
