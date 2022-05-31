import React from 'react'
import './Hero.scss'

const Hero = () => {
    return (
        <div className='if-hero'>
            <p className='if-hero__topline'>Lancez votre projet avec</p>
            <p className='if-hero__main'>Infinite Lab</p>
            <p className='if-hero__bottomline'>Entreprise de développement informatique</p>
            <a className='if-button' href='#about'>En savoir plus</a>
        </div>
    )
}

export default Hero