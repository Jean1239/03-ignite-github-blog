import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        base: {
          input: '#040f1a',
          background: '#071422',
          profile: '#0b1b2b',
          post: '#112131',
          border: '#1c2f41',
          label: '#3a536b',
          span: '#7b96b2',
          text: '#afc2d4',
          subtitle: '#c4d4e3',
          title: '#e7edf4',
        },
        brand: {
          blue: '#3294f8',
        },
      },
    },
  },
  plugins: [],
}
export default config
