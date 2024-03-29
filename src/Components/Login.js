import React from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
// import firebase from './firebase'

function Login() { 

    const login = (event) => {
        event.preventDefault() 
    }
    
    const register = (event) => {
        event.preventDefault() 
    }
    return (
    <div className='login'>
        <Link to='/'>
            <img className='login__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'
                alt=''
                />
        </Link>

        <div className='login__container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type='email'/>
                <h5>Password</h5>
                <input type='password' />
                <button to={'/'} onClick={login} type='submit' className='login__signInButton'>Sign In</button>
            </form>
            <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>

            <button onClick={register} className='login__registerButton'>Create Your Amazon Account</button>
        </div>
        
    </div>
    )
}

export default Login