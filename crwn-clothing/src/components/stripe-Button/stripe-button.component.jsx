import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


// import styles
import './stripe-button.styles.scss'




const StripeCheckoutButton = ({ price }) => {
    const pricecForStripe = price * 100;
    const publishablekey = 'pk_test_51I38KKCKwxahM1Wj3JgCCIPgqFV7w9cLCn8LWOZrEKjQeV7HcdmutZqpgCVGE8vcz65Czmb1o54HAzIg4UGdj7Oy00g4UVlBIB';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successfull');
    }

    return(
        <StripeCheckout 
            label= 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description ={`Your total is R${price}`}
            amount = {pricecForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripekey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;