/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'hsl(136, 65%, 81%)',
          200: 'hsl(136, 65%, 71%)',
          300: 'hsl(136, 65%, 61%)',
          400: 'hsl(136, 65%, 51%)',
          500: 'hsl(136, 65%, 41%)',
          600: 'hsl(136, 65%, 31%)',
          700: 'hsl(136, 65%, 21%)',
          800: 'hsl(136, 65%, 11%)',
          900: 'hsl(136, 65%, 1%)',
        },
        accent: {
          400: 'hsl(192, 70%, 51%)',
        },
        neutral: {
          100: 'hsl(0, 0%, 100%)',
          200: 'hsl(0, 0%, 98%)',
          300: 'hsl(220, 16%, 96%)',
          400: 'hsl(233, 8%, 62%)',
          500: 'hsl(233, 26%, 24%)',
        }
      },
      fontFamily: {
        primary: ['Public Sans', 'sans-serif'],
        nav: ['Public Sans', 'sans-serif'],
        headtext: ['Public Sans', 'sans-serif'],
        body: ['Public Sans', 'sans-serif'],
        button: ['Public Sans', 'sans-serif'],
      },
    },
  },
  screens: {
    'phone-xsmall': '320px',
    'phone-small': '375px',
    'phone': '425px',
    'phone-wide': '480px',
    'phablet': '560px',
    'tablet-small': '640px',
    'tablet': '768px',
    'tablet-wide': '992px',
    'desktop-small': '1024px',
    'desktop': '1200px',
    'desktop-wide': '1439px',
    'desktop-ultra': '1599px',
  },
  plugins: [],
}
