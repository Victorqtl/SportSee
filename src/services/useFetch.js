import { useState, useEffect } from "react";
import fetchData from "./apiService";


export default function useFetch(id, type) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchData(parseInt(id), type);
                setData(data);
                setLoading(false)
            }
            catch {
                setError(true)
            }
        };
        getData();
    }, []);

    return { data, loading, error }
}