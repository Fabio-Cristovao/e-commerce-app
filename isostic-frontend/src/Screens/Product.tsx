import React from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';



export default function Product(props) {

    const style = { color: "rgb(0, 94, 255)", fontSize: "1.8rem" };

    let { id, title, category, description, image, price } = props.product;

    return (
        <article className="product-article flex-wrap">
            <h1>{title}</h1>
            <img src={image} alt="Product Image" />
            <p>
                <Link to={`/products/${id}`}>
                    Item description
                </Link>
            </p>
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
