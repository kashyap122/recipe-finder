import React, { useState } from "react";
import { Grid, Form, Input } from "semantic-ui-react";
import "./Recipes/Recipes.css";

const Search = ({ setSearchedQuery }) => {
  const [value, setValue] = useState("");
  const onFormSubmit = () => {
    setSearchedQuery(value);
  };
  return (
    <Grid columns={2} textAlign="center" className="search-box">
      <Grid.Column>
        <h2 className="search-heading">Search Recipes with Our Recipe</h2>
        <h4>Input Recipes Separeted by comma</h4>
        <Form action="" onSubmit={onFormSubmit()}>
          <Input
            icon={{ name: "search", circular: true, link: true }}
            color="blue"
            placeholder="potato,pizza,onion"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Search;
