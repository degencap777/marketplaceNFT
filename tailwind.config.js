/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        app: {
          black: {
            DEFAULT: '#373938',
          },
        }
      },
      placeholderColor: {
        app: {
          black: {
            DEFAULT: '#707070',
          },
        }
      },
      textColor: {
        app: {
          black: {
            DEFAULT: '#BBB5B5',
          },
        }
      },
    }
  },
  plugins: [],
}
