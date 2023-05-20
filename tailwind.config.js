module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        primary: '#05182c',
        secondary: {
          100: '#fffefe',
          900: '#8892B0',
        },
        info: '#fccf0c',
        success: '#02ef63',
        danger: '#fe6ea8',
        normal: '#07bcfc',
        frosted: '#1d2f41',
        darkblue: '#282F66',
        jaguar: '#2A2A2C',
        linkwater: '#CACCCE',
        hawkesblue: '#D6E0F4',
      },
      fontSize: {
        '10xl': '10rem',
        '15xl': '15rem',
      },
      transitionProperty: {
        left: 'left',
      },
      borderWidth: {
        1: '.5px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
