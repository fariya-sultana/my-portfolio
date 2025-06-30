/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'gradient-x': 'gradient-x 15s ease infinite',
                'gradient-y': 'gradient-y 15s ease infinite',
                'gradient-xy': 'gradient-xy 15s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'gradient-y': {
                    '0%, 100%': {
                        transform: 'translateY(0%)',
                    },
                    '50%': {
                        transform: 'translateY(-100%)',
                    },
                },
                'gradient-x': {
                    '0%, 100%': {
                        transform: 'translateX(0%)',
                    },
                    '50%': {
                        transform: 'translateX(-100%)',
                    },
                },
                'gradient-xy': {
                    '0%, 100%': {
                        transform: 'translate(0%, 0%)',
                    },
                    '25%': {
                        transform: 'translate(-100%, 0%)',
                    },
                    '50%': {
                        transform: 'translate(-100%, -100%)',
                    },
                    '75%': {
                        transform: 'translate(0%, -100%)',
                    },
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0px)',
                    },
                    '50%': {
                        transform: 'translateY(-20px)',
                    },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}