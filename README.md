# StockMarketReact-Tailwind-UI-UX
UI/UX design of a personalised stock market blogging site - customisable. Designed using React.js &amp; Tailwind CSS.

folow these steps if you are a beginner

1. Go to https://tailwindcss.com/docs/guides/create-react-app -> Docs 
2. Open terminal on your VS and install tailwind

npm install -D tailwindcss
npx tailwindcss init

3. Once installed you will see a file - tailwind.config.js in your project directory. Open that file and paste the below modified code.

//START

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


//END

4. The source folder with all the JS code is available in the github repository.
5. If you are using macos. These two shortcuts will save a lot of your time -
   
cmd +  shift + L - to change multiple lines together in vs code
shift + option up/down - to duplicate rows upwards/downwards 

In case of any queries, feel free to contact me at aarushnarang02@gmail.com. Happy learning!

   
