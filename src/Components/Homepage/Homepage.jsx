import React from "react";
import Navbar from "../Navbar/Navbar";
import "../Homepage/Homepage.css";
import { Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

import { Button } from "semantic-ui-react";
// import { BrowserRouter as Router } from "react-router-dom";

const Homepage = () => {
  const image = require("../Images/BGImage.png");
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="image-container">
        <img src={image} alt="" height="590px" width="1422px" />
        <div className="searchHeading">OUR RECIPES</div>
        <div className="searchRecipes">
          <Button className="searchRecipes" as={Link} to="/Recipes" color="blue">
            Search Recipes
          </Button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
