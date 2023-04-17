/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        showcase:
          "url('https://github.com/Batikann/book-search-app/blob/master/src/imgs/bgShowcase.jpg')",
      },
      fontFamily: {
        roboto: ['Roboto'],
      },
    },
  },
  plugins: [],
}
