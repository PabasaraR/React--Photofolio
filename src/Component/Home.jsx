import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="homePageBody">
        <div className="homepageCenter">
          <div className="pabasaraImage">
            <img
              src={require("../Image/pabasara4.png")}
              alt="banner"
              className="bannerImage"
            />
          </div>
          <div className="center">
            <div className="pabasaraName">
              <h1 className="pabasaraHeadin" data-heading="I">
                'm Pabasara Ravindaka
              </h1>
            </div>
            {
              <p className="pabasraPharagraph">
                Passionate IT student with a knack for problem-solving and a
                drive for innovation.
              </p>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
