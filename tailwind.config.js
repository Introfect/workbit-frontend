/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        spotify_green:{
          DEFAULT: '#1DB954',
        }
    },
  },
},
plugins: [],
}
