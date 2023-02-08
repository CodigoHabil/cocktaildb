import { useContext, useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import { SearchInput } from "../components/Input";
import { Loader } from "../components/Loader";
import Layout from "../layouts";
import { Container } from "../components/general";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import { ResultTitle } from "../components/Title";
import { Card, Grid } from "../components/GridCards";

/*
  Todo:
  [x] Add drink List 
  [x] Add SearchInput functionality
  [x] Print drinks
  [x] Add Loader
  [x] Clean form every time render 
*/

const Home = () => {
  const { user, data, isLoading, search, setCurrentPost } =
    useContext(GlobalContext);
  const drinks = data.drinks;

  const dinks = drinks?.map((drink: any) => {
    return (
      <Card
        key={drink.idDrink}
        id={drink.idDrink}
        title={drink.strDrink}
        img={drink.strDrinkThumb}
        cat={drink.strCategory}
        ingridient={drink.strIngredient1}
      />
    );
    //return <div key={drink.idDrink}>Name: <Link onClick={() => setCurrentPost(drink)} to={`cocktails/${drink.idDrink}`}> {drink.strDrink} </Link></div>;
  });

  return (
    <Layout>
      <Hero>
        <SearchInput
          type="text"
          value={search.value}
          onChange={search.onChange}
        />
      </Hero>
      <Container className="_80vh">
        {search.value.length < 3 ? (
          <ResultTitle>Popular drinks</ResultTitle>
        ) : (
          <ResultTitle>Search results</ResultTitle>
        )}

        {drinks?.length === 0 || (drinks == null && <div>No results</div>)}

        {isLoading ? (
          <div className="m-t-8">
            <Loader />
          </div>
        ) : (
          <Grid>{dinks}</Grid>
        )}
      </Container>
    </Layout>
  );
};

export default Home;
