import React from 'react'
import './Service.scss'

const Service = ({ title, text, img, color, id }) => {
    const isEven = id % 2 == 0
    return (
        <div className={isEven ? 'reverse if-service' : 'if-service'}>
            <p className='if-service__title'>{title}</p>
            <div className='if-service__container'>
                <img src={img} />
                <div className='if-service__content'>
                    <p className='if-service__id' style={{ WebkitTextStrokeColor: color }}>0{id}</p>
                    <p className='if-service__text'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Service