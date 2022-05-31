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
                <a href='#about'>A Propos</a>
                <a href='#services'>Services</a>
                <a href='#contact'>Contact</a>
            </div>
            <div className='if-button'>
                <a>Connexion</a>
            </div>
        </div>
    )
}

export default Navbar