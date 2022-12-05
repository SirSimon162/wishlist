import React from "react";

function Status({ version }) {
  return <div className={`status-indicator status-indicator-${version}`}></div>;
}

export default Status;
