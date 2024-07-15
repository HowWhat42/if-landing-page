import React from 'react'
import AirRentalLogo from '../assets/images/air-rental_logo.webp'
import TeasquareLogo from '../assets/images/teasquare.png'
import FigueLogo from '../assets/images/figue_logo.png'

const Opinion = () => {
    return (
        <div className='flex flex-col xl:flex-row justify-center gap-16 py-8 md:py-16 xl:py-48 px-8 lg:px-12 xl:px-20'>
            <div className='bg-white/20 w-full xl:w-1/3 h-[300px] p-4 rounded-lg flex flex-col justify-between'>
                <p>
                    D'un professionnalisme irréprochable ! <br />
                    A l'écoute sur l'ensemble de notre projet. <br />
                    Pédagogique dans l'explication des possibles. <br />
                    Une vraie réussite dans notre collaboration. <br />
                    Merci !
                </p>
                <p className='pt-4 not-italic font-clash'>Jules</p>
                <div className='flex items-baseline justify-between'>
                    <p className='uppercase text-white/50'>Air Rental</p>
                    <img className='h-20 mr-4' src={AirRentalLogo} alt='AirRental Logo' />
                </div>
            </div>
            <div className='bg-white/20 w-full xl:w-1/3 h-[300px] p-4 rounded-lg flex flex-col justify-between'>
                <p>

                    Excellente prestation de Charles. <br />
                    En prime d'un travail de qualité, Charles a une compréhension fine des projets et une communication aisée qui permet une collaboration à la hauteur de nos espérances. <br />
                    Je recommande sans hésiter !
                </p>
                <p className='pt-4 not-italic font-clash'>Ludovic</p>
                <div className='flex items-baseline justify-between'>
                    <a href="https://www.figue.io/" target="_blank" rel="noreferrer"><p className='uppercase text-white/50 hover:underline'>Figue.io</p></a>
                    <img className='h-20 mr-4' src={FigueLogo} alt='Figue.io Logo' />
                </div>
            </div>
            <div className='bg-white/20 w-full xl:w-1/3 h-[300px] p-4 rounded-lg flex flex-col justify-between'>
                <p>
                    Sa maîtrise technique est impressionnante, et il excelle également dans la gestion de l'hébergement, offrant un accompagnement de qualité.{' '}
                    <br />
                    Professionnel et compétent, il est hautement recommandé pour tout projet de développement, offrant une solution complète et fiable.
                </p>
                <p className='pt-4 not-italic font-clash'>Killian</p>
                <div className='flex items-baseline justify-between'>
                    <p className='uppercase text-white/50'>Teasquare</p>
                    <img className='h-20 mr-4' src={TeasquareLogo} alt='Teasquare Logo' />
                </div>
            </div>
        </div>
    )
}

export default Opinion

