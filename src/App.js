import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import RecipeDetails from "./Components/RecipeDetails";

import Homepage from "./Components/Homepage/Homepage";
import Recipes from "./Components/Recipes/Recipes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
      <Routes>
        <Route path="/Recipes" element={<Recipes />}></Route>
      </Routes>
      <Routes>
        <Route path="/Recipes/:recipeId" element={<RecipeDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
