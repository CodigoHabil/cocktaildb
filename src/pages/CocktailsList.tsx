import Layout from "../layouts";
import { GlobalContext } from "../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { Container } from "../components/general";
import { Link } from "react-router-dom";
import { IndexSearcher } from "../components/IndexSearcher";
import { Item } from "../components/List";
import { Loader } from "../components/Loader";
import { DrinkContext } from "../context/DrinksContext";

const CocktailsList = () => {
  const { setCurrentPost } = useContext(GlobalContext);
  const [letter, setLetter] = useState<string>('A');
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const {findCocktailsByLetter, drinkState} = useContext(DrinkContext);
  const {cocktails, error} = drinkState

  useEffect(() => {
    setIsLoading(true)
    findCocktailsByLetter(letter)
    setIsLoading(false)
    return;
  },[letter])

  if(error) {
    return <div>Something went wrong</div>
  }

  return (
    <Layout>
      <Container className="page">
        <IndexSearcher letter={letter} setIsLoading={setIsLoading} setLetter={setLetter}/>
        {isLoading ? (
          <Loader />
        ) : (
          cocktails?.map((drink: any) => {
            return <Item key={drink.idDrink}>Drink: <Link onClick={() => setCurrentPost(drink)} to={`${drink.idDrink}`}> {drink.strDrink} </Link></Item>;
          })
        )}
        {cocktails?.length === 0 || cocktails == null && <div>No results</div>}

      </Container>
    </Layout>
  );
};

export default CocktailsList;
function getFetch(url: string) {
  throw new Error("Function not implemented.");
}

