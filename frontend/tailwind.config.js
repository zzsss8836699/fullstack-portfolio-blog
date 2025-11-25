/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        harmony: {
          green: {
            50: '#f0f9f4',
            100: '#dcf2e3',
            200: '#bce5cc',
            300: '#8fd1a8',
            400: '#5ab37d',
            500: '#36965c',
            600: '#287a4a',
            700: '#22623d',
            800: '#1f4e33',
            900: '#1a412b',
          },
          pink: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
          },
          primary: '#36965c',
          secondary: '#f87171',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

