import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css"

function Checkout() {
    const [{ basket}] = useStateValue()
    return (
        <div className='checkout'>
            <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/prime/Shopping_Feb22/1500x250PCbanneFeb22.jpg" alt="" />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Basket is empty</h2>
                </div>
            ) : (
                <div>
                    <h2>Your Shopping Basket</h2>
                </div>
            )}
        </div>
    )
}

export default Checkout
