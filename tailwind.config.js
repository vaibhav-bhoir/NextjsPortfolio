module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      textColor: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        black: 'var(--black)',
        white: 'var(--white)',
        gray: 'var(--gray)',
        silver: 'var(--silver)',
        'light-black': 'var(--light-black)',
        'pearl-black': 'var(--pearl-black)',
        'light-white': 'var(--light-white)',
        'light-gray': 'var(--light-gray)',
      },
      backgroundColor: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        black: 'var(--black)',
        white: 'var(--white)',
        gray: 'var(--gray)',
        silver: 'var(--silver)',
        'light-black': 'var(--light-black)',
        'pearl-black': 'var(--pearl-black)',
        'light-white': 'var(--light-white)',
        'light-gray': 'var(--light-gray)',
      },
      gradientColorStops: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      animation: {
        'spin-slow': 'spin 2.5s linear infinite',
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
