/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f4ff',
          200: '#bae8ff',
          300: '#7dd4fd',
          400: '#38bdf8',
          500: '#2b82d9',
          600: '#1d6bb8',
          700: '#1e5496',
          800: '#1e3a8a',
          900: '#1e3a66',
        },
        accent: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#87cf4a',
          500: '#65a235',
          600: '#4d7c26',
          700: '#3f6212',
          800: '#365314',
          900: '#1a2e05',
        },
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}