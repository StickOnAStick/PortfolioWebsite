//tailwind.config.js
// eslint-disable-next-line no-undef
module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{js,jsx}', '.public/index/.html'],
  content: [
    "./src/Components/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
  ],
}
