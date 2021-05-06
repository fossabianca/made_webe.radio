module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        // One example using shadow-lg -> shadow-lg-invert
        'lg-invert':
          '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
      },
      colors: {
      },
    },
    darkSelector: '.dark-mode',
  },
  variants: {
    extend: {},
    backgroundColor: [ "dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd", "hover", "responsive" ],
    borderColor: [ "dark", "dark-focus", "dark-focus-within", "hover", "responsive" ],
    textColor: [ "dark", "dark-hover", "dark-active", "hover", "responsive" ],
    // Control the shadows on dark mode to invert colors
    boxShadow: [ 'responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'dark' ],
  },
  plugins: [
    require( 'tailwindcss-dark-mode' )(),
    require( '@tailwindcss/aspect-ratio' ),
  ],
}
