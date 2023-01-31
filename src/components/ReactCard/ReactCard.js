import React from "react";
import "./ReactCard.css";

const ReactCard = (props) => {
  const { postImage, title, desc, button } = props.projects;
  return (
    <div>
      <div className="col">
        <div className="card border-0 h-100">
          <div className="projetsImg">
            <img src={postImage} className="card-img-top" alt="..." />
            <div className="project-details text-center">
              <h5>{title}</h5>
              <p>{desc}</p>
              <button className="border-0 p-2 livebtn">
                <a href={button}>See Live</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactCard;
