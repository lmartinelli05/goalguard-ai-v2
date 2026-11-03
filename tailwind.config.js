/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E5BFF', // Electric Blue
          dark: '#1E4BCC',
          light: '#5C8BFF',
        },
        accent: {
          DEFAULT: '#C0FF00', // Neon Lime / Volt
          dark: '#A8D600',
          light: '#D9FF66',
        },
        slate: {
          dark: '#1A202C', // Deep Slate
          medium: '#2D3748',
          light: '#F7FAFC',
        },
      },
      backgroundImage: {
        'athletic-gradient': 'linear-gradient(135deg, #2E5BFF 0%, #1A202C 100%)',
      },
    },
  },
  plugins: [],
}
