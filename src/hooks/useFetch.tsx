import { useState, useEffect} from "react";

export const useFetch = (url : string, trigger : any) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url, { signal });
                const data = await response.json();
                setData(data);
                setIsLoading(false);
                setError(false);
            } catch (err: any) {
                if (err.name === "AbortError") {
                    console.log("Fetch aborted");
                } else {
                    setError(true);
                    setIsLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            abortController.abort();
        };
    },[trigger, url]);
    return [ data, isLoading, error ];
}