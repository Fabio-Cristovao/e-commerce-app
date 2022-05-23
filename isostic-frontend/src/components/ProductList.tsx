import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';

export default function ProductList(): React.Component {
    const [productList, setProductList] = useState([]);

    const getProducts = async () => {
        const { data } = await axios.get(
            'https://fakestoreapi.com/products?limit=5'
        );
        console.log(data);
        setProductList(data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className='product-list-container'>
            <h1>Product List</h1>
            <Product />
        </div>
    );
}
