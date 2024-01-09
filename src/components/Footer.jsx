import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center text-center pb-2 pt-4 xl:pt-8 xl:pb-4'>
      <p className='font-clash text-sm lg:text-base'>Infinite Lab © Tous droits réservés | {new Date().getFullYear()} </p>
    </div>
  )
}

export default Footer
