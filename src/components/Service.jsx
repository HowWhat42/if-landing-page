const Service = ({ title, texts, img, color, id }) => {
    const isEven = id % 2 == 0

    return (
        <div className='flex flex-col py-8 md:py-16 xl:py-48 px-8 lg:px-12 xl:px-20'>
            <p className={`font-clash text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-8 ${isEven ? 'text-right' : ''}`}>{title}</p>
            <div className={`flex flex-col lg:flex-row justify-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                <img src={img} alt='illustration' className={`m-w-4xl lg:w-2/5`} />
                <div className={`flex flex-col justify-between ${isEven ? 'items-start' : 'items-end'}`}>
                    <div className='wireframes flex'>
                        <p
                            className='font-clash text-9xl lg:text-10xl xl:text-230 font-bold text-transparent wireframe'
                            style={{ WebkitTextStrokeColor: color, WebkitTextStrokeWidth: '0.2rem' }}
                        >
                            0{id}
                        </p>
                        <p
                            className='font-clash text-9xl invisible lg:visible lg:text-10xl xl:text-230 font-bold text-transparent wireframe absolute opacity-60 blur-[1px]'
                            style={{ WebkitTextStrokeColor: color, WebkitTextStrokeWidth: '0.2rem' }}
                        >
                            0{id}
                        </p>
                        <p
                            className='font-clash text-9xl invisible lg:visible lg:text-10xl xl:text-230 font-bold text-transparent wireframe absolute opacity-40 blur-[2px]'
                            style={{ WebkitTextStrokeColor: color, WebkitTextStrokeWidth: '0.2rem' }}
                        >
                            0{id}
                        </p>
                    </div>
                    <div className={`flex lg:w-2/3 flex-col text-sm md:text-lg lg:text-xl font-medium`}>
                        {texts.map((text, i) => (
                            <p key={i}>{text}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
