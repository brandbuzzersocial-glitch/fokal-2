/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#000000', // Pure Black
          800: '#111111', // Very Dark Gray
          950: '#050505',
        },
        orange: {
          500: '#dc2626', // Red 600 (strong red)
          600: '#b91c1c', // Red 700 (darker red)
          50: '#fef2f2',
        },
        green: {
          900: '#2d5016', // Military Green
        },
        silver: {
          400: '#c0c0c0', // Metallic Silver
        },
        gray: {
          50: '#f8f9fa', // Light Gray
        },
        semantic: {
          success: '#28a745',
          warning: '#ffc107',
          info: '#17a2b8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Rajdhani', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/assets/hero-pattern.png')",
      }
    },
  },
  plugins: [],
}

