/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '460px'},
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'system-ui'],
      },
      backgroundColor: {
        'custom-overlay': 'rgba(0, 0, 0, 0.5)', 
      },
      backgroundImage: {
        'custom-radial-gradient': 'radial-gradient(rgb(151, 151, 151) 0%, rgb(30, 45, 87) 100%)',
      },
      boxShadow: {
        'custom-light': '0 0 10px 5px rgba(255, 255, 255, 0.7)',
      },
      gridTemplateColumns: {
        'custom': 'repeat(auto-fill, minmax(225px, 1fr))',
      },
      zIndex: {
        '1': '1', 
        '2': '2', 
      },
    },
  },
  plugins: [],
}

