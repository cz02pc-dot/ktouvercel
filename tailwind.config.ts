import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dde9ff',
          200: '#b7ceff',
          300: '#8bb0ff',
          400: '#5a88ff',
          500: '#335eff',
          600: '#2344ef',
          700: '#1f39d1',
          800: '#2032a9',
          900: '#1f2f84'
        }
      }
    }
  },
  plugins: []
};

export default config;
