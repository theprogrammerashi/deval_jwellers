/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    400: '#D4AF37', // Classic Gold
                    500: '#C5A028',
                    600: '#B49020',
                },
                dark: {
                    900: '#0F0F0F', // Rich Black
                    800: '#1A1A1A',
                    700: '#2A2A2A',
                }
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Lato', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
