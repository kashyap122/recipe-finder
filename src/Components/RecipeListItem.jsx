import React from "react";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const RecipeListItem = ({recipe}) => {
    console.log(recipe.image_url);
    return(
        <Card>
            <img src={recipe.image_url} alt="thumbnail" style={{ height: 200 ,width:200}} />
            <Card.Content>
                <Card.Header content={recipe.title}/>
                <Card.Description />
            </Card.Content>
            <Card.Content>
                <Button
                as={Link}
                to={`/Recipes/${recipe.recipe_id}`}
                content="Details"
                color="blue"
                size="tiny"
                />
                <Button
                href={recipe.source_url}
                target= "_blank"
                content="Recipe URL"
                color="green"
                size="tiny" 
                />
            </Card.Content>
        </Card>
    );
}
export default RecipeListItem;