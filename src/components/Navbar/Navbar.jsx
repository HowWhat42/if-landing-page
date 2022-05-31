import React from 'react'
import './Navbar.scss'
import Logo from '../../assets/images/logo.svg'

const Navbar = () => {
    return (
        <div className='if-navbar'>
            <div>
                <img src={Logo} />
            </div>
            <div className='if-navbar__ctas'>
                <a>A Propos</a>
                <a>Services</a>
                <a>Contact</a>
            </div>
            <div className='if-button'>
                <a>Connexion</a>
            </div>
        </div>
    )
}

export default Navbar