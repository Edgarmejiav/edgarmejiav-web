/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            container: {
                center: true,
            },
            animation: {
                'moving-background': 'moving-background 5s ease-in-out',
                "pulse-slow": "pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)"
            },
            keyframes: {
                'moving-background': {
                    '0%': {
                        transform: 'translateY(0)',
                        opacity: 0
                    },
                    '66%': {
                        opacity: 0.4
                    },
                    '100%': {
                        transform: 'translateY(-150px)',
                        opacity: 0
                    }
                }
            },
        },
    },
    plugins: [],
}
