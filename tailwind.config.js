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
        cardStarColor: '#E6EFFB;',
        cardDiscountColor: '#FF7E27',
        bgForMessageNotifaction: '#FF7E27',
        PhoneColor: '#1071FF',
        instock: '#00893A',
        addToCartBtn: '#1071FF',
        adBox: '#2580FF',
        bgForFooter: '#F6F8FB',
        footerBorder: '#EAECEE',
      },
      fontSize: {
        xss: '10px'
      },
    },
  },
  plugins: [],
}
