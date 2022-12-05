import React from "react";

function Button({ children, isDisabled }) {
  return (
    <button className="btn" disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Button;
