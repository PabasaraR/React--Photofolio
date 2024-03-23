import React, { useState, useEffect } from "react";
import "./App.css";
import AboutMe from "./Component/AboutMe";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Project from "./Component/Project";
import Skil from "./Component/Skil";

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className="App">
      <nav className={`navBar ${visible ? "" : "hideNav"}`}>
        <a href="#1" className="link">
          Home
        </a>
        <a href="#2" className="link">
          About Me
        </a>
        <a href="#3" className="link">
          My Project
        </a>
        <a href="#4" className="link">
          My Skils
        </a>
      </nav>

      <div id="1">
        <Home />
      </div>

      <div id="2">
        <AboutMe />
      </div>
      <div id="3" className="three">
        <Project />
      </div>

      <div id="4" className="fore">
        <Skil />
      </div>

      <div id="5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
