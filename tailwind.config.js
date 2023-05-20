module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    // screens: {
    //   'sm': '576px',
    //   'md': '768px',
    //   'lg': '992px',
    //   'xl': '1200px',
    // },
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
      height: {
        100: '40rem',
      },
      width: {
        100: '30rem',
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
