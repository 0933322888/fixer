import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0f5',
          100: '#b3d1e0',
          200: '#80b2cb',
          300: '#4d93b6',
          400: '#1a74a1',
          500: '#0A3F5B',
          600: '#08324a',
          700: '#062539',
          800: '#041828',
          900: '#020b17',
        },
        accent: {
          50: '#fef3ed',
          100: '#fcd9c7',
          200: '#fabfa1',
          300: '#f8a57b',
          400: '#f68b55',
          500: '#DD4F06',
          600: '#b13f05',
          700: '#852f04',
          800: '#591f03',
          900: '#2d0f01',
        },
        neutral: {
          50: '#f5f4f3',
          100: '#e0ded9',
          200: '#cbc8bf',
          300: '#b6b2a5',
          400: '#a19c8b',
          500: '#5E5747',
          600: '#4b4639',
          700: '#38352b',
          800: '#25231d',
          900: '#12110f',
        },
        light: {
          50: '#f8fbfc',
          100: '#EDF4F5',
          200: '#d4e8eb',
          300: '#bbdce1',
          400: '#a2d0d7',
          500: '#89c4cd',
        },
        background: {
          DEFAULT: '#FFF9F0',
        },
      },
    },
  },
  plugins: [],
};
export default config;

