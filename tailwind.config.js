/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      primary: {
        100: '#FEE7E7',
        200: '#FCCFCF',
        300: '#FBB6B6',
        400: '#FA9E9E',
        500: '#F88686',
        DEFAULT: '#F76C6C',
        700: '#F43E3E',
        800: '#F20D0D',
      },
      yellow: {
        100: '#FFFBE1',
        200: '#FEF7C2',
        300: '#FEF090',
        400: '#FEEA5D',
        500: '#FDE32B',
        DEFAULT: '#F1D302',
        700: '#CAB102',
        800: '#B19B01',
      },
      blue: {
        100: '#F7FBFD',
        200: '#EBF4F9',
        300: '#D7EAF4',
        400: '#C4DFEE',
        500: '#B0D4E8',
        DEFAULT: '#A8D0E6',
        700: '#98C7E1',
        800: '#88BFDD',
      },
      'dark-blue': {
        100: '#A3AFDC',
        200: '#7E8ECE',
        300: '#596EBF',
        400: '#4055A6',
        500: '#314281',
        DEFAULT: '#24305E',
        700: '#151C37',
        800: '#0E1325',
      },
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        pattern: "url('/subtle-prism.svg')",
      },
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateY(-0.75rem)',
            opacity: 1,
          },
          '40%': {
            transform: 'translateY(0.75rem)',
            opacity: 0,
          },
          '100%': {
            opacity: 0,
          },
        },
      },
      animation: {
        scroll: 'scroll 1.5s ease-in infinite',
      },
    },
  },
  plugins: [],
};
