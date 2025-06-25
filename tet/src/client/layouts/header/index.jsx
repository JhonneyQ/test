import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
import Home from '../../../pages/home'

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='all'>
                    <h2>Floral Studio</h2>
                    <nav>
                        <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="register">Register</Link></li>

                        <li><Link to="login">Login</Link></li>

                        <li><a href="">Pricing</a></li>
                        <li><a href="">Contacts</a></li>


                    </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header