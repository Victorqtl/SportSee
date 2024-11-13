import { useState, useEffect } from "react";
import fetchData from "./apiService";

/**
 * @function useFetch
 * @description Hook personnalisé pour récupérer les données
 * @param {string} id - ID de l'utilisateur
 * @param {string} type - Type de données
 * @returns {{data: Object|null, loading: boolean, error: boolean}} État du fetch
 */
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