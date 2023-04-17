/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('./src/imgs/bgHeader.jpg')",
        showcase: "url('./src/imgs/bgShowcase.jpg')",
      },
      fontFamily: {
        roboto: ['Roboto'],
      },
    },
  },
  plugins: [],
}
