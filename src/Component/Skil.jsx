import React from "react";
import "./Skil.css";
import SkilComponent from "./SkilComponent";

export default function Skil() {
  return (
    <div className="skilBody">
      <div className="technicalSkil">
        <h1 className="skilHead">My Skils</h1>
        <h2 className="technicalSkilh2">Technical Skils</h2>
        <div className="skilGrid">
          <SkilComponent skil="Java" />
          <SkilComponent skil="Python" />
          <SkilComponent skil="Html" />
          <SkilComponent skil="Css" />
          <SkilComponent skil="JavaScript" />
          <SkilComponent skil="React" />
          <SkilComponent skil="express js" />
          <SkilComponent skil="Node Js" />
          <SkilComponent skil="mongodb" />
          <SkilComponent skil="Axure 10" />
          <SkilComponent skil="MySQL" />
          <SkilComponent skil="Git" />
        </div>
      </div>

      <div className="personalSkil">
        <h2 className="personalSkilh2">Personal Skils</h2>
        <div className="skilGrid2">
          <SkilComponent skil="Teamwork" />
          <SkilComponent skil="Problem-solving" />
          <SkilComponent skil="Time management" />
          <SkilComponent skil="Creativity" />
          <SkilComponent skil="Leadership" />
          <SkilComponent skil="Self learning " />
          <SkilComponent skil="Adaptability" />
          <SkilComponent skil="Critical thinking" />
          <SkilComponent skil="Remote work skills" />
          <SkilComponent skil="Flexibility" />
          <SkilComponent skil="Self-motivation" />
          <SkilComponent skil="Continuous improvement" />
        </div>
      </div>
    </div>
  );
}
