module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        120: '30rem',
        180: '45rem',
        240: '60rem',
      },
      height: {
        120: '30rem',
        180: '45rem',
        240: '60rem',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: '#1e9caa',
          secondary: '#87b48e',
          accent: '#0a291c',
          neutral: '#ffffff',
          'base-100': '#000000',
          info: '#10b981',
          success: '#59926d',
          warning: '#fef3c7',
          error: '#fca5a5',
        },
      },
    ],
    base: false,
    utils: true,
    logs: false,
    rtl: false,
    prefix: '',
  },
}
