/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgForHeader: '#F6F8FB',
        bgForCartPop: '#FF4E00',
      },
      fontSize: {
        xss: '10px'
      },
    },
  },
  plugins: [],
}
