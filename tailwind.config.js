/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        'overlock-sc': ['"Overlock SC"', 'cursive'],
        'sora': ['Sora', 'sans-serif'],
      },
      backgroundColor: {
        'pri': '#040C24',
        'sec': '#FFFDD0',
        'acc': '#691540',
      },
      textColor: {
        'pri': '#040C24',
        'acc': '#691540',
        'sec': '#FFFDD0',
      },
      borderColor: {
        'pri': '#040C24',
        'sec': '#FFFDD0',
        'acc': '#691540',
      },
    },
  },
  plugins: [],
}