module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'lf-teal': {
          DEFAULT: '#0FCCCE',
          '50': '#9DF7F8',
          '100': '#8AF5F6',
          '200': '#64F2F4',
          '300': '#3EEFF1',
          '400': '#18ECEE',
          '500': '#0FCCCE',
          '600': '#0B989A',
          '700': '#076465',
          '800': '#043131',
          '900': '#000000'
        },
        'lf-teal-dark': '#08b9bb',
        'lf-grey': '#b8c2cc',
        'lf-grey-dark': '#8795a1',
        'lf-grey-darker': '#606f7b',
        'lf-grey-darkest': '#3d4852',
        'lf-black': '#22292f',
        'lf-green': '#42d396',
        'lf-blue': '#65bbe7',
        'lf-violet': '#7674f5',
        'lf-grey-lighter': '#f1f5f8'
      },
    },
  },
  plugins: [],
}
