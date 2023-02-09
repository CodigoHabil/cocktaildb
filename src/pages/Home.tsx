import { useContext } from "react";
import Hero from "../components/Hero/Hero";
import { SearchInput } from "../components/Input";
import { Loader } from "../components/Loader";
import Layout from "../layouts";
import { Container } from "../components/general";
import { GlobalContext } from "../context/GlobalContext";
import { ResultTitle } from "../components/Title";
import { Card, Grid } from "../components/GridCards";
import { DrinkContext } from "../context/DrinksContext";

const Home = () => {
  const { search } = useContext(GlobalContext);
  const { searchCockails, setInitial } = useContext(DrinkContext);
  const { cocktails, loading } = searchCockails(search.value);

  const generateCards = (elements: any) => {
    return elements?.drinks?.map((drink: any) => {
      return (
        <Card key={drink.idDrink} id={drink.idDrink} title={drink.strDrink} img={drink.strDrinkThumb}
          cat={drink.strCategory}
          ingridient={drink.strIngredient1}
        />
      );
    });
  };

  const drinksElements = search.value.length < 3
                      ? generateCards(setInitial.cocktails)
                      : generateCards(cocktails);
                      
  const title = search.value.length < 3 ? "Popular drinks" : "Search results";

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
        <ResultTitle>{title}</ResultTitle>

        {drinksElements?.length === 0 || (drinksElements == null && <div>No results</div>)}

        {loading ? (
          <div className="m-t-8">
            <Loader />
          </div>
        ) : (
          <Grid>{drinksElements}</Grid>
        )}
      </Container>
    </Layout>
  );
};

export default Home;
