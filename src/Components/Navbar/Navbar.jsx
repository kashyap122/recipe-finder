import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Navbar/Navbar.css";
const Navbar = () => {
  const image = require("../Images/ChefLogo.png");
  return (
    <>
      <div className="container-fluid  mainNavbar">
        <div className="row">
          <img
            src={image}
            className="col-md-1"
            alt=""
            height="60px"
            width="50px"
          />

          <div className="col-md-1 heading">
            <a href="/">Home</a>
          </div>

          <div className="col-md-1 heading">
            <a href="/Recipes">Recipes</a>
          </div>
          <div className="col-md-3 heading"></div>

          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
