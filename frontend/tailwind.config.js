/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ['"JetBrains Mono"', "sans-serif"],
    },
    extend: {
      colors: {
        'primary': '#ae7aff',
        'dark-solid': '#000',
        'dark-active': '#161616',
        'light-solid': '#fff',
        'light-transparent': 'rgba(255, 255, 255, 0.75)'
      }
    },
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        '.scrollbar-thin': {
          useScrollbarWidth: 'thin',
          scrollbarColor: '#ae7aff',
        },
        '.scrollbar-webkit': {
          '&::-webkit-scrollbar': {
            width:'4px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#161616',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ae7aff',
            borderRadius: '20px',
          }
        }
      }

      addUtilities(newUtilities, ['responsive', "hover"])
    }
  ],
};
