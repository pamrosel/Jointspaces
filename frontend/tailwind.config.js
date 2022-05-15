module.exports = {
  // tree shaking code
  content: [ "./src/**/*.{html,js,jsx}" ],
  theme: {
    colors: {
      'white': '#ffffff',
      'plum': '#493843',
      'cream': '#e6e1c5',
      'pinky': '#ffbcd5',
      'greeny': '#61988e',
      'red': '#F87171',
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
