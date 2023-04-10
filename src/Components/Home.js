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
        title='Apple 2021 10.2-inch iPad (Wi-Fi, 64GB) - Space Gray (9th Generation)'
        price={799.00}
        rating={5}
        image='https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL320_.jpg'
        />
        <Product 
        id='98765432'
        title='Lenovo 2022 Newest Ideapad 3 Laptop, 15.6" HD Touchscreen, 11th Gen Intel Core i3-1115G4 Processor, 8GB DDR4 RAM'
        price={300.}
        rating={4}
        image='https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_UL320_.jpg'
        />
        </div>

        <div className='home__row'>
        <Product 
        id='87654321'
        title='iConnect by Timex Active Smartwatch with Heart Rate, Notifications & Activity Tracking 37mm – Black with Black Resin Strap'
        price={25.50}
        rating={4}
        image='https://m.media-amazon.com/images/I/61ghDjhS8vL._AC_UY218_.jpg'
        />
        <Product 
        id='23456789'
        title='Degree Men Antiperspirant Deodorant 48-Hour Odor Protection Cool Rush Men'
        price={11.90}
        rating={4}
        image='https://m.media-amazon.com/images/I/81yam08hJVL._AC_UL320_.jpg'
        />
        <Product 
        id='56789012'
        title='GearLight LED Flashlight 2pack Bright, Zoomable Tactical Flashlights with High Lumens and 5 Modes for Emergency and Outdoor Use, Camping Accessories'
        price={30.50}
        rating={3}
        image='https://m.media-amazon.com/images/I/81FQCYRrv6L._AC_UL320_.jpg'
        />
        </div>

        <div className='home__row'>
        <Product 
        id='34567890'
        title='The Lords of Alekka: An Epic Fantasy Adventure (Books 1-3)'
        price={9.50}
        rating={5}
        image='https://m.media-amazon.com/images/I/91IFYwctaDL._AC_UL320_.jpg'
        />
        
        </div>
        


    </div>
    </React.Fragment>
    )
}

export default Home
