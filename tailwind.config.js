/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors :{
        'primary':'#3238f2'
      },
      fontFamily:{
        'display':['Poppins','sans-serif'],
        'body':['Inter','sans-serif']
      },
      
      keyframes: {
        Move: {
          
          '0%': { transform: 'translateY(-900px)' },
          '100%':{ transform: 'translateY(0)'}
        }
      },
      
      animation:{
         
         'Move' : 'Move 0.8s ease-in 1'
      }
    },
  },
  plugins: [],
}

