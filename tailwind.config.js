/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont :['Montserrat']
      },
      backgroundImage:{
        bannerbg: "url('/src/assets/banner.png')",
        grand: "url('/src/assets/grand.png')"
      }
    },
  },
  plugins: [],
}

