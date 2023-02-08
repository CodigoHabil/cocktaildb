import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import LayoutSinglePage from "../layouts/LayoutSinglePage";
import {Article} from "../components/Article";
import BackButton from "../components/BackButton/BackButton";
import { DrinkContext } from "../context/DrinksContext";


const Cocktail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getCurrentCocktail, currentPost } = useContext(GlobalContext);
  const {status, drinkState, setCocktail} = useContext(DrinkContext);
  
  const [drink, setDrink] = useState({});
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (currentPost == undefined || currentPost?.idDrink != id) {
      updateData();
    }
    setCocktail(id)
    setDrink(currentPost);
  }, [id]);


  console.log("drinkState", drinkState);
  console.log("drink", drink);



  const updateData = async () => {
    getCurrentCocktail(id).then((res: any) => {
      setDrink(res?.drinks[0]);
      if (res === undefined || res === null || res?.drinks === null) {
        setNotFound(true);
      }
    });
  };

  if (notFound) {
    navigate("/404");
  }


  return (
    <>
      <LayoutSinglePage>
        <Article drink = {drink} />
      </LayoutSinglePage>
    </>
  );
};

export default Cocktail;
