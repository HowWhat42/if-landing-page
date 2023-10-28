import React from 'react'

const Input = ({ type, name, placeholder }) => {
    return (
        <div className='w-full mb-4'>
            <input
                className='bg-gray-300/20 text-sm md:text-base lg:text-lg text-white w-full border-white hover:border-purple-500 border-2 rounded-lg p-2'
                placeholder={placeholder}
                name={name}
                type={type}
                required
            />
        </div>
    )
}

export default Input
