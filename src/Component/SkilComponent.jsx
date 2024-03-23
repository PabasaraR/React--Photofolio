import React from "react";
import "./SkilComponent.css";

export default function SkilComponent(props) {
  return (
    <div className="skilPadin">
      <div className="skilComponentBody">
        <button className="skilButton">{props.skil}</button>
      </div>
    </div>
  );
}
