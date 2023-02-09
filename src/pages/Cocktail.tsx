import { useContext } from "react";

import { useParams, useNavigate } from "react-router-dom";
import LayoutSinglePage from "../layouts/LayoutSinglePage";
import {Article} from "../components/Article";
import { DrinkContext } from "../context/DrinksContext";

const Cocktail = () => {
  const {getDrinkInfo, getDrinksByLetter} = useContext(DrinkContext);

  const { id } = useParams();
  const navigate = useNavigate();
  const { cocktail, error, loading } = getDrinkInfo(id);


  if (error) {
    navigate("/404");
  }

  if(loading){
    return (
      <>
        <LayoutSinglePage>
          <h1>Loading...</h1>
        </LayoutSinglePage>
      </>
    );
  } 

  if(cocktail.drinks){
    return (
      <>
        <LayoutSinglePage>
          <Article drink = {cocktail.drinks[0]} />
        </LayoutSinglePage>
      </>
    );
  }

};

export default Cocktail;