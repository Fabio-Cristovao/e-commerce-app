import React from 'react'

export default function Product(props) {

    let { title, category, description, image, price } = props.product;

    return (
        <article className="product-article">
            <h1>{title}</h1>
            <p className='product-category'>{category}</p>
            <p>{description}</p>
            <img src={image} alt="Product Image" />
            <p className='price-tag'>{price}</p>
        </article>
    )
}
