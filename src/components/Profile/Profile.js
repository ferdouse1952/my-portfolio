import React, { useEffect } from "react";
import "./Profile.css";
import About from "../AboutSection/About";
import Portfolio from "../Portfolio/Portfolio";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "../Contact/Contact";

const Profile = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="row m-0">
        <div data-aos="fade-right" className="col-3 side p-0 d-none d-lg-block">
          <div className="side-bar text-center p-4 h-100">
            {/* <h5 className="fs-3 pt-5">Ferdouse Binte Asad</h5>
            <p className="fs-6">Front-End Developer</p> */}
            <div className="d-flex justify-content-evenly social-icon">
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://twitter.com/?lang=en">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>

            <hr />

            <div className="user-details-container container">
              <h4 className="fs-5 text-center pt-2">Skills</h4>
              <hr className="text-white" />
              <table className="table">
                <tbody>
                  <tr className="d-flex justify-content-between">
                    <td>HTML</td>
                    <td>90%</td>
                  </tr>
                  <tr className="d-flex justify-content-between">
                    <td>CSS</td>
                    <td>80%</td>
                  </tr>
                  <tr className="d-flex justify-content-between">
                    <td>JS</td>
                    <td>60%</td>
                  </tr>
                  <tr className="d-flex justify-content-between">
                    <td>Bootstrap</td>
                    <td>80%</td>
                  </tr>
                  <tr className="d-flex justify-content-between">
                    <td>React js</td>
                    <td>50%</td>
                  </tr>
                  <tr className="d-flex justify-content-between">
                    <td>Material ui</td>
                    <td>30%</td>
                  </tr>
                  <tr className="d-flex justify-content-between">
                    <td>WordPress</td>
                    <td>60%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-8 col-11 px-4">
          {/* HERO SECTION */}
          <div className="heroSection" data-aos="fade-down">
            <div className="wrapper">
              <span className="greeting">Hello there!</span>
              <span className="name">I'm Ferdouse Binte Asad</span>
              <span className="tagline">
                I am a junior Front-end Developer.
              </span>
              <span className="action">
                <Link to="/" className="btn purple">
                  My Resume
                </Link>
              </span>
            </div>
          </div>

          <About />
          <Portfolio />
          <Contact />
        </div>
        {/* Navbar */}

        <div className="col-1 px-0 navbar-section">
          <div data-aos="fade-left" className="navbar">
            <div className="mx-auto menu text-white">
              <Link className="text-decoration-none" as={Link} to="/">
                <h6>Home</h6>
              </Link>
              <Link className="text-decoration-none" as={Link} to="/about">
                <h6>About me</h6>
              </Link>
              <Link className="text-decoration-none" as={Link} to="/portfolio">
                <h6>Project</h6>
              </Link>
              <Link className="text-decoration-none" as={Link} to="/contact">
                <h6>Contact</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
