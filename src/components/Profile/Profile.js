import React, { useEffect } from "react";
import "./Profile.css";
import About from "../AboutSection/About";
import Portfolio from "../Portfolio/Portfolio";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "../Contact/Contact";
import Skill from "../Skill/Skill";

const Profile = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="row m-0">
        <div className="col-1 px-0">
          <div data-aos="fade-right" className="navbar">
            <div className="mx-auto menu text-white">
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook-f d-block"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa-brands fa-instagram d-block"></i>
              </a>
              <a href="https://twitter.com/?lang=en">
                <i className="fa-brands fa-twitter d-block"></i>
              </a>
              <a href="https://www.linkedin.com/">
                <i className="fa-brands fa-linkedin d-block"></i>
              </a>
              <a href="https://github.com/">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-10  px-4">
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
          <Skill/>
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
    </>
  );
};

export default Profile;
