import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <React.Fragment >
    <div className='home'>
        <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

        {/* Product id, title, price, rating, image */}
        <div className='home__row'>
        <Product 
        id='12321341'
        title='The Lean Startup: How Constant Inovation Creates Radically Successful Business Paperback'
        price={15.50}
        rating={5}
        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'
        />
        </div>

        


    </div>
    </React.Fragment>
    )
}

export default Home
