module.exports = {
   purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      fontFamily: {
         sans: ['ui-sans-serif', 'system-ui'],
         kaushan: ['Kaushan Script'],
      },
      extend: {
         colors: {
            green: {
               DEFAULT: '#00f260',
            },
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
