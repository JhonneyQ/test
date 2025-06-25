import React from 'react'
import "./index.scss"

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='all'>
                    <h2>Floral Studio</h2>
                    <nav>
                        <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>

                        <li><a href="">Portfolio</a></li>

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