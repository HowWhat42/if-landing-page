/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            visibility: ['parent'],
            fontFamily: {
                clash: ['Clash Display'],
                work: ['Work Sans'],
            },
            fontSize: {
                230: '230px',
                '10xl': '9rem',
            },
            backgroundImage: {
                'main-background': "url('./assets/images/bg.webp')",
            },
            height: {
                '50vh': '50vh',
            },
            animation: {
                'fade-in': 'fade-in 0.7s ease-in-out',
            },
            keyframes: {
                'fade-in': {
                    from: { opacity: 0, filter: 'blur(5px)', transform: 'translateY(-30%)' },
                    to: { opacity: 1, filter: 'blur(0)', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}

