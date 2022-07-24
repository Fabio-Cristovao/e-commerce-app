import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [productDetail, setProductDetail]: any[] = useState({})
    const params = useParams();
    console.log(params.title);
    const { title } = params;

    const fetchDetails = () => {
        fetch(`https://fakestoreapi.com/products/${title}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProductDetail(result)
                },
                (error: any) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        if (error) {
            return <div>Error: {error}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return console.log(productDetail);
        }
    }

    useEffect(() => {
        fetchDetails();
    }, [title])

    return (
        <h1>{productDetail.title}</h1>
    )

}
