import React from 'react'
import AirRentalLogo from '../assets/images/air-rental_logo.webp'

const Opinion = () => {
    return (
        <div className='flex flex-col xl:flex-row justify-center gap-16 py-8 md:py-16 xl:py-48 px-8 lg:px-12 xl:px-20'>
            <div className='bg-white/20 w-full xl:w-1/3 h-1/3 p-4 rounded-lg'>
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
            {/* <div className='bg-white/20 w-full xl:w-1/3 h-1/3 p-4 rounded-lg'>
                <p>
                    " D'un professionnalisme irréprochable ! <br />
                    A l'écoute sur l'ensemble de notre projet. Pédagogique dans l'explication des possibles. <br />
                    Une vraie réussite dans notre collaboration. <br />
                    Merci ! "
                </p>
                <p className='pt-4 not-italic font-clash'>Killian</p>
                <div className='flex items-baseline justify-between'>
                    <p className='uppercase text-white/50'>Teasquare</p>
                    <img className='h-20 mr-4' src={AirRentalLogo} alt='AirRental Logo' />
                </div>
            </div> */}
        </div>
    )
}

export default Opinion

