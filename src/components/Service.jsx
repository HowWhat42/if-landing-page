import { useInView } from 'react-intersection-observer'

const Service = ({ title, texts, img, color, id }) => {
    const isEven = id % 2 == 0
    const { ref, inView } = useInView({ triggerOnce: true })

    return (
        <div ref={ref} className='flex flex-col py-8 md:py-16 xl:py-48 px-8 lg:px-12 xl:px-16'>
            <p className={`font-clash text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-8 ${isEven ? 'text-right' : ''} ${inView && isEven ? 'animate-slide-left' : inView ? 'animate-slide-right' : ''}`}>{title}</p>
            <div className={`flex flex-col lg:flex-row justify-between ${isEven ? 'lg:flex-row-reverse text-right' : ''}`}>
                <img src={img} alt='illustration' className={`m-w-4xl lg:w-1/2 ${inView && isEven ? 'animate-slide-right' : inView ? 'animate-slide-left' : ''}`} />
                <div className={`flex flex-col justify-between ${isEven ? 'items-start' : 'items-end'} ${inView && isEven ? 'animate-slide-left' : inView ? 'animate-slide-right' : ''}`}>
                    <p className='font-clash text-9xl lg:text-10xl xl:text-230 font-bold text-transparent' style={{ WebkitTextStrokeColor: color, WebkitTextStrokeWidth: '0.2rem' }}>0{id}</p>
                    <div className={`flex flex-col text-sm md:text-lg lg:text-xl font-medium ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>{texts.map((text, i) => <p key={i}>{text}</p>)}</div>
                </div>
            </div>
        </div>
    )
}

export default Service