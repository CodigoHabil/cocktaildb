import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Cocktail = () => {
  const { id } = useParams();
  const { getCurrentCocktail, currentPost } = useContext(GlobalContext);
  const [drink, setDrink] = useState({});
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPost == undefined || currentPost?.idDrink != id) {
      updateData();
    }
    setDrink(currentPost);
  }, [id]);

  const updateData = async () => {
    getCurrentCocktail(id).then((res:any) => {
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
      <div>Cocktail</div>
      <div>It works`{drink.strDrink}`</div>
    </>
  );
};

export default Cocktail;
