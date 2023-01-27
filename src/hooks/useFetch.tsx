import { useEffect, useState } from "react";

export const useFetch = ( url:string, update:any) => {
    const [state, setState] = useState({
        data: [],
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        if(typeof update == 'function') {
            update({
                data,
                isLoading: false,
                hasError: null,
            });
        }

        setState({
            data,
            isLoading: false,
            hasError: null,
        });
    }

    useEffect(() => {
        getFetch();
    }, [url])
    
    return {
        data:      [...state.data],
        isLoading: state.isLoading,
        hasError:  state.hasError,
    };
}