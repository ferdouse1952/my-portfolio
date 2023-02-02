import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="skill mt-4">
        <h4 className="text-center pt-4">Skill</h4>
      <div className="skills mx-auto">
        <h2>Front-End</h2>
        <ul>
          <li>
            <span className="html5"></span>
            <em>HTML</em>
          </li>
          <li>
            <span className="css3"></span>
            <em>CSS</em>
          </li>
          <li>
            <span className="js"></span>
            <em>Javascript</em>
          </li>
        </ul>
        <h2>Frameworks</h2>
        <ul>
          <li>
            <span className="wordpress"></span>
            <em>Wordpress</em>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skill;
