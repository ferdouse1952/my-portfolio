import React, { useEffect } from "react";
import "./Profile.css";
import About from "../AboutSection/About";
import Portfolio from "../Portfolio/Portfolio";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Profile = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="row m-0">
        <div data-aos="fade-right" className="col-3 side p-0 d-none d-lg-block">
          <div className="side-bar text-center p-4 h-100">
            <h5 className="fs-3 pt-5">Ferdouse Binte Asad</h5>
            <p className="fs-6">Front-End Developer</p>
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
              <table className="table">
                <tbody>
                  <tr className="d-flex justify-content-between">
                    <td>Date of birth</td>
                    <td>22-02-1995</td>
                  </tr>
                  <tr className="d-flex justify-content-between">
                    <td>Residance</td>
                    <td>BD</td>
                  </tr>
                  <tr className="d-flex justify-content-between">
                    <td>Address</td>
                    <td>Dhaka,Bangladesh</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="user-details-container container">
              <h4 className="fs-5 text-center pt-2">Languages</h4>
              <hr className="text-white" />
              <table className="table">
                <tbody>
                  <tr className="d-flex justify-content-between">
                    <td>Bangla</td>
                    <td>100%</td>
                  </tr>
                  <tr className="d-flex justify-content-between">
                    <td>English</td>
                    <td>70%</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
            <div className="download-button text-center">
              <button className="pt-2 pb-2 ps-3 pe-3">
                Download Button{" "}
                <i className="fa-sharp fa-solid fa-download icon"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-8 col-11 px-4">
          {/* HERO SECTION */}
          <div
            data-aos="fade-down"
            className="hero-section d-flex flex-column justify-content-center align-items-center"
          >
            {/* hero section contents */}
            <div
              data-aos="zoom-in"
              className="m-auto text-div text-center text-white px-lg-5"
            >
              <h1>I'm Ferdouse Binte Asad</h1>
              <h2>
                <span>Front-end</span> Developer
              </h2>
              <button className="hire-button pe-3 ps-3 pt-2 pb-2 mt-3">
                Hire Me <i className="fa-solid fa-arrow-right icon"></i>
              </button>
            </div>
          </div>
          {/* offcanvas button */}
          <div className="toggle-button text-start w-100">
            <button
              className="btn open-btn d-block d-lg-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#staticBackdrop"
              aria-controls="staticBackdrop"
            >
              Open
            </button>
          </div>
          {/* offcanvas start*/}
          <div
            className="offcanvas offcanvas-start offcanvas-background"
            data-bs-backdrop="static"
            tabindex="-1"
            id="staticBackdrop"
            aria-labelledby="staticBackdropLabel"
          >
            <div className="offcanvas-header">
              <div className="text-end w-100">
                <button
                  type="button"
                  className="btn-close close-btn"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
          <About />
          <Portfolio />
        </div>
        {/* Navbar */}

        <div className="col-1 px-0 navbar-section">
          <div data-aos="fade-left" className="navbar">
            <div className="mx-auto menu">
              <Link className="text-decoration-none" as={Link} to="/">
                <i className="fa-solid fa-house d-block"></i>
              </Link>
              <Link className="text-decoration-none" as={Link} to="">
                <i className="fa-brands fa-servicestack d-block"></i>
              </Link>
              <Link className="text-decoration-none" as={Link} to="">
                <i className="fa-solid fa-briefcase"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
