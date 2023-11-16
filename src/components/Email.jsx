import React from 'react'

const Email = ({ name, message, email }) => {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <p>{message}</p>
        </div>
    )
}

export default Email
