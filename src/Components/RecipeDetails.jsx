import { useEffect, useState } from "react";
import { getRecipe } from "../Services/api";
import { useParams } from "react-router-dom";
import { Button, Grid, Image, Header, Segment, } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import "./Homepage/Homepage.css"

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();

  useEffect(() => {
    const getData = async () => {
      let result = await getRecipe(recipeId);
      if (result && result.recipe) {
        setRecipe(result.recipe);
      }
    };
    getData();
  }, [recipeId]);

  return Object.keys(recipe).length > 0 ? (
    <>
      <Navbar />
      <Grid container stackable columns={2}>
        <Grid.Column>
          <Button className="backToRecipe"
            as={Link}
            to="/Recipes"
            content="back to recipe list"
            color="yellow"
            style={{ marginBottom: 40 }}
          />
          <Image src={recipe.image_url} alt="thumbnail" />
        </Grid.Column>
        <Grid.Column>
          <Header size="medium">{recipe.title}</Header>
          <p>Provided By :{recipe.publisher}</p>
          <Button
            as={"a"}
            href = {recipe.publisher_url}
            target="_blank"
            content="publisher Webpage"
            color="blue"
          />
          <Button
            as={"a"}
            href = {recipe.source_url}
            target="_blank"
            content="Recipe URL"
            color="green"
          />
          <Header size="large" content="Ingredients" />
          <Segment.Group>
            {
                 recipe && recipe.ingredients.map(data => (
                    <Segment>
                        <h5>
                            {
                                data 
                            }
                        </h5>
                    </Segment>
                 ))
            }
          </Segment.Group>
        </Grid.Column>
      </Grid>
    </>
  ) : null;
};

export default RecipeDetails;
