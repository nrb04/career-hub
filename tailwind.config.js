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
            'batam': '#7E90FE',
            'halkakala': '#F4F4F4',
            'himage': '#cffafe',
            'tahiti': {
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                    700: '#0e7490',
                    800: '#155e75',
                    900: '#164e63',
                                },
        },
        fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
        },
        fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
        extend: {
            flexBasis: {
                'basis-2/4': '50%',
            'basis-1/4': '25%',
            'basis-2/3': '66%',
              'basis-1/3': '33%',
            },
            zIndex: {
                '20': '20',
                '10': '10',
                '0': '0',
                
                },
                        
           
        


            
    },
},
plugins: [require("tw-elements/dist/plugin")]
}