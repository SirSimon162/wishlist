import React from "react";
import Logo from "../images/wishlist.png";

function header() {
  const headerStyles = {
    display: "flex",
  };

  return (
    <header>
      <div className="container" style={headerStyles}>
        <img src={Logo} alt="logo" />
        <h2>WishList</h2>
      </div>
    </header>
  );
}

export default header;
