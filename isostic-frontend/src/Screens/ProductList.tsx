import React, { useEffect, useState } from 'react';
import Product from './Product';

export default function ProductList() {
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
            <div className='flex flex-col align-center'>
                <h1 className='text-center text-3xl my-6'>Product List</h1>
                <div className=' mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        productList.map(product => (
                            < Product key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>

        );
    }
}
