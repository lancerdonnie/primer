module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgba(244, 228, 255, 0.3)',
        },
        secondary: { DEFAULT: 'rgb(242, 157, 75)', dark: 'rgb(231, 144, 61)' },
        alt: {
          1: 'rgb(60, 64, 95)',
          2: '#340046',
          3: '#FFBF33',
          4: '#B82BF9',
          5: '#ECC8FE',
          6: '#F6E7FE',
        },
      },
      screens: {
        sm: { max: '640px' },
        md: { max: '768px' },
        lg: { max: '1024px' },
        xl: { max: '1280px' },
        '2xl': { max: '1536px' },
      },
      fontFamily: {
        pop: ['Poppins'],
      },
      backgroundImage: {
        layer: "url('https://union54.com/shapes/layer-double.svg')",
      },
    },
  },
  plugins: [],
};
