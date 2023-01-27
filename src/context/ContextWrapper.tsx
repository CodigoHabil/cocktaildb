import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import useInput from "../hooks/useInput";

const initial = {
  cocktails: [],
  user: "default",
};

const initGlobalState = {
  data: null,
  isLoading: true,
  hasError: null,
}

const ContextWrapper = (props : any) => {
  const search = useInput({type: "text", defaultValue: "Vodka"})
  const [state, setState] = useState(initGlobalState);

  useEffect(() => {
      let url = `www.thecocktaildb.com/api/json/v1/1/search.php?i=${search.value}`
      getFetch(url);
    }, [search.value])
  //const {data, hasError, isLoading} = useFetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')


  const getFetch = async (url : string) => {
    const resp = await fetch(url);
    const data = await resp.json();
    setState({
        data,
        isLoading: false,
        hasError: null,
    });
}

  return (
    <GlobalContext.Provider
      value={{
        ...initial,
        data: state.data ? state.data : {},
        isLoading: state.isLoading,
        search:{ value: search.value, onChange: search.onChange}

      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
