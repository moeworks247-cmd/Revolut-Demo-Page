/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Instrument Serif', 'Georgia', 'serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#0a0a0f',
          raised: '#0e0e16',
          card: '#12121c',
          elevated: '#181824',
          glass: 'rgba(14, 14, 22, 0.72)',
        },
        accent: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          glow: 'rgba(59, 130, 246, 0.35)',
        },
        electric: '#3b82f6',
        profit: '#22c55e',
        loss: '#ef4444',
        warning: '#f59e0b',
      },
      boxShadow: {
        glow: '0 0 60px rgba(59, 130, 246, 0.12)',
        card: '0 8px 32px rgba(0, 0, 0, 0.5)',
        modal: '0 -8px 40px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
