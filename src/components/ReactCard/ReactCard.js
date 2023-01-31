import React from "react";
import "./ReactCard.css";

const ReactCard = (props) => {
  const { postImage } = props.projects;
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <div className="projetsImg">
            <img src={postImage} className="card-img-top" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactCard;
