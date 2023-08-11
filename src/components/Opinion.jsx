import React from 'react'
import AirRentalLogo from '../assets/images/air-rental_logo.webp'

const Opinion = () => {
    return (
        <div className='flex flex-col justify-between py-32 mx-8 lg:mx-12 xl:mx-16'>
            <p className='text-4xl lg:text-5xl xl:text-6xl font-medium font-clash mb-8'>&#060; Retours Clients /&#062;</p>
            <div className='text-sm md:text-base lg:text-lg xl:text-xl mb-16 font-medium italic'>
                <p>" D'un professionnalisme irréprochable !</p>
                <p>A l'écoute sur l'ensemble de notre projet. Pédagogique dans l'explication des possibles.</p>
                <p>C'est un grand plaisir de travailler avec Charles.</p>
                <p>Une vraie réussite dans notre collaboration.</p>
                <p>Merci ! "</p>
                <div className='flex items-center'>
                    <img className='h-20 mr-4' src={AirRentalLogo} alt='AirRental Logo' />
                    <p className='pt-4 not-italic font-clash'>Jules de Air Rental</p>
                </div>
            </div>
        </div>
    )
}

export default Opinion