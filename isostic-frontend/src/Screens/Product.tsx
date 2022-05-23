import React from 'react';
import { MdAddShoppingCart } from "react-icons/md";



export default function Product(props) {

    const style = { color: "rgb(0, 94, 255)", fontSize: "1.8rem" };

    let { id, title, category, description, image, price } = props.product;

    return (
        <article className="product-article">
            <h1>{title}</h1>
            <p className='product-category'>{category}</p>
            <p>{description}</p>
            <img src={image} alt="Product Image" />
            <a href={`/product/${id}`}>Item Description</a>
            <div className='shopping-cart'>
                <span>
                    <p>Add to cart</p>
                    <MdAddShoppingCart style={style} />
                </span>
                <p className='price-tag'>{price}</p>
            </div>
        </article>
    )
}
