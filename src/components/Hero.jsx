import React from 'react'

const Hero = () => {
    return (
        <div className='font-clash h-screen flex flex-col justify-center items-center text-center'>
            <p className='text-xl md:text-3xl lg:text-4xl xl:text-5xl'>Lancez votre projet avec</p>
            <p className='tracking-wide text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-transparent my-4' style={{ WebkitTextStrokeWidth: '0.08rem', WebkitTextStrokeColor: '#FFF' }}>Infinite Lab</p>
            <p className='text-base md:text-lg lg:text-xl xl:text-2xl mb-4'>Entreprise de développement informatique</p>
        </div>
    )
}

export default Hero