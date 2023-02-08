import { createContext, useReducer, useState } from "react";

export const DrinkContext = createContext(
  {
    status:"initial",
    udpate: (id) => {},
    setStatus: (id) => {},
    drinkState:{},
    dispatch: () => {},
    setCocktail: (id) => {}
  }
);

const drinkReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_DRINK":
      return {...state, ...action.payload}
    default:
      return state;
  } 
}


export const DrinkContextWrapper = ({ children }) => {
  const[status, setStatus] = useState("initial");
  const [drinkState, dispatch] = useReducer(drinkReducer, {hello: "world"});
    
  const setCocktail = async (id) => {
    try {
      setStatus("loading");
      const resp = await fetch(`https://api.allorigins.win/raw?url=http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await resp.json();
      dispatch({type: "FETCH_SINGLE_DRINK", payload: {cocktail: data.drinks[0]}})
      setStatus("success");
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <DrinkContext.Provider value={{ status, setStatus: setStatus, drinkState, dispatch, setCocktail }}>
      {children}
    </DrinkContext.Provider>
  );
};