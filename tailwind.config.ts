import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0f1f',
        fog: '#e6e8ef',
        slate: '#141a2b',
        accent: '#2db0ff',
      },
    },
  },
  plugins: [],
}

export default config
