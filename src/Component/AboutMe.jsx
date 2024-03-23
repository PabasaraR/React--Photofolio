import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div>
      <div className="aboutMeBody">
        <h1 className="aboutmeHead">About Me</h1>
        <p className="aboutmePharagraph">
          <div className="aboutMePharagrap1">
            I'm a 22-year-old IT student at the University of Westminster, UK,
            deeply passionate about technology and its transformative potential.
            With a focus on full-stack development, I've recently completed a
            comprehensive MERN stack course at UCSC, enhancing my proficiency in
            front-end design and back-end infrastructure. I thrive on the
            dynamic interplay between front-end aesthetics and back-end
            functionality, enjoying the challenge of crafting seamless user
            experiences while optimizing server-side performance. My goal is to
            create innovative solutions that push the boundaries of what's
            possible, leveraging modern frameworks like React.js and
            technologies like Node.js and Express.js. Driven by a relentless
            pursuit of excellence, I'm excited to continue my journey in
            computer science, exploring new challenges and making a meaningful
            impact through my work.
          </div>
          <div className="education">
            <h2>Education</h2>
            <ul>
              <li>
                {" "}
                BSc (Hons) Computer Science at Informatics Institute of
                Technology (IIT) affiliated with university of westminster (UoW)
                <br />
                (January 2023- present)
              </li>
              <br />
              <li>
                {" "}
                MERN stack certification course in university of colombo(UCSC)
              </li>
            </ul>
          </div>
        </p>
      </div>
    </div>
  );
}
