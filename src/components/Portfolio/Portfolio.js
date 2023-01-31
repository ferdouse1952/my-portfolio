import React, { useEffect } from "react";
import AllCard from "../AllCard/AllCard";
import Projects from "../AllCard/projectData";
import ReactCard from "../ReactCard/ReactCard";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="portfolio-section mt-4 p-5">
      <div className="porfolio-text text-white text-center">
        <h2>Portfolio</h2>
      </div>
      <div className="project-div text-white">
        <ul
          className="nav portfoilo-nav nav-pills mb-3 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              All
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              React Js
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabindex="0"
          >
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {Projects.map((projects) => (
                <AllCard key={projects.id} projects={projects}></AllCard>
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabindex="0"
          >
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {Projects.map((projects) => (
                <ReactCard key={projects.id} projects={projects}></ReactCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
