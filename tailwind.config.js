/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        'md': '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        'lg': '0 8px 16px 0 rgba(0, 0, 0, 0.25)',
        'xl': '0 12px 24px 0 rgba(0, 0, 0, 0.3)',
        '2xl': '0 16px 32px 0 rgba(0, 0, 0, 0.35)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
      colors : {
         customBlue: '#2699fb',
      },
    },
  },
  plugins: [],
}
