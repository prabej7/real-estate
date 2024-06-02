/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'violet-transparent':'#673da67e',
        'violet':'#673DA6',
        'blue':'#4169E1',
        'orange':'#F6BC98',
        'cream-white':'#F6F6F6'
      }
    },
  },
  plugins: [],
}

