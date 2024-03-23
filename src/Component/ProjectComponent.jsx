import React from "react";
import "./ProjectComponent.css";

export default function ProjectComponent(props) {
  return (
    <div>
      <div className="projectCard">
        <div className="projectCardBody">
          <h1 className="projectCartHeadder">{props.name}</h1>
          <p className="projectCartPharagrapg">{props.description}</p>

          <h3>Technology</h3>
          <p className="projectTec">{props.technology}</p>
        </div>
      </div>
    </div>
  );
}
