import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Urbanist', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: '#141414',
        surface: '#f2f2f0',
        panel: '#ffffff',
        muted: '#6b6b6b',
        line: '#e3e3e0'
      },
      maxWidth: {
        page: '1200px'
      }
    }
  }
}
