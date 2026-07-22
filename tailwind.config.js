/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001f4d',
        'light-bg': '#f3f7ff',
        'accent': '#ff6b3b',
      },
      spacing: {
        '18': '4.5rem',
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '24px',
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'medium': '0 15px 40px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        slideIn: {
          'from': { transform: 'translateX(100%)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
