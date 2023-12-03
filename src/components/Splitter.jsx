import React from 'react'

const Splitter = () => {
    return (
        <div className={`flex flex-col px-8 lg:px-12 xl:px-20 py-16 xl:py-48 items-center text-center`}>
            <p className='text-4xl lg:text-5xl xl:text-6xl pb-4 font-medium font-clash'>
                Une idée, un projet ?
            </p>
            <div className='text-base md:text-lg lg:text-xl xl:text-2xl lg:w-1/2 py-8'>
                <p>Toutes mes prestations sont accompagnées d'un devis personnalisé en fonction de vos besoins et de votre budget !</p>
                <p>Quelque soit le challenge, je trouverai une solution adaptée.</p>
            </div>
            <button
                className='email-button w-64 xl:w-96 font-clash text-sm md:text-base lg:text-lg xl:text-xl ml-4 md:m-0 p-1 md:py-1 md:px-2 xl:py-2 xl:px-4 border-2 border-white rounded-lg cursor-pointer text-center hover:bg-gray-300/30 transition-all'
                onClick={() => window.open('mailto:charles.lapierre@infinite-lab.com')}
            >
                Contactez-moi !
            </button>
        </div>
    )
}

export default Splitter

