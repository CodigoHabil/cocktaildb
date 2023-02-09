import { createContext, useEffect, useReducer, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const DrinkContext = createContext(
  {
    drinkState:{error: false, cocktails: [], cocktail: {}},
    setCocktail: (id : string) => {},
    findCocktailsByLetter: (letter : string) => {},
    findCockail: (id : string) => {},



    getDrinkInfo: (id : string) => {},
    getDrinksByLetter: (letter : string) => {},
  }
);

const drinkReducer = (state: any, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case "FETCH_DRINKS_BY_INGREDIENT":
      return {...state, cocktails: action.payload}
    case "FETCH_SINGLE_DRINK":
      return {...state, cocktail: action.payload}
    case "FETCH_ERROR":
      return {...state, error: action.payload}
    default:
      return state;
  } 
}

const URL = import.meta.env.VITE_API_URL;

export const DrinkContextWrapper = ({ children }) => {
  const[status, setStatus] = useState("initial");
  const [drinkState, dispatch] = useReducer(drinkReducer, {hello: "world", error: false, cocktails:[]});

  const setCocktail = async (id : string) => {
    console.log(`${URL}/lookup.php?i=${id}`)
    try {
      const resp = await fetch(`${URL}/lookup.php?i=${id}`);
      const data = await resp.json()
      dispatch({type: "FETCH_SINGLE_DRINK", payload: data.drinks[0]})
    } catch (e) {
      console.log(e)
      dispatch({type: "FETCH_ERROR", payload: true})
    }
  }

  const findCocktailsByLetter = async (letter : string) => {
    try {
      const resp = await fetch(`${URL}/search.php?f=${letter}`);
      const data = await resp.json()
      dispatch({type: "FETCH_DRINKS_BY_INGREDIENT", payload: data.drinks})
    } catch (e) {
      console.log(e)
      dispatch({type: "FETCH_ERROR", payload: true})
    }
  }

  const findCockail = async (word : string) => {
    try {
      const resp = await fetch(`${URL}/search.php?s=${word}`);
      const data = await resp.json()
      dispatch({type: "FETCH_DRINKS_BY_INGREDIENT", payload: data.drinks})
    } catch (e) {
      console.log(e)
      dispatch({type: "FETCH_ERROR", payload: true})
    }
  }

  function getDrinksByLetter(letter : string) {
    const [cocktails, loading, error ] = useFetch(`${URL}/search.php?f=${letter}`, letter);
    return { cocktails, loading, error };
  }


  function getDrinkInfo(id : string){
    const [cocktail, loading, error ] = useFetch(`${URL}/lookup.php?i=${id}`, id);
    return { cocktail, loading, error };
  }

  return (
    <DrinkContext.Provider value={{ drinkState, setCocktail, findCocktailsByLetter, getDrinkInfo, getDrinksByLetter }}>
      {children}
    </DrinkContext.Provider>
  );
};