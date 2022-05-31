import React from 'react'
import './Input.scss'

const Input = ({ type, name, placeholder }) => {
    return (
        <div className='if-input'>
            <input name={name} type={type} required />
            <label for={name} >{placeholder}</label>
            <div className='if-input__bar'></div>
        </div>
    )
}

export default Input