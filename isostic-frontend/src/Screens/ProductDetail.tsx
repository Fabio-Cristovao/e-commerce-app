import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [productDetail, setProductDetail] = useState({})
    const { id } = useParams();
    console.log(id);

    const fetchDetails = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProductDetail(result)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return productDetail;
        }
    }

    useEffect(() => {
        fetchDetails();
    }, [id])


    return (
        console.log(productDetail)
    )

}
