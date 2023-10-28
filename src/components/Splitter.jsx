import React from 'react'
import { useInView } from 'react-intersection-observer'

const Splitter = () => {
    const { ref, inView } = useInView({ triggerOnce: true })
    return (
        <div className={`flex flex-col px-8 lg:px-12 xl:px-20 py-8 md:py-16 xl:py-48  ${inView ? 'animate-fade-in' : ''}`}>
            <p ref={ref} className='text-4xl lg:text-5xl xl:text-6xl pb-4 font-medium font-clash'>&#060; Services /&#062;</p>
            <div className='text-base md:text-lg lg:text-xl xl:text-2xl lg:w-1/2'>
                <p>Infinite Lab vous propose une multitude de services pour assurer la continuité de votre projet.</p>
                <p>Toutes mes prestations sont accompagnées d'un devis personnalisé en fonction de vos besoins et de votre budget !</p>
                <p>Quelque soit le challenge, je trouverai une solution adaptée.</p>
            </div>
        </div>
    )
}

export default Splitter