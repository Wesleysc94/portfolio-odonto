/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: '#121212',
                darkBase: '#1A1A1A',
                gold: {
                    DEFAULT: '#D4AF37',
                    light: '#F3E5AB'
                },
                teal: {
                    DEFAULT: '#0F766E',
                    light: '#14B8A6'
                }
            },
            fontFamily: {
                sans: ['Outfit', 'Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            keyframes: {
                shine: {
                    '100%': { transform: 'translateX(400%) skewX(-12deg)' }
                },
                pulseGlow: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
                    '50%': { transform: 'scale(1.05)', opacity: '1' }
                }
            },
            animation: {
                shine: 'shine 1.5s ease-in-out infinite',
                pulseGlow: 'pulseGlow 3s ease-in-out infinite'
            }
        },
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('aura', '.aura &');
            addVariant('ruby', '.ruby &');
        })
    ],
}
