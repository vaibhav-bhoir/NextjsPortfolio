module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px',
      },
    },
    fontSize: {
      xs: ['0.625rem', '0.75rem'], // 10px, 12px
      sm: ['0.75rem', '0.875rem'], // 12px, 14px
      md: ['0.875rem', 1], // 14px, 16px
      base: ['1rem', '1.25rem'], // 16px, 20px
      lg: ['1.125rem', '1.375rem'], // 18px, 22px
      xl: ['1.25rem', '1.5rem'], // 20px, 24px
      '2xl': ['1.5rem', '1.875rem'], // 24px, 30px
      '3xl': ['1.75rem', '2.125rem'], // 28px, 34px
      '4xl': ['1.875rem', '2.25rem'], // 30px, 36px
      '5xl': ['2rem', '2.375rem'], // 32px, 38px
      '6xl': ['2.25rem', '2.625rem'], // 36px, 42px
      '7xl': ['2.75rem', '3rem'], // 44px, 48px
      '8xl': ['4rem', '4.5rem'], // 64px, 72px
      '9xl': ['5rem', '5.5rem'], // 80px, 88px
      '10xl': ['6.25rem', 1], // 100px, 100px
      '11xl': ['9.375rem', 1], // 150px, 150px
    },
    fontFamily: {
      sans: [
        'Montserrat',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    boxShadow: {
      shadow: 'var(--box-shadow)',
    },
    extend: {
      fontFamily: {
        poppins: [
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      colors: {
        'main-bg': 'var(--main-bg)',
        'primary-bg': 'var(--primary-bg)',
        'body-bg': 'var(--body-bg)',
        'second-bg': 'var(--second-bg)',

        'primary-text': 'var(--primary-text)',
        primary: 'var(--primary)',
        'txt-white': 'var(--txt-white)',
        'box-shadow': 'var(--box-shadow)',
      },
      placeholderColor: {
        primary: 'var(--primary-placeholder)',
      },
      gradientColorStops: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      animation: {
        'spin-slow': 'spin 2.5s linear infinite',
        'up-down': 'up-down 2s ease-in-out infinite alternate-reverse both',
      },
      keyframes: {
        'up-down': {
          '0%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(-10px)' },
        },
      },
      transitionProperty: {
        left: 'left',
      },
      transitionTimingFunction: {
        'custom-ease-in-out': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
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
  // plugins: [require('@tailwindcss/typography')],
};
