import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';

export default function ProductList() {
    const [productList, setProductList] = useState<any[]>([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://fakestoreapi.com/products/');
            setProductList(result.data);
            console.log(result.data)
            setIsLoaded(true)

        };
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
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
