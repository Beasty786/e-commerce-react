import React from 'react';


//import styles
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem : {name , imageUrl , quantity , price}}) => {

    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src = {imageUrl} alt='item' />
        </div>

        <span className ='name'>{name}</span>
        <span className ='quantity'>{quantity}</span>
        <span className ='price'>{price}</span>
        <div className ='remove-button'>&#9987;</div>
        
    </div>
)}

export default CheckoutItem;