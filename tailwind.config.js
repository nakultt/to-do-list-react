
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        'primary-dark': '#0056b3',
        secondary: '#6c757d',
        accent: '#28a745',
        'accent-dark': '#218838',
        danger: '#dc3545',
        'danger-dark': '#c82333',
        'noir-dark': '#1a1a1a',
        'ivory-light': '#f0f0f0',
        'gold-accent': '#d4af37',
      },
      boxShadow: {
        light: '0 6px 18px rgba(0, 0, 0, 0.08)',
        strong: '0 4px 12px rgba(0, 0, 0, 0.15)',
        luxury: '0 10px 30px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
} 