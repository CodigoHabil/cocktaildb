import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import useInput from "../hooks/useInput";
import initData from "../data/popular.json";

const initial = {
  cocktails: [],
  user: "default",
};

const initGlobalState = {
  data: null,
  isLoading: true,
  hasError: null,
};

const ContextWrapper = (props: any) => {
  const search = useInput({ type: "text", defaultValue: "" });
  const [state, setState] = useState(initGlobalState);

  useEffect(() => {
    if(search.value === '' || search.value?.length < 3) {
      setinitial();
      return;
    }

    let url = `https://api.allorigins.win/raw?url=http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search.value}`;
    getFetch(url).catch((err) => {
      console.log(err);
    });
  }, [search.value]);
  //const {data, hasError, isLoading} = useFetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')

  const setinitial = () => {
    setState({
      data: initData,
      isLoading: false,
      hasError: null,
    });
  };

  const getFetch = async (url: string) => {
    setState({...state, isLoading:true})
    const resp = await fetch(url);
    const data = await resp.json().catch((err) => {
      console.log(err);
    });

    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...initial,
        data: state.data ? state.data : {},
        isLoading: state.isLoading,
        search: { value: search.value, onChange: search.onChange },
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
