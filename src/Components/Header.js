import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
    return (
        <React.Fragment>
            <nav className='header'>
        {/* Logo on the left */}

            <Link to={'/'}>
            <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="ima no loaded" />

            </Link>
    
        {/* Search box */}

        <div className='header__search' >

        <input type="text" className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />

        </div>


        {/* Pages Links */}

        <div className='header__nav' >

            {/* 1st Link */}
        <Link to={'/login'} className='header__link'>
            <div className='header__option'>
                <span className='header__optionLineOne' >Hello</span>
                <span className='header__optionLineTwo' >Sign In</span>
            </div>
        </Link>
            {/* 2nd Link */}
            <Link to={'/'} className='header__link'>
            <div className='header__option'>
                <span className='header__optionLineOne' >Returns</span>
                <span className='header__optionLineTwo' >& Orders</span>
            </div>
        </Link>
        
            {/* 3rd Link */}
            <Link to={'/'} className='header__link'>
            <div className='header__option'>
                <span className='header__optionLineOne' >Your</span>
                <span className='header__optionLineTwo' >Prime</span>
            </div>
        </Link>
        

        {/* Cart Icon with a Number */}

            {/* 4th Link */}
            <Link to={'/checkout'} className='header__link'>
                <div className='header__optionBasket'>
                    {/* Shopping basket icon */}
                    <ShoppingBasketIcon />
                    {/* Number of Items in the basket */}
                    <span className='header__optionLineTwo header__optionBasketCount'>0</span>
                </div>
            </Link>

        </div>
    
    </nav>

    {/* <h1>Home Page</h1> */}
    
    </React.Fragment>
    )
}

export default Header
