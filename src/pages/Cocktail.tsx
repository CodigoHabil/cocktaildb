import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import LayoutSinglePage from "../layouts/LayoutSinglePage";
import {Article} from "../components/Article";
import BackButton from "../components/BackButton/BackButton";

const Cocktail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getCurrentCocktail, currentPost } = useContext(GlobalContext);
  
  const [drink, setDrink] = useState({});
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (currentPost == undefined || currentPost?.idDrink != id) {
      updateData();
    }
    setDrink(currentPost);
  }, [id]);

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
