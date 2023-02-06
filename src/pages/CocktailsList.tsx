import Layout from "../layouts";
import { GlobalContext } from "../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { Container } from "../components/general";
import { Link } from "react-router-dom";
import { IndexSearcher } from "../components/IndexSearcher";

const CocktailsList = () => {
  const { setCurrentPost } = useContext(GlobalContext);
  const [letter, setLetter] = useState<string>('A');
  const [drinks, setDrinks] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    fetchDrinks();
  },[letter])

  async function fetchDrinks() {
    let url = `https://api.allorigins.win/raw?url=http://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
    const response = await fetch(url);
    const data = await response.json();
    setDrinks(data.drinks)
    setIsLoading(false)
  }

  console.log(drinks)
  return (
    <Layout>
      <Container className="page">
        <IndexSearcher letter={letter} setLetter={setLetter}/>
        {isLoading ? (
          <div>Loading...           
            <span className="loader"></span>
          </div>
        ) : (
          drinks?.map((drink: any) => {
            return <div key={drink.idDrink}>Name: <Link onClick={() => setCurrentPost(drink)} to={`${drink.idDrink}`}> {drink.strDrink} </Link></div>;
          })
        )}
        {drinks?.length === 0 || drinks == null && <div>No results</div>}
      </Container>
    </Layout>
  );
};

export default CocktailsList;
function getFetch(url: string) {
  throw new Error("Function not implemented.");
}

