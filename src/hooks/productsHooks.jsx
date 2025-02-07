import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [popular, setPopular] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(true);
    let baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

    const getProducts = async () => {
        setIsFetching(true);
        await axios.get(`${baseURL}/products/fetch-all.php`)
        .then((res) => {
            setProducts(res.data.products);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setIsFetching(false);
        })
    }

    
    const getFeatProducts = async () => {
        setIsFetching(true);
        await axios.get(`${baseURL}/products/fetch-all.php`)
        .then((res) => {
            setFeatured(res.data.products);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setIsFetching(false);
        })
    }

    useEffect(() => {
        getProducts();
        getFeatProducts()
    }, [])

    return { products, featured, popular, isFetching, error }

}