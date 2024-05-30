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
        bgForOrderBtn: '#1071FF',
        bgForSeacrchBorder: '#EAECEE',
        bgForMessageNotifaction: '#FF7E27',
        PhoneColor: '#1071FF',
      },
      fontSize: {
        xss: '10px'
      },
    },
  },
  plugins: [],
}
