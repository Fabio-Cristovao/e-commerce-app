import React from 'react'

export default function Product(props) {

    let { title, category, description, image, price } = props.product;

    return (
        <div className="product-article">
            <h1>{title}</h1>
            <p>{category}</p>
            <p>{description}</p>
            <img src={image} alt="Product Image" />
            <p>{price}</p>
        </div>
    )
}
