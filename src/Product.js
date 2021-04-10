import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({title, price, image, rating, id}) {
    const [ { basket}, dispatch ] = useStateValue()

    
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating
            }
        })

    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                       <p>⭐</p>  
                    ))}    
                    
                </div>
            </div>
            
            <img src={image}/>
                {/* <img src="https://image-na.ssl
                -image-amazon.com/image/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg" alt=""/> */}
                <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product;
