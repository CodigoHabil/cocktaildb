import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LayoutSinglePage from "../layouts/LayoutSinglePage";
import {Article} from "../components/Article";
import { DrinkContext } from "../context/DrinksContext";

const Cocktail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {drinkState, setCocktail, findCocktailsByLetter} = useContext(DrinkContext);
  
  const { cocktail, error } = drinkState

  useEffect(() => {
    setCocktail(id)    
  },[id] );

  if (error) {
    navigate("/404");
  }

  if(cocktail == undefined){
    return <h1>Loading...</h1>
  }

  return (
    <>
      <LayoutSinglePage>
        <Article drink = {cocktail} />
      </LayoutSinglePage>
    </>
  );
};

export default Cocktail;
