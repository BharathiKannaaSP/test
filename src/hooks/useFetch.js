import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url, retry = 3) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true
        const fetchData = async (attempt) => {
            setLoading(true)
            try {
                const res = await fetch(url)
                const data = await res.json()
                if (mounted) {
                    setData(prev => [...prev, ...data.products]);
                }
            } catch (error) {
                if (attempt < retry) {
                    fetchData(attempt + 1)
                } else {
                    if (mounted) {
                        setError(err)
                    }
                }
            } finally {
                setLoading(false)
            }
        }
        fetchData(0)
        return () => {
            mounted = false;
        }
    }, [url])
    return { data, error, loading }
}

