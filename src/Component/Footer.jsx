import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footerBody">
      <div className="details">
        <h3 className="detailsh3">Developed by Pabasara Ravindaka</h3>
        <p> email:hprchandrasekara@gmail.com</p>
      </div>
      <div className="icon">
        <a
          href="https://github.com/PabasaraR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={{ color: "white", fontSize: "40px" }} />
        </a>

        <a
          href="https://www.linkedin.com/in/pabasara-chandrasekara-29b9992ba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            style={{ color: "white", fontSize: "40px", paddingLeft: "30px" }}
          />
        </a>
      </div>
    </div>
  );
}
