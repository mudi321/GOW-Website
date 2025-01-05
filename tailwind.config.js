/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        GodOfWar: ['GODOFWAR', 'sans-serif'],
        zentry: ['zentry', 'sans-serif'],
        general: ['general', 'sans-serif'],
        'circular-web': ['circular-web', 'sans-serif'],
        'robert-medium': ['robert-medium', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif'],
        Berserker:['Berserker-Regular', 'sans-serif'],
      },
      colors: {
        lightRed: '#922929',
        lightBlue: '#4290DA',
        bloodRed: '#660000',
        gold: '#e4c590',
        silver: '#7F7F7F',
        matteBlack: "#28282B",
        White: '#FFFFFF',
        blue: {
          'light': '4290DA',
          50: '#DFDFF0',
          75: '#DfDFF2',
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
    },
  },
  plugins: [],
};