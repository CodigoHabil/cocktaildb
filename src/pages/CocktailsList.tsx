import Layout from "../layouts";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import SearchInput from "../components/Input/SearchInput";
import { Container } from "../components/general";
import { Link } from "react-router-dom";

const CocktailsList = () => {
  const { user, data, isLoading, search, setCurrentPost } = useContext(GlobalContext);
  const drinks = data.drinks
  //console.log("cocktails", data.drinks[0])
  console.log(drinks)
  return (
    <Layout>
      <Container className="page">
        <div>CocktailsList</div>
        <SearchInput
          type={search.value}
          value={search.value}
          onChange={search.onChange}
        />
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
