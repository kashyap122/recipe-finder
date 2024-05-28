import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "../Recipes/Recipes.css";
import { getRecipes } from "../../Services/api";
import Search from "../Search";
import RecipeList from "../RecipeList";


const Recipes = () => {
  const [searchedQuery,setSearchedQuery] = useState("Pizza");
  const [recipes,setRecipes] = useState([]); 
  
  useEffect(() => {
    getSearchedResult();
  },[searchedQuery])

  const  getSearchedResult = async  () => {
    let result = await getRecipes(searchedQuery);
    if(result && result.recipes){
      setRecipes(result.recipes);
    }
  }
  

  return (
    <>
      <div>
        <Navbar />
        <Search setSearchedQuery={setSearchedQuery}/>
        <RecipeList recipes={recipes} searchedQuery = {searchedQuery} />
      </div>
    </>
  );
};

export default Recipes;
