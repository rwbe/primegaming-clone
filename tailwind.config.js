/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        // Adicione suas próprias cores aqui
        primeBlue: '#1A98FF',
        primeBlueHover: '#42AAFF',
        txtPrimeBlue: '#232F3E',
        gameName: '#42AAFF',
        card: '#1E182A',
        cardSubtitle: '#C2BCD3',
        footer: '#17141F',
        footerText: '#C2BCD3',
        backtoTop: '#211A2C',
        links: '#42AAFF',
        badge: '#1A98FF',
        secondBadge: '#004B7D',
        howToPlay: '#423B50',
        howToPlayBorder: '#C2BCD3',
        language: '#C2BCD3',
        learnMore: '#423B50',
        userMenuText: '#C2BCD3',
        userMenuBG: '#382F48',
        userMenuBGHover: '#50485E'  
      },
    },
  },
  plugins: [],
};
