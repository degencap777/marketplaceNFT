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
            button: '#2A2A2A',
          },
          orange: {
            DEFAULT: '#FB713A',
            dark: 'rgba(251, 113, 58, 0.72)',
          }
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
            type: '#707070',
          },
          blue: {
            DEFAULT: '#61BDFF',
          },
          orange: {
            DEFAULT: '#FB713A',
            type: '#C46139',
          },
        }
      },
    }
  },
  plugins: [],
}
