module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui'),],
}

// npx tailwindcss-cli@latest build ./tailwind.css -o ./tailwind.css