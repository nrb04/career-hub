/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'purple': '#3f3cbb',
            'blue': '#818DFE',
            'hobina': '#f5f3ff',
            'violet': '#3f3cbb',
            'batam' : '#7E90FE'
        },
        extend: {
        


            
    },
},
plugins: [require("tw-elements/dist/plugin")]
}