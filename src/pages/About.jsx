import React from "react";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <div className="card">
      <h1>About This Project</h1>
      <p>This is a React app to create wish list.</p>
      <p>Developer: Anmol Pattnayak</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}

export default AboutPage;