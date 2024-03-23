import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div>
      <Link className="displayInline">Home</Link>

      <Link className="displayInline">Skil</Link>

      <Link className="displayInline">Projrct</Link>

      <Link className="displayInline">Cntact</Link>
    </div>
  );
}
