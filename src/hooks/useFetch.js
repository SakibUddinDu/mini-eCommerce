import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        setError(null); // Reset error when URL changes
        setLoading(true); // Set loading to true on each fetch start

        const fetchData = async() => {


            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`Error Status Code: ${res.status} ${res.statusText}`);
                }
                const result = await res.json();

                if (!ignore) {
                    // Only update state if component is still mounted
                    setData(result);
                    setError(null); // Clear any previous error on success
                }
            } catch (err) {
                if (!ignore) {
                    setError(err.message);
                    setData([]); // Clear previous data if an error occurs
                }
            } finally {
                if (!ignore) {
                    setLoading(false);
                }
            }
        };

        if (url) {
            fetchData();
        }

        return () => {
            ignore = true;
        };
    }, [url]);

    return { data, loading, error };
};

export default useFetch;