import React, { useEffect, useState } from 'react';
import Product from './Product';

export default function ProductList(): React.Component {
    const [productList, setProductList] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProductList(result)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (

            <>
                <h1 className='product-container-title'>Product List</h1>
                <div className='product-container'>
                    {
                        productList.map(product => (
                            < Product key={product.id} product={product} />
                        ))
                    }
                </div>
            </>

        );
    }

}
