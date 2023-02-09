import Layout from "../layouts";
import { useContext, useEffect, useState } from "react";
import { Container } from "../components/general";
import { Link } from "react-router-dom";
import { IndexSearcher } from "../components/IndexSearcher";
import { Item } from "../components/List";
import { Loader } from "../components/Loader";
import { DrinkContext } from "../context/DrinksContext";

const CocktailsList = () => {
  const [letter, setLetter] = useState<string>('A');
  const { getDrinksByLetter } = useContext(DrinkContext);
  const response = getDrinksByLetter(letter);
  const {cocktails, loading, error} = response;

  const handleClick = (letter: string) => {
    setLetter(letter)
    console.log(letter)
  }

  return (
    <Layout>
      <Container className="page">
        <IndexSearcher letter={letter} setLetter={handleClick}/>
        { error && <div>Something went wrong</div> }        
        {loading ? (
          <Loader />
        ) : (
          cocktails?.drinks?.map((drink: any) => {
            return <Item key={drink.idDrink}>Drink: <Link to={`${drink.idDrink}`}> {drink.strDrink} </Link></Item>;
          })
        )}
        { cocktails?.drinks == null && <div>No results</div> }
      </Container>
    </Layout>
  );
};

export default CocktailsList;
function getFetch(url: string) {
  throw new Error("Function not implemented.");
}

