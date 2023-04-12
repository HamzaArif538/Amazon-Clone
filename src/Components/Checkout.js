import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import "./Checkout.css"
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket}] = useStateValue()
    return (
        <div className='checkout'>
            <div className='checkout__left'>
            <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/prime/Shopping_Feb22/1500x250PCbanneFeb22.jpg" alt="" />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Basket is empty</h2>
                    <p>Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more. </p>
                </div>
            ) : (
                <div>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>
                    {/* List out all of the checkout components */}
                    {basket.map(item => (
                        <CheckoutProduct
                            id= {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                            
                    ))}
                </div>
            )}
            </div>
            {basket.length > 0 && (
                <div className='checkout__right'>
                    <Subtotal />
                    
                </div>
            )}
        </div>
    )
}

export default Checkout
